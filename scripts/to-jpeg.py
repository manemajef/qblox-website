from PIL import Image
import os

def to_jpg(dir, filename, ext = "png"):
    if len(filename.split(".")) > 1:
        input_path = os.path.join(dir, filename)
        output_path = os.path.join(dir, os.path.splitext(filename)[0] + ".jpg")
    else:
        input_path = os.path.join(dir, f"{filename}.{ext}")
        output_path = os.path.join(dir, f"{filename}.jpg")

    with Image.open(input_path) as img:
        img = img.convert("RGBA")
        background = Image.new("RGB", img.size, (255, 255, 255))
        background.paste(img, mask=img.split()[3])  # apply transparency mask
        background.save(
            output_path, "JPEG", quality = 85 , optimize = True, progressive = True
        )
        print(f"converted: {filename}")

dir = "public" 
filename = "thumbnail"

def colorwheel():
    work_dir = os.path.join("public", "colorwheel")
    if not os.path.exists(work_dir):
        print(f"Directory not found: {work_dir}")
        return
    for f in os.listdir(work_dir):
        if f.startswith("."):
            continue
        to_jpg(work_dir, f)

if __name__ == "__main__":
    colorwheel()
    
