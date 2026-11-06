#!/usr/bin/env python3
"""
Generate 1200x630 Pastel-Tech Open Graph social preview cards in public/og/<slug>.png
for every project in src/content/projects/es/*.md.

Visual Design:
- 1200x630 dark canvas (#090d16) with soft radial glowing orbs:
  Electric Violet (#8b5cf6 / #b98dfd) top-left and Crystal Aqua (#2ee6e5) bottom-right.
- Glassmorphic bento card frame (1104x534 centered at (48, 48), radius 28,
  fill #111827 with alpha, border #ffffff at 12% opacity).
- Left side: Project icon inside a rounded 180x180 pedestal box (falls back to
  public/logo-ac.png when the configured icon is an .svg).
- Right side: Language-neutral layout (works identically for ES and EN links):
  - Top kicker badge: canonical subdomain (<slug>.ana-catalina.com) or ANA-CATALINA · PROJECTS HUB
  - Crisp white project title (auto-scaled and wrapped cleanly)
  - Top 4 technology pills from frontmatter `technologies`
  - Subtle Ana-Catalina brand footer
"""

import glob
import os
import re
from urllib.parse import urlparse
from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "..", ".."))
ES_PROJECTS_DIR = os.path.join(ROOT_DIR, "src", "content", "projects", "es")
EN_PROJECTS_DIR = os.path.join(ROOT_DIR, "src", "content", "projects", "en")
PUBLIC_DIR = os.path.join(ROOT_DIR, "public")
OG_DIR = os.path.join(PUBLIC_DIR, "og")

WIDTH, HEIGHT = 1200, 630


def load_font(candidates, size):
    fonts_dir = r"C:\Windows\Fonts"
    for name in candidates:
        path = os.path.join(fonts_dir, name)
        if os.path.exists(path):
            try:
                return ImageFont.truetype(path, size)
            except Exception:
                pass
        try:
            return ImageFont.truetype(name, size)
        except Exception:
            pass
    return ImageFont.load_default()


def parse_frontmatter(md_path):
    with open(md_path, encoding="utf-8") as f:
        content = f.read()

    m = re.match(r"^---\s*\n(.*?)\n---", content, re.S)
    fm = m.group(1) if m else content

    def get_scalar(key):
        match = re.search(rf"^{key}:\s*['\"]?(.*?)['\"]?\s*$", fm, re.M)
        return match.group(1).strip() if match else ""

    title = get_scalar("title")
    icon = get_scalar("icon")
    website_url = get_scalar("websiteUrl")
    project_type = get_scalar("type") or "desktop"

    techs = []
    tech_block = re.search(r"^technologies:\s*\n((?:\s*-\s*.*\n)+)", fm, re.M)
    if tech_block:
        for line in tech_block.group(1).strip().split("\n"):
            val = re.sub(r"^\s*-\s*['\"]?(.*?)['\"]?\s*$", r"\1", line).strip()
            if val:
                techs.append(val)
    else:
        tech_inline = re.search(r"^technologies:\s*\[(.*?)\]", fm, re.M)
        if tech_inline:
            techs = [
                t.strip().strip("'\"")
                for t in tech_inline.group(1).split(",")
                if t.strip()
            ]

    return {
        "title": title,
        "icon": icon,
        "websiteUrl": website_url,
        "type": project_type,
        "technologies": techs,
    }


def clean_universal_title(slug, es_title, en_title):
    """Return a clean, language-neutral project title."""
    # Prefer English/universal title without parenthetical localized suffixes
    raw = en_title or es_title or slug
    # Strip parenthetical localized descriptors if the base name is already clear
    if slug == "anacatalina-cv":
        return "anacatalina-cv"
    if slug == "anacatalina-mcp":
        return "anacatalina-mcp"
    if slug == "projects-hub":
        return "Projects Hub"
    if " — " in raw:
        raw = raw.split(" — ")[0].strip()
    return raw


def create_base_canvas():
    """Create the 1200x630 Pastel-Tech dark canvas with glowing radial orbs and bento frame."""
    base = Image.new("RGBA", (WIDTH, HEIGHT), (9, 13, 22, 255))

    # Subtle vertical gradient toward #0f172a
    grad = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    gdraw = ImageDraw.Draw(grad)
    for y in range(HEIGHT):
        t = y / HEIGHT
        r = int(9 + (15 - 9) * t)
        g = int(13 + (23 - 13) * t)
        b = int(22 + (42 - 22) * t)
        gdraw.line([(0, y), (WIDTH, y)], fill=(r, g, b, 255))
    base = Image.alpha_composite(base, grad)

    # Radial aura orbs layer
    orbs = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    odraw = ImageDraw.Draw(orbs)
    # Top-left Electric Violet (#8b5cf6 / #b98dfd)
    odraw.ellipse((-180, -180, 560, 500), fill=(139, 92, 246, 72))
    odraw.ellipse((-60, -80, 380, 340), fill=(185, 141, 253, 55))
    # Bottom-right Crystal Aqua (#2ee6e5)
    odraw.ellipse((680, 180, 1380, 820), fill=(46, 230, 229, 64))
    odraw.ellipse((820, 280, 1260, 680), fill=(46, 230, 229, 45))
    orbs = orbs.filter(ImageFilter.GaussianBlur(radius=95))
    base = Image.alpha_composite(base, orbs)

    # Subtle dot grid inside canvas for high-tech aesthetic
    grid = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    grdraw = ImageDraw.Draw(grid)
    for gx in range(72, WIDTH - 72, 36):
        for gy in range(72, HEIGHT - 72, 36):
            grdraw.point((gx, gy), fill=(255, 255, 255, 16))
    base = Image.alpha_composite(base, grid)

    # Glassmorphic bento card frame (1104x534 centered at (48, 48), radius 28)
    card_layer = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    cdraw = ImageDraw.Draw(card_layer)
    card_box = (48, 48, 48 + 1104, 48 + 534)
    cdraw.rounded_rectangle(
        card_box,
        radius=28,
        fill=(17, 24, 39, 215),
        outline=(255, 255, 255, 31),
        width=2,
    )

    # Subtle top highlight line on the bento card
    cdraw.line([(84, 49), (1116, 49)], fill=(185, 141, 253, 70), width=1)
    cdraw.line([(84, 581), (1116, 581)], fill=(46, 230, 229, 55), width=1)

    base = Image.alpha_composite(base, card_layer)
    return base


def resolve_icon_path(icon_rel):
    if icon_rel and icon_rel.endswith(".png"):
        candidate = os.path.join(PUBLIC_DIR, icon_rel.lstrip("/").replace("/", os.sep))
        if os.path.exists(candidate):
            return candidate
    return os.path.join(PUBLIC_DIR, "logo-ac.png")


def wrap_title_lines(draw, text, font, max_width):
    words = text.split()
    lines = []
    current = ""
    for w in words:
        test = f"{current} {w}".strip()
        bbox = draw.textbbox((0, 0), test, font=font)
        if bbox[2] - bbox[0] <= max_width or not current:
            current = test
        else:
            lines.append(current)
            current = w
    if current:
        lines.append(current)
    return lines


def generate_card(slug, es_meta, en_meta, template_canvas):
    canvas = template_canvas.copy()
    draw = ImageDraw.Draw(canvas)

    # 1. Left side: 180x180 rounded pedestal box for project icon
    ped_x, ped_y, ped_size = 112, 195, 180
    ped_layer = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    pdraw = ImageDraw.Draw(ped_layer)

    # Soft glow behind pedestal
    pdraw.rounded_rectangle(
        (ped_x - 8, ped_y - 8, ped_x + ped_size + 8, ped_y + ped_size + 8),
        radius=40,
        fill=(139, 92, 246, 42),
    )
    ped_layer = ped_layer.filter(ImageFilter.GaussianBlur(radius=14))
    pdraw = ImageDraw.Draw(ped_layer)

    pdraw.rounded_rectangle(
        (ped_x, ped_y, ped_x + ped_size, ped_y + ped_size),
        radius=36,
        fill=(15, 23, 42, 240),
        outline=(255, 255, 255, 42),
        width=2,
    )
    canvas = Image.alpha_composite(canvas, ped_layer)
    draw = ImageDraw.Draw(canvas)

    icon_path = resolve_icon_path(es_meta["icon"])
    if os.path.exists(icon_path):
        icon_im = Image.open(icon_path).convert("RGBA")
        target_icon_sz = 132
        icon_im = icon_im.resize((target_icon_sz, target_icon_sz), Image.Resampling.LANCZOS)

        # Rounded mask in case the icon has square opaque corners
        mask = Image.new("L", (target_icon_sz, target_icon_sz), 0)
        mdraw = ImageDraw.Draw(mask)
        mdraw.rounded_rectangle((0, 0, target_icon_sz, target_icon_sz), radius=26, fill=255)
        alpha = icon_im.getchannel("A")
        combined_alpha = Image.composite(alpha, Image.new("L", alpha.size, 0), mask)
        icon_im.putalpha(combined_alpha)

        ix = ped_x + (ped_size - target_icon_sz) // 2
        iy = ped_y + (ped_size - target_icon_sz) // 2
        canvas.alpha_composite(icon_im, (ix, iy))

    # 2. Right side content area
    right_x = 340
    max_right_w = 1096 - right_x

    font_kicker = load_font(["consolab.ttf", "consola.ttf", "seguisb.ttf"], 19)
    font_pill = load_font(["consolab.ttf", "consola.ttf", "seguisb.ttf"], 18)
    font_footer = load_font(["seguisb.ttf", "segoeui.ttf"], 19)
    font_footer_mono = load_font(["consola.ttf", "segoeui.ttf"], 18)

    # Determine kicker badge text
    web_url = es_meta.get("websiteUrl", "")
    if web_url:
        parsed = urlparse(web_url)
        host = parsed.netloc or web_url.replace("https://", "").replace("http://", "").strip("/")
        kicker_text = host.upper()
    elif slug == "anacatalina-cv":
        kicker_text = "CV.ANA-CATALINA.COM"
    elif slug == "projects-hub":
        kicker_text = "PROJECTS.ANA-CATALINA.COM"
    else:
        kicker_text = "ANA-CATALINA · PROJECTS HUB"

    # Draw top kicker pill badge in Crystal Aqua (#2ee6e5)
    kb_bbox = draw.textbbox((0, 0), kicker_text, font=font_kicker)
    kb_w = (kb_bbox[2] - kb_bbox[0]) + 34
    kb_h = 38
    kb_y = 118

    badge_layer = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    bdraw = ImageDraw.Draw(badge_layer)
    bdraw.rounded_rectangle(
        (right_x, kb_y, right_x + kb_w, kb_y + kb_h),
        radius=19,
        fill=(46, 230, 229, 26),
        outline=(46, 230, 229, 115),
        width=1,
    )
    canvas = Image.alpha_composite(canvas, badge_layer)
    draw = ImageDraw.Draw(canvas)
    draw.text(
        (right_x + 17, kb_y + 7),
        kicker_text,
        font=font_kicker,
        fill=(46, 230, 229, 255),
    )

    # 3. Project Title (auto-scaled so it fits cleanly on 1-2 lines)
    title_text = clean_universal_title(slug, es_meta["title"], en_meta["title"])
    for pt_size in (58, 52, 46, 40):
        font_title = load_font(["segoeuib.ttf", "arialbd.ttf"], pt_size)
        lines = wrap_title_lines(draw, title_text, font_title, max_right_w)
        if len(lines) <= 2:
            break

    title_y = 180
    line_height = int(pt_size * 1.18)
    for line in lines[:2]:
        draw.text((right_x, title_y), line, font=font_title, fill=(248, 250, 252, 255))
        title_y += line_height

    # Subtle accent bar under title
    bar_y = title_y + 18
    draw.rounded_rectangle(
        (right_x, bar_y, right_x + 76, bar_y + 4),
        radius=2,
        fill=(185, 141, 253, 230),
    )
    draw.rounded_rectangle(
        (right_x + 86, bar_y, right_x + 114, bar_y + 4),
        radius=2,
        fill=(46, 230, 229, 210),
    )

    # 4. Technology pills (up to 4 pills from `technologies`)
    techs = (en_meta.get("technologies") or es_meta.get("technologies") or [])[:4]
    pills_y = bar_y + 34
    px = right_x
    pill_h = 40
    pill_layer = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    pl_draw = ImageDraw.Draw(pill_layer)

    placed_pills = []
    for tech in techs:
        tb = draw.textbbox((0, 0), tech, font=font_pill)
        tw = tb[2] - tb[0]
        pw = tw + 32
        if px + pw > 1104:
            if pills_y + pill_h + 12 < 465:
                px = right_x
                pills_y += pill_h + 12
            else:
                break
        pl_draw.rounded_rectangle(
            (px, pills_y, px + pw, pills_y + pill_h),
            radius=12,
            fill=(30, 41, 59, 210),
            outline=(185, 141, 253, 85),
            width=1,
        )
        placed_pills.append((px + 16, pills_y + 9, tech))
        px += pw + 12

    canvas = Image.alpha_composite(canvas, pill_layer)
    draw = ImageDraw.Draw(canvas)
    for tx, ty, tlabel in placed_pills:
        draw.text((tx, ty), tlabel, font=font_pill, fill=(226, 232, 240, 255))

    # 5. Brand Footer inside bento card bottom
    footer_y = 508
    draw.line([(112, footer_y - 16), (1088, footer_y - 16)], fill=(255, 255, 255, 22), width=1)

    # Small glowing dot + Ana-Catalina brand signature
    draw.ellipse((112, footer_y + 5, 124, footer_y + 17), fill=(46, 230, 229, 255))
    draw.text(
        (136, footer_y - 1),
        "Ana-Catalina · Software & AI Engineering",
        font=font_footer,
        fill=(148, 163, 184, 255),
    )

    right_footer = "projects.ana-catalina.com"
    rf_bbox = draw.textbbox((0, 0), right_footer, font=font_footer_mono)
    rf_w = rf_bbox[2] - rf_bbox[0]
    draw.text(
        (1088 - rf_w, footer_y),
        right_footer,
        font=font_footer_mono,
        fill=(185, 141, 253, 230),
    )

    # Quantize to 256 colors using MEDIANCUT on RGB for smooth radial gradients (< 100 KB PNG output)
    os.makedirs(OG_DIR, exist_ok=True)
    out_path = os.path.join(OG_DIR, f"{slug}.png")
    rgb_canvas = canvas.convert("RGB")
    quantized = rgb_canvas.quantize(
        colors=256,
        method=Image.Quantize.MEDIANCUT,
        dither=Image.Dither.FLOYDSTEINBERG,
    )
    quantized.save(out_path, format="PNG", optimize=True)
    return out_path


def main():
    os.makedirs(OG_DIR, exist_ok=True)
    template_canvas = create_base_canvas()

    es_files = sorted(glob.glob(os.path.join(ES_PROJECTS_DIR, "*.md")))
    print(f"Generating Open Graph cards for {len(es_files)} projects...")

    for es_path in es_files:
        slug = os.path.splitext(os.path.basename(es_path))[0]
        en_path = os.path.join(EN_PROJECTS_DIR, f"{slug}.md")
        es_meta = parse_frontmatter(es_path)
        en_meta = parse_frontmatter(en_path) if os.path.exists(en_path) else es_meta

        out_path = generate_card(slug, es_meta, en_meta, template_canvas)
        sz_kb = os.path.getsize(out_path) / 1024
        with Image.open(out_path) as im:
            dims = im.size
            fmt = im.format
        print(f"  [OK] {slug:26s} -> public/og/{slug}.png ({dims[0]}x{dims[1]}, {fmt}, {sz_kb:5.1f} KB)")


if __name__ == "__main__":
    main()
