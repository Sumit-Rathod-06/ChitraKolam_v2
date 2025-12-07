import torch
from diffusers import StableDiffusionXLPipeline
from datetime import datetime
import os

# Load SDXL base model
print("Loading SDXL model...")
pipe = StableDiffusionXLPipeline.from_pretrained(
    "stabilityai/stable-diffusion-xl-base-1.0",
    torch_dtype=torch.float16,
    variant="fp16"
)

pipe.to("cuda")

# Load your LoRA weights
lora_path = "./models/kolam_lora.safetensors"
print("Loading LoRA weights...")
pipe.unet.load_attn_procs(lora_path)

# Disable NSFW checker if needed
pipe.safety_checker = lambda images, **kwargs: (images, False)

def generate_kolam(prompt):
    """Generate a Kolam image using SDXL + LoRA."""
    
    print(f"Generating image for prompt: {prompt}")

    result = pipe(
        prompt=prompt,
        num_inference_steps=30,
        guidance_scale=7.5
    )

    image = result.images[0]

    # Save image
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    file_path = f"./outputs/kolam_{timestamp}.png"
    image.save(file_path)

    return file_path
