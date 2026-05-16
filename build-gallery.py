from pathlib import Path
import json

BASE_DIR = Path("images/gallery/full")
OUTPUT_FILE = Path("js/gallery-data.js")
IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp", ".heic"}

def is_image(f):
    return f.suffix.lower() in IMAGE_EXTENSIONS

def get_year_sort_key(folder):
    # For ranges like "2021-2025", sort by end year. For "2026", sort by that year.
    parts = folder.name.replace("–", "-").split("-")
    try:
        return int(parts[-1])
    except ValueError:
        return 0

if not BASE_DIR.exists():
    print("Gallery folder not found.")
    exit()

folders = sorted(
    [f for f in BASE_DIR.iterdir() if f.is_dir()],
    key=get_year_sort_key,
    reverse=True
)

gallery_data = []
for folder in folders:
    images = sorted([f for f in folder.iterdir() if is_image(f)], reverse=True)
    if not images:
        continue
    gallery_data.append({
        "year": folder.name,
        "images": [str(img).replace("\\", "/") for img in images]
    })

OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)

with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
    f.write("const galleryData = ")
    f.write(json.dumps(gallery_data, indent=4))
    f.write(";\n")

for group in gallery_data:
    print(f"✔ {len(group['images'])} images added from {group['year']}")