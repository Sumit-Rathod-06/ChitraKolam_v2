import torch
from diffusers import StableDiffusionXLPipeline
from datetime import datetime

print("Loading SDXL model...")
pipe = StableDiffusionXLPipeline.from_pretrained(
    "stabilityai/stable-diffusion-xl-base-1.0",
    torch_dtype=torch.float16,
    variant="fp16"
).to("cuda")

# OLD METHOD (works on older diffusers)
lora_path = "./models/kolam_lora.safetensors"
print("Loading LoRA (old API)...")
pipe.unet.load_attn_procs(lora_path)

pipe.safety_checker = lambda images, **kwargs: (images, False)

def generate_kolam(prompt):
    print(f"Generating: {prompt}")
    result = pipe(prompt, num_inference_steps=30, guidance_scale=7.5)
    img = result.images[0]

    from datetime import datetime
    path = f"./outputs/kolam_{datetime.now().strftime('%Y%m%d_%H%M%S')}.png"
    img.save(path)
    return path
