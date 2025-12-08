import torch
from flask import Flask, request, jsonify
from flask_cors import CORS
from diffusers import StableDiffusionXLPipeline
import io
import base64
import os

app = Flask(__name__)
CORS(app)

# --- CONFIGURATION ---
# STRICTLY CPU SETTINGS
DEVICE = "cpu"
LORA_PATH = "./models/kolam_lora.safetensors"
BASE_MODEL = "stabilityai/stable-diffusion-xl-base-1.0"

print("--- STARTING CPU MODE ---")
print("Warning: SDXL on CPU is very slow (approx 5-15 mins per image).")
print("Loading model... This will take a while and use significant RAM.")

# --- LOAD MODEL ---
try:
    # 1. Load the pipeline in Float32 (Required for CPU)
    # We remove variant="fp16" and torch_dtype=float16
    pipe = StableDiffusionXLPipeline.from_pretrained(
        BASE_MODEL,
        torch_dtype=torch.float32, 
        use_safetensors=True
    )
    
    # 2. Load LoRA weights
    if os.path.exists(LORA_PATH):
        try:
            pipe.load_lora_weights(LORA_PATH)
            print(f"LoRA loaded from {LORA_PATH}")
        except Exception as e:
            print(f"Standard LoRA load failed, trying attn_procs: {e}")
            try:
                pipe.unet.load_attn_procs(LORA_PATH)
            except Exception as e2:
                print(f"Could not load LoRA: {e2}")
    else:
        print(f"Warning: LoRA file not found at {LORA_PATH}")

    # 3. Move to CPU
    pipe.to(DEVICE)
    
    # Disable xformers specifically to prevent the error you saw
    try:
        pipe.disable_xformers_memory_efficient_attention()
    except:
        pass

    print("Model loaded successfully on CPU!")
    
except Exception as e:
    print(f"CRITICAL ERROR loading model: {e}")
    pipe = None

# --- API ROUTE ---
@app.route('/generate', methods=['POST'])
def generate_kolam():
    if pipe is None:
        return jsonify({"error": "Model failed to load."}), 500

    try:
        data = request.json
        prompt_text = data.get("prompt", "black-white symmetric and beautiful kolam design")
        
        # Reduce steps for CPU to make it faster (defaults to 20 instead of 30-50)
        num_steps = data.get("steps", 20) 

        print(f"Generating: {prompt_text} (Steps: {num_steps})")
        
        # Run Inference
        with torch.inference_mode():
            image = pipe(
                prompt=prompt_text, 
                num_inference_steps=num_steps, 
                guidance_scale=7.5
            ).images[0]

        # Convert to Base64
        buffered = io.BytesIO()
        image.save(buffered, format="PNG")
        img_str = base64.b64encode(buffered.getvalue()).decode("utf-8")

        return jsonify({
            "status": "success",
            "image_base64": f"data:image/png;base64,{img_str}",
            "prompt": prompt_text
        })

    except Exception as e:
        print(f"Generation Error: {e}")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)