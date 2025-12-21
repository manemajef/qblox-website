import os

from PIL import Image

INPUT_DIR = "video"
OUTPUT_DIR = "video-jpeg"
QUALITY = 85  # good balance for websites (60-90 range)

os.makedirs(OUTPUT_DIR, exist_ok=True)

for filename in os.listdir(INPUT_DIR):
    if filename.lower().endswith(".png"):
        input_path = os.path.join(INPUT_DIR, filename)
        output_filename = os.path.splitext(filename)[0] + ".jpg"
        output_path = os.path.join(OUTPUT_DIR, output_filename)

        with Image.open(input_path) as img:
            img = img.convert("RGBA")  # ensure alpha channel

            # Create a white background
            background = Image.new("RGB", img.size, (255, 255, 255))
            background.paste(img, mask=img.split()[3])  # apply transparency mask

            # Save as optimized JPEG
            background.save(
                output_path, "JPEG", quality=QUALITY, optimize=True, progressive=True
            )

        print(f"Converted: {filename} → {output_filename}")

print("\nDone! Check the output_jpegs folder.")
