"""Generate project card images for the portfolio.

Portrait 3:4 cards, dark site palette.
- calybe.png and tripsynk.png: full phone mockups (mobile apps)
- rn-pushdeck.png: posterized stacked bundles with version push arrow
"""

import math
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ASSETS = Path(__file__).resolve().parents[1] / "src" / "assets"

W, H = 900, 1200  # 3:4 portrait

BG = (10, 10, 10)
BG_ELEV = (19, 19, 20)
LINE = (38, 38, 42)
LINE_2 = (60, 60, 66)
LINE_3 = (90, 90, 96)
PHONE_BODY = (24, 24, 26)
PHONE_BEZEL = (50, 50, 54)
SCREEN_BG = (14, 14, 16)
TEXT = (250, 250, 250)
TEXT_2 = (180, 180, 184)
TEXT_3 = (107, 107, 112)

FONT_BOLD = "C:/Windows/Fonts/segoeuib.ttf"
FONT_SEMI = "C:/Windows/Fonts/segoeui.ttf"
FONT_MONO = "C:/Windows/Fonts/consola.ttf"


def base_card():
    img = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(img)
    # faint dotted grid
    for x in range(0, W, 40):
        for y in range(0, H, 40):
            d.point((x, y), fill=(28, 28, 30))
    # outer border
    d.rectangle([(8, 8), (W - 9, H - 9)], outline=LINE, width=2)
    return img, d


def text_centered(d, text, cx, y, size, color, font_path=FONT_BOLD):
    font = ImageFont.truetype(font_path, size)
    bbox = d.textbbox((0, 0), text, font=font)
    tw = bbox[2] - bbox[0]
    d.text((cx - tw / 2 - bbox[0], y - bbox[1]), text, font=font, fill=color)


def draw_phone(d, cx, cy, screen_w, screen_h, radius=64):
    """Draw a phone-shaped frame; returns inner screen bbox (sx0, sy0, sx1, sy1)."""
    body_pad = 18
    body_w = screen_w + body_pad * 2
    body_h = screen_h + body_pad * 2
    body_x0 = cx - body_w / 2
    body_y0 = cy - body_h / 2
    body_x1 = body_x0 + body_w
    body_y1 = body_y0 + body_h

    # outer body with subtle gradient ring (just 2 strokes)
    d.rounded_rectangle(
        [(body_x0 - 2, body_y0 - 2), (body_x1 + 2, body_y1 + 2)],
        radius=radius + body_pad + 2,
        outline=LINE,
        width=1,
    )
    d.rounded_rectangle(
        [(body_x0, body_y0), (body_x1, body_y1)],
        radius=radius + body_pad,
        fill=PHONE_BODY,
        outline=PHONE_BEZEL,
        width=3,
    )
    # screen
    sx0 = body_x0 + body_pad
    sy0 = body_y0 + body_pad
    sx1 = body_x1 - body_pad
    sy1 = body_y1 - body_pad
    d.rounded_rectangle(
        [(sx0, sy0), (sx1, sy1)],
        radius=radius,
        fill=SCREEN_BG,
    )
    # dynamic island / notch
    pill_w = 180
    pill_h = 34
    pill_x0 = cx - pill_w / 2
    pill_y0 = sy0 + 22
    d.rounded_rectangle(
        [(pill_x0, pill_y0), (pill_x0 + pill_w, pill_y0 + pill_h)],
        radius=17,
        fill=(5, 5, 5),
    )
    # side buttons
    d.rounded_rectangle(
        [(body_x0 - 5, body_y0 + 220), (body_x0 + 2, body_y0 + 320)],
        radius=3,
        fill=PHONE_BEZEL,
    )
    d.rounded_rectangle(
        [(body_x1 - 2, body_y0 + 280), (body_x1 + 5, body_y0 + 420)],
        radius=3,
        fill=PHONE_BEZEL,
    )
    return sx0, sy0, sx1, sy1


def draw_status_bar(d, sx0, sy0, sx1):
    time_font = ImageFont.truetype(FONT_SEMI, 22)
    d.text((sx0 + 36, sy0 + 22), "9:41", font=time_font, fill=TEXT_2)
    # signal / wifi / battery hints (right side)
    rx = sx1 - 40
    # battery
    d.rounded_rectangle([(rx - 44, sy0 + 28), (rx, sy0 + 44)], radius=3, outline=TEXT_3, width=2)
    d.rectangle([(rx, sy0 + 33), (rx + 3, sy0 + 39)], fill=TEXT_3)
    d.rounded_rectangle([(rx - 42, sy0 + 30), (rx - 18, sy0 + 42)], radius=2, fill=TEXT_3)
    # wifi dot
    d.ellipse([(rx - 66, sy0 + 32), (rx - 56, sy0 + 42)], fill=TEXT_3)


def draw_home_indicator(d, cx, sy1):
    indi_w = 150
    d.rounded_rectangle(
        [(cx - indi_w / 2, sy1 - 28), (cx + indi_w / 2, sy1 - 20)],
        radius=4,
        fill=LINE_3,
    )


# ---------- Calybe AI ----------
def make_calybe():
    img, d = base_card()

    sx0, sy0, sx1, sy1 = draw_phone(d, W / 2, H / 2, screen_w=720, screen_h=1100)
    draw_status_bar(d, sx0, sy0, sx1)
    draw_home_indicator(d, W / 2, sy1)

    cx = (sx0 + sx1) / 2

    # app header
    text_centered(d, "Calybe AI", cx, sy0 + 110, 56, TEXT)
    sub_font = ImageFont.truetype(FONT_MONO, 22)
    sub = "today . may 24"
    bbox = d.textbbox((0, 0), sub, font=sub_font)
    d.text((cx - (bbox[2] - bbox[0]) / 2, sy0 + 180), sub, font=sub_font, fill=TEXT_3)

    # huge calorie ring
    ring_r = 200
    ring_w = 26
    ring_cx = cx
    ring_cy = sy0 + 460
    d.ellipse(
        [(ring_cx - ring_r, ring_cy - ring_r), (ring_cx + ring_r, ring_cy + ring_r)],
        outline=LINE_2,
        width=ring_w,
    )
    d.arc(
        [(ring_cx - ring_r, ring_cy - ring_r), (ring_cx + ring_r, ring_cy + ring_r)],
        start=-90,
        end=-90 + 360 * 0.73,
        fill=TEXT,
        width=ring_w,
    )

    # flame icon centered above number
    flame_size = 60
    fcx, fcy = ring_cx, ring_cy - 70
    rr = flame_size * 0.55
    d.pieslice([(fcx - rr, fcy - rr), (fcx + rr, fcy + rr)], start=0, end=180, fill=TEXT)
    d.polygon(
        [(fcx, fcy - flame_size * 1.2), (fcx - rr * 0.95, fcy), (fcx + rr * 0.95, fcy)],
        fill=TEXT,
    )

    # calorie number
    num_font = ImageFont.truetype(FONT_BOLD, 80)
    num = "1,860"
    bbox = d.textbbox((0, 0), num, font=num_font)
    d.text(
        (ring_cx - (bbox[2] - bbox[0]) / 2, ring_cy + 20),
        num,
        font=num_font,
        fill=TEXT,
    )
    unit_font = ImageFont.truetype(FONT_MONO, 22)
    unit = "/ 2,400 kcal"
    bbox = d.textbbox((0, 0), unit, font=unit_font)
    d.text(
        (ring_cx - (bbox[2] - bbox[0]) / 2, ring_cy + 110),
        unit,
        font=unit_font,
        fill=TEXT_3,
    )

    # macro bars
    macro_y = sy0 + 750
    macros = [("Protein", 0.65, "120g"), ("Carbs", 0.45, "210g"), ("Fat", 0.30, "55g")]
    bar_font = ImageFont.truetype(FONT_MONO, 18)
    val_font = ImageFont.truetype(FONT_MONO, 18)
    label_x = sx0 + 50
    bar_x0 = sx0 + 180
    bar_x1 = sx1 - 130
    val_x = sx1 - 80
    for name, pct, val in macros:
        d.text((label_x, macro_y), name, font=bar_font, fill=TEXT_3)
        d.rounded_rectangle(
            [(bar_x0, macro_y + 8), (bar_x1, macro_y + 18)], radius=5, fill=LINE
        )
        d.rounded_rectangle(
            [(bar_x0, macro_y + 8), (bar_x0 + (bar_x1 - bar_x0) * pct, macro_y + 18)],
            radius=5,
            fill=TEXT_2,
        )
        d.text((val_x, macro_y), val, font=val_font, fill=TEXT_2)
        macro_y += 50

    # bottom tab bar hint
    tab_y = sy1 - 80
    d.line([(sx0 + 30, tab_y - 12), (sx1 - 30, tab_y - 12)], fill=LINE, width=1)
    tab_font = ImageFont.truetype(FONT_MONO, 16)
    tabs = ["home", "snap", "log", "you"]
    tab_w = (sx1 - sx0) / len(tabs)
    for i, t in enumerate(tabs):
        tx = sx0 + tab_w * (i + 0.5)
        bbox = d.textbbox((0, 0), t, font=tab_font)
        d.text(
            (tx - (bbox[2] - bbox[0]) / 2, tab_y),
            t,
            font=tab_font,
            fill=TEXT if i == 1 else TEXT_3,
        )

    img.save(ASSETS / "calybe.png", "PNG", optimize=True)
    print("wrote", ASSETS / "calybe.png")


# ---------- TripSynk ----------
def make_tripsynk():
    img, d = base_card()

    sx0, sy0, sx1, sy1 = draw_phone(d, W / 2, H / 2, screen_w=720, screen_h=1100)
    draw_status_bar(d, sx0, sy0, sx1)
    draw_home_indicator(d, W / 2, sy1)

    cx = (sx0 + sx1) / 2

    # app header
    text_centered(d, "TripSynk", cx, sy0 + 110, 52, TEXT)
    sub_font = ImageFont.truetype(FONT_MONO, 22)
    sub = "goa trip . 4 people"
    bbox = d.textbbox((0, 0), sub, font=sub_font)
    d.text((cx - (bbox[2] - bbox[0]) / 2, sy0 + 180), sub, font=sub_font, fill=TEXT_3)

    # big balance card
    card_x0 = sx0 + 40
    card_x1 = sx1 - 40
    card_y0 = sy0 + 250
    card_y1 = card_y0 + 200
    d.rounded_rectangle(
        [(card_x0, card_y0), (card_x1, card_y1)],
        radius=20,
        fill=BG_ELEV,
        outline=LINE_2,
        width=2,
    )
    lab_font = ImageFont.truetype(FONT_MONO, 20)
    d.text(
        (card_x0 + 28, card_y0 + 24),
        "YOU ARE OWED",
        font=lab_font,
        fill=TEXT_3,
    )
    big_font = ImageFont.truetype(FONT_BOLD, 80)
    d.text((card_x0 + 28, card_y0 + 58), "Rs 2,840", font=big_font, fill=TEXT)

    # divider
    d.line([(sx0 + 50, sy0 + 500), (sx1 - 50, sy0 + 500)], fill=LINE, width=1)
    sec_font = ImageFont.truetype(FONT_MONO, 18)
    d.text((sx0 + 50, sy0 + 520), "SETTLE UP", font=sec_font, fill=TEXT_3)

    # list rows with avatars
    row_y = sy0 + 570
    rows = [
        ("A", "Aarav owes you", "Rs 1,200", TEXT),
        ("R", "Riya owes you", "Rs 920", TEXT),
        ("Y", "You owe Dev", "Rs 360", TEXT_2),
    ]
    name_font = ImageFont.truetype(FONT_SEMI, 20)
    val_font = ImageFont.truetype(FONT_BOLD, 22)
    avatar_font = ImageFont.truetype(FONT_BOLD, 22)
    for letter, name, val, vcol in rows:
        ax = sx0 + 70
        ay = row_y + 22
        ar = 24
        d.ellipse([(ax - ar, ay - ar), (ax + ar, ay + ar)], outline=LINE_3, width=2, fill=BG_ELEV)
        bbox = d.textbbox((0, 0), letter, font=avatar_font)
        d.text(
            (ax - (bbox[2] - bbox[0]) / 2, ay - (bbox[3] - bbox[1]) / 2 - bbox[1]),
            letter,
            font=avatar_font,
            fill=TEXT_2,
        )
        d.text((ax + 50, row_y + 14), name, font=name_font, fill=TEXT)
        bbox = d.textbbox((0, 0), val, font=val_font)
        d.text(
            (sx1 - 50 - (bbox[2] - bbox[0]), row_y + 12),
            val,
            font=val_font,
            fill=vcol,
        )
        d.line([(sx0 + 50, row_y + 60), (sx1 - 50, row_y + 60)], fill=LINE, width=1)
        row_y += 80

    # bottom tab bar
    tab_y = sy1 - 80
    d.line([(sx0 + 30, tab_y - 12), (sx1 - 30, tab_y - 12)], fill=LINE, width=1)
    tab_font = ImageFont.truetype(FONT_MONO, 16)
    tabs = ["trips", "split", "pay", "you"]
    tab_w = (sx1 - sx0) / len(tabs)
    for i, t in enumerate(tabs):
        tx = sx0 + tab_w * (i + 0.5)
        bbox = d.textbbox((0, 0), t, font=tab_font)
        d.text(
            (tx - (bbox[2] - bbox[0]) / 2, tab_y),
            t,
            font=tab_font,
            fill=TEXT if i == 1 else TEXT_3,
        )

    img.save(ASSETS / "tripsynk.png", "PNG", optimize=True)
    print("wrote", ASSETS / "tripsynk.png")


# ---------- RN-Pushdeck (not a phone app — keep posterized) ----------
def make_rn_pushdeck():
    img, d = base_card()

    tag_font = ImageFont.truetype(FONT_MONO, 24)
    d.text((40, 36), "OTA UPDATE PLATFORM", font=tag_font, fill=TEXT_3)
    d.text((W - 40 - 60, 36), "NPM", font=tag_font, fill=TEXT_3)

    cx = W / 2
    cy = H / 2 - 80

    # stack of three bundles (perspective)
    base_w = 580
    base_h = 130
    layers = [
        (-60, 200, 0.85, BG_ELEV, LINE_2),
        (-30, 100, 0.93, BG_ELEV, LINE_2),
        (0, 0, 1.0, BG_ELEV, LINE_3),
    ]
    for ox, oy, ws, fill, border in layers:
        bw = base_w * ws
        x0 = cx - bw / 2 + ox
        y0 = cy + oy - base_h / 2
        d.rounded_rectangle(
            [(x0, y0), (x0 + bw, y0 + base_h)],
            radius=18,
            fill=fill,
            outline=border,
            width=2,
        )

    # version label on the top bundle
    ver_font = ImageFont.truetype(FONT_MONO, 34)
    label = "v1.0.3  bundle.js"
    bbox = d.textbbox((0, 0), label, font=ver_font)
    d.text(
        (cx - (bbox[2] - bbox[0]) / 2, cy - 18),
        label,
        font=ver_font,
        fill=TEXT,
    )
    # status pill on the top bundle
    pill_font = ImageFont.truetype(FONT_MONO, 18)
    pill_text = "LIVE"
    bbox = d.textbbox((0, 0), pill_text, font=pill_font)
    pw = bbox[2] - bbox[0] + 16
    ph = 26
    px0 = cx + base_w / 2 - pw - 24
    py0 = cy - base_h / 2 + 14
    d.rounded_rectangle(
        [(px0, py0), (px0 + pw, py0 + ph)],
        radius=8,
        fill=BG,
        outline=LINE_3,
        width=1,
    )
    d.text((px0 + 8 - bbox[0], py0 + 3), pill_text, font=pill_font, fill=TEXT_2)

    # upward push arrow above the stack
    ax = cx
    ay_bot = cy - 90
    ay_top = cy - 280
    d.line([(ax, ay_bot), (ax, ay_top)], fill=TEXT_2, width=5)
    d.polygon(
        [(ax - 18, ay_top + 18), (ax + 18, ay_top + 18), (ax, ay_top - 8)],
        fill=TEXT_2,
    )
    # arrow caption
    cap_font = ImageFont.truetype(FONT_MONO, 22)
    cap = "push"
    bbox = d.textbbox((0, 0), cap, font=cap_font)
    d.text(
        (ax - (bbox[2] - bbox[0]) / 2, ay_top - 50),
        cap,
        font=cap_font,
        fill=TEXT_3,
    )

    # wordmark
    text_centered(d, "RN-Pushdeck", cx, H - 230, 76, TEXT)
    sub_font = ImageFont.truetype(FONT_MONO, 22)
    sub = "self-hosted OTA for react native"
    bbox = d.textbbox((0, 0), sub, font=sub_font)
    d.text(
        (cx - (bbox[2] - bbox[0]) / 2, H - 140),
        sub,
        font=sub_font,
        fill=TEXT_3,
    )

    img.save(ASSETS / "rn-pushdeck.png", "PNG", optimize=True)
    print("wrote", ASSETS / "rn-pushdeck.png")


if __name__ == "__main__":
    make_calybe()
    make_tripsynk()
    make_rn_pushdeck()
