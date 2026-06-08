"""Generate stylized SVG cover thumbnails for publications and patents
that don't have a real PDF locally. Aesthetic matches the site:
- paper background (#fafaf7), navy ink (#1e3a5f)
- serif title block, sans-serif metadata
- thin rule line top + bottom evoking a journal first page
- subtle journal-specific accent color band

Output: src/assets/pubs/<slug>.svg

Run: py scripts/build-pub-thumbs.py
"""
from __future__ import annotations
from pathlib import Path
from html import escape as h
from textwrap import wrap

# 425 wide x 550 tall ≈ first-page aspect; 4:5 looks portrait-ish.
W, H = 850, 1100  # 2x for crisp render at half-size

# Each pub's accent strip color hints at the journal family.
JOURNAL_ACCENT = {
    "Science": "#9c1f1c",
    "Nature": "#000000",
    "Nature Protocols": "#000000",
    "Journal of the American Chemical Society": "#1f2a44",
    "JACS": "#1f2a44",
    "Organic Process Research & Development": "#005f96",
    "Organic Process Research and Development": "#005f96",
    "Organic Letters": "#005f96",
    "ACS Catalysis": "#005f96",
    "Chemical Science": "#0f6c4a",
    "Accounts of Chemical Research": "#1f2a44",
    "Chemistry – A European Journal": "#0a4d7e",
    "Chemistry - A European Journal": "#0a4d7e",
    "US Patent": "#5a4a2a",
    "USPTO": "#5a4a2a",
}


def wrap_words(text: str, width: int) -> list[str]:
    """Wrap by character count, preserving whole words."""
    return wrap(text, width=width, break_long_words=False)


def make_svg(
    *,
    journal: str,
    title: str,
    authors: str,
    year: int | str,
    where: str = "",
    is_patent: bool = False,
) -> str:
    accent = JOURNAL_ACCENT.get(journal, "#1e3a5f")

    # Title wrapping — adjust char count for visual balance
    title_lines = wrap_words(title, 38)[:5]  # cap lines
    if len(title_lines) == 5 and len(wrap_words(title, 38)) > 5:
        title_lines[-1] = title_lines[-1].rstrip(".") + "…"

    # Authors: keep concise
    author_line = authors if len(authors) <= 70 else authors[:67].rstrip(", ") + "…"

    # Layout
    margin = 80
    title_y_start = 380
    line_height = 70

    title_tspans = "".join(
        f'<tspan x="{margin}" dy="{0 if i == 0 else line_height}">{h(line)}</tspan>'
        for i, line in enumerate(title_lines)
    )

    label = "Patent" if is_patent else "Article"
    journal_label = h(journal.upper())
    where_text = f"{year}  ·  {h(where)}" if where else str(year)

    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" role="img" aria-label="{h(title)}">
  <!-- background -->
  <rect width="{W}" height="{H}" fill="#fafaf7"/>

  <!-- top accent band -->
  <rect x="0" y="0" width="{W}" height="14" fill="{accent}"/>

  <!-- nameplate -->
  <g font-family="Inter, system-ui, sans-serif" font-size="22" letter-spacing="3" fill="{accent}" font-weight="600">
    <text x="{margin}" y="80">{journal_label}</text>
  </g>
  <line x1="{margin}" y1="100" x2="{W - margin}" y2="100" stroke="{accent}" stroke-width="1.5"/>

  <!-- label / year row -->
  <g font-family="Inter, system-ui, sans-serif" font-size="20" letter-spacing="2" fill="#4a6585">
    <text x="{margin}" y="160">{label.upper()}</text>
    <text x="{W - margin}" y="160" text-anchor="end">{h(str(year))}</text>
  </g>

  <!-- title -->
  <g font-family="'Source Serif 4', 'Source Serif Pro', Georgia, serif" font-size="56" font-weight="600" fill="#13243d">
    <text x="{margin}" y="{title_y_start}" style="line-height:1.05">{title_tspans}</text>
  </g>

  <!-- authors -->
  <g font-family="'Source Serif 4', Georgia, serif" font-size="28" font-style="italic" fill="#2a4060">
    <text x="{margin}" y="{title_y_start + (len(title_lines) * line_height) + 50}">{h(author_line)}</text>
  </g>

  <!-- bottom block: journal + year -->
  <line x1="{margin}" y1="{H - 140}" x2="{W - margin}" y2="{H - 140}" stroke="#c8d2df" stroke-width="1"/>
  <g font-family="Inter, system-ui, sans-serif" font-size="22" fill="#2a4060">
    <text x="{margin}" y="{H - 90}" font-weight="500">{h(where_text)}</text>
  </g>

  <!-- subtle DP monogram bottom-right -->
  <g font-family="'Source Serif 4', Georgia, serif" font-size="28" fill="#9eaec1" font-weight="600">
    <text x="{W - margin}" y="{H - 90}" text-anchor="end">DP</text>
  </g>
</svg>"""


# Define all the items needing thumbnails. Slug = filename stem.
ITEMS = [
    # Selected / banner papers
    {
        "slug": "tellis-2014-science",
        "journal": "Science",
        "title": "Single-Electron Transmetalation in Organoboron Cross-Coupling by Photoredox/Nickel Dual Catalysis",
        "authors": "J. C. Tellis, D. N. Primer, G. A. Molander",
        "year": 2014,
        "where": "345, 433–436",
    },
    {
        "slug": "wang-2024-nature",
        "journal": "Nature",
        "title": "Identifying General Reaction Conditions by Bandit Optimization",
        "authors": "J. Y. Wang, J. M. Stevens, S. K. Kariofillis, … D. N. Primer, … A. G. Doyle",
        "year": 2024,
        "where": "626, 1025–1033",
    },
    {
        "slug": "tellis-2016-acr",
        "journal": "Accounts of Chemical Research",
        "title": "Single-Electron Transmetalation via Photoredox/Nickel Dual Catalysis",
        "authors": "J. C. Tellis, C. B. Kelly, D. N. Primer, M. Jouffroy, N. R. Patel, G. A. Molander",
        "year": 2016,
        "where": "49, 1429–1439",
    },
    {
        "slug": "gutierrez-2015-jacs",
        "journal": "Journal of the American Chemical Society",
        "title": "Nickel-Catalyzed Cross-Coupling of Photoredox-Generated Radicals: Uncovering a General Manifold for Stereoconvergence",
        "authors": "O. Gutierrez, J. C. Tellis, D. N. Primer, G. A. Molander, M. C. Kozlowski",
        "year": 2015,
        "where": "137, 4896–4899",
    },
    {
        "slug": "primer-2015-jacs",
        "journal": "Journal of the American Chemical Society",
        "title": "Single-Electron Transmetalation: An Enabling Technology for Secondary Alkylboron Cross-Coupling",
        "authors": "D. N. Primer, I. Karakaya, J. C. Tellis, G. A. Molander",
        "year": 2015,
        "where": "137, 2195–2198",
    },
    {
        "slug": "jouffroy-2016-jacs",
        "journal": "Journal of the American Chemical Society",
        "title": "Base-Free Photoredox/Nickel Dual-Catalytic Cross-Coupling of Ammonium Alkylsilicates",
        "authors": "M. Jouffroy, D. N. Primer, G. A. Molander",
        "year": 2016,
        "where": "138, 475–478",
    },
    {
        "slug": "matsui-2017-chemsci",
        "journal": "Chemical Science",
        "title": "Metal-Free C–H Alkylation of Heteroarenes with Alkyltrifluoroborates",
        "authors": "J. K. Matsui, D. N. Primer, G. A. Molander",
        "year": 2017,
        "where": "8, 3512–3522",
    },
    {
        "slug": "primer-2017-jacs",
        "journal": "Journal of the American Chemical Society",
        "title": "Enabling the Cross-Coupling of Tertiary Organoboron Nucleophiles through Radical-Mediated Alkyl Transfer",
        "authors": "D. N. Primer, G. A. Molander",
        "year": 2017,
        "where": "139, 9847–9850",
    },
    {
        "slug": "karakaya-2015-orglett",
        "journal": "Organic Letters",
        "title": "Photoredox Cross-Coupling: Ir/Ni Dual Catalysis for the Synthesis of Benzylic Ethers",
        "authors": "I. Karakaya, D. N. Primer, G. A. Molander",
        "year": 2015,
        "where": "17, 3294–3297",
    },
    {
        "slug": "kelly-2017-natprotoc",
        "journal": "Nature Protocols",
        "title": "Preparation of Visible-Light-Activated Metal Complexes and Their Use in Photoredox/Nickel Dual Catalysis",
        "authors": "C. B. Kelly, N. R. Patel, D. N. Primer, M. Jouffroy, J. C. Tellis, G. A. Molander",
        "year": 2017,
        "where": "12, 472–492",
    },
    {
        "slug": "ryu-2016-chemeurj",
        "journal": "Chemistry – A European Journal",
        "title": "Single-Electron Transmetalation: Synthesis of 1,1-Diaryl-2,2,2-trifluoroethanes by Photoredox/Nickel Dual Catalysis",
        "authors": "D. W. Ryu, D. N. Primer, J. C. Tellis, G. A. Molander",
        "year": 2016,
        "where": "22, 120–123",
    },
    {
        "slug": "zheng-2017-acscatal",
        "journal": "ACS Catalysis",
        "title": "Nickel/Photoredox-Catalyzed Amidation via Alkylsilicates and Isocyanates",
        "authors": "S. Zheng, D. N. Primer, G. A. Molander",
        "year": 2017,
        "where": "7, 7957–7961",
    },
    {
        "slug": "zacuto-2024-oprd",
        "journal": "Organic Process Research & Development",
        "title": "Process Development and Kilogram-Scale Manufacture of Key Intermediates toward Single-Enantiomer CELMoDs: Synthesis of Iberdomide·BSA, Part 1",
        "authors": "M. J. Zacuto, J. F. Traverse, K. F. Bostwick, M. E. Geherty, D. N. Primer, et al.",
        "year": 2024,
        "where": "28, 46–56",
    },
    # Patents
    {
        "slug": "patent-2025-cc94676",
        "journal": "US Patent",
        "title": "Processes for the Preparation of Substituted 3-((3-Aminophenyl)amino)piperidine-2,6-dione Compounds",
        "authors": "G. Beutner, R. Carrasquillo, W. P. Gallagher, M. Geherty, J. Han, K. Jones, et al.",
        "year": 2025,
        "where": "App. 19/201,806",
        "is_patent": True,
    },
    {
        "slug": "patent-2023-bromodomain",
        "journal": "US Patent",
        "title": "Process for the Preparation of a Bromodomain Inhibitor",
        "authors": "J. F. Traverse, K. H. Y. Yong, A. C. Ferretti, H. Alite, J. Moseley, A. M. Ruda, et al.",
        "year": 2023,
        "where": "US Patent 11,566,004",
        "is_patent": True,
    },
]


def main():
    out_dir = Path(__file__).resolve().parent.parent / "src" / "assets" / "pubs"
    out_dir.mkdir(parents=True, exist_ok=True)

    for item in ITEMS:
        path = out_dir / f"{item['slug']}.svg"
        svg = make_svg(
            journal=item["journal"],
            title=item["title"],
            authors=item["authors"],
            year=item["year"],
            where=item.get("where", ""),
            is_patent=item.get("is_patent", False),
        )
        path.write_text(svg, encoding="utf-8")
        print(f"wrote {path.name}")

    print(f"\n{len(ITEMS)} thumbnails generated.")


if __name__ == "__main__":
    main()
