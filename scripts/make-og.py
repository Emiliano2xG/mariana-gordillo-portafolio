from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

root = Path(__file__).resolve().parents[1]
src = root / "public" / "Mariana_gordillo_cv_perfil.png"
out = root / "public" / "og.jpg"

W, H = 1200, 630
bg = (244, 239, 229)
ink = (32, 28, 24)
muted = (92, 82, 70)

canvas = Image.new("RGB", (W, H), bg)
photo = Image.open(src).convert("RGB")

panel_w = 520
scale = max(panel_w / photo.width, H / photo.height)
resized = photo.resize((int(photo.width * scale), int(photo.height * scale)), Image.Resampling.LANCZOS)
left = (resized.width - panel_w) // 2
top = int((resized.height - H) * 0.18)
cropped = resized.crop((left, top, left + panel_w, top + H))
canvas.paste(cropped, (0, 0))

draw = ImageDraw.Draw(canvas)
try:
    name_font = ImageFont.truetype(r"C:\Windows\Fonts\georgia.ttf", 64)
    role_font = ImageFont.truetype(r"C:\Windows\Fonts\georgia.ttf", 28)
    small_font = ImageFont.truetype(r"C:\Windows\Fonts\segoeui.ttf", 20)
except OSError:
    name_font = role_font = small_font = ImageFont.load_default()

x = 580
draw.text((x, 168), "Mariana", font=name_font, fill=ink)
draw.text((x, 244), "Gómez Gordillo", font=name_font, fill=ink)
draw.text((x, 360), "Branding y mercadotecnia", font=role_font, fill=muted)
draw.text((x, 410), "Tuxtla Gutiérrez, Chiapas", font=small_font, fill=muted)
draw.text((x, 520), "Portafolio", font=small_font, fill=ink)

canvas.save(out, "JPEG", quality=90)
print(out)
