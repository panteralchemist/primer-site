"""Redact home address and cell phone from public/cv.pdf.

Strategy: extract text positions on each page, find the bounding boxes of the
sensitive strings, then overlay opaque rectangles on a copy of the PDF.

The original CV at public/cv.pdf is preserved as cv.original.pdf; the redacted
version replaces public/cv.pdf in place.
"""
from __future__ import annotations
import sys
import io
from pathlib import Path
from pypdf import PdfReader, PdfWriter
from pypdf.generic import RectangleObject
from reportlab.pdfgen import canvas

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "public" / "cv.pdf"
BACKUP = ROOT / "public" / "cv.original.pdf"
OUT = ROOT / "public" / "cv.pdf"  # overwrite

# Strings we want to make unreadable. Each entry is matched as a contiguous
# substring of the visible text; the redaction box is sized to the text run.
REDACT = [
    "620 Cascade Drive",
    "Golden, CO 80403",
    "(215) 779-6598",
    "215-779-6598",
    "215.779.6598",
    "cell:",
]

PAPER = (1.0, 0.98, 0.96)   # match site #fafaf7 so the redaction blends visually
INK = (0.12, 0.23, 0.37)    # the navy used in the CV — we'll write "[redacted]" in subtle text


def find_redactions_for_page(page):
    """Walk the text-extraction events on a page and yield (x, y, w, h) boxes
    that cover any of the REDACT strings."""
    boxes = []

    def visitor(text, cm, tm, font_dict, font_size):
        if not text:
            return
        for needle in REDACT:
            if needle.lower() in text.lower():
                # tm is the text matrix; (tm[4], tm[5]) is the user-space origin.
                x = tm[4]
                y = tm[5]
                # Approximate width: number of characters * font size * 0.55 (Times-ish).
                # We bias high to make sure we cover the whole run; at thumbnail
                # render quality it's fine to over-cover by a few px.
                w = len(text) * font_size * 0.55
                h = font_size * 1.1
                boxes.append((x, y - h * 0.2, w, h, text, needle))
                break  # don't double-redact the same run

    page.extract_text(visitor_text=visitor)
    return boxes


def main():
    if not SRC.exists():
        sys.exit(f"missing: {SRC}")

    # Back up the original (skip if backup already exists so re-runs don't clobber)
    if not BACKUP.exists():
        BACKUP.write_bytes(SRC.read_bytes())
        print(f"backed up original -> {BACKUP.name}")

    # Re-read from the backup so re-runs are idempotent
    reader = PdfReader(str(BACKUP))
    writer = PdfWriter()

    total_redactions = 0

    for page_num, page in enumerate(reader.pages):
        boxes = find_redactions_for_page(page)
        page_size = (float(page.mediabox.width), float(page.mediabox.height))

        if boxes:
            # Build an overlay PDF the size of this page
            overlay_buf = io.BytesIO()
            c = canvas.Canvas(overlay_buf, pagesize=page_size)
            c.setFillColorRGB(*PAPER)
            c.setStrokeColorRGB(*PAPER)
            for (x, y, w, h, text, needle) in boxes:
                # ReportLab origin = bottom-left, same as PDF user space.
                c.rect(x, y, w, h, fill=1, stroke=0)
            c.save()
            overlay_buf.seek(0)
            overlay_page = PdfReader(overlay_buf).pages[0]
            page.merge_page(overlay_page)
            total_redactions += len(boxes)
            print(f"page {page_num + 1}: redacted {len(boxes)} run(s)")
            for (_, _, _, _, text, needle) in boxes:
                print(f"  · matched {needle!r} in run {text!r}")

        writer.add_page(page)

    with OUT.open("wb") as f:
        writer.write(f)

    print(f"\n{total_redactions} total redaction(s) applied.")
    print(f"public CV: {OUT}")
    print(f"original (private): {BACKUP}")


if __name__ == "__main__":
    main()
