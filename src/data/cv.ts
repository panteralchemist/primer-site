// Single source of truth for site content. Pulled from David_Primer_CV_2025.pdf.
// Updating the CV: edit this file, then `npm run build` to regenerate.

export const profile = {
  name: 'David N. Primer, Ph.D.',
  shortName: 'David Primer',
  title: 'Director, CMC Process Chemistry',
  org: 'Eli Lilly',
  location: 'Boulder, Colorado',
  tagline:
    'Senior process chemistry leader translating discovery-stage oncology programs into scalable, GMP-ready manufacturing routes.',
  cvUrl: '/cv.pdf',
} as const;

export const links = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dnprimer',
    handle: 'dnprimer',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/panteralchemist',
    handle: 'panteralchemist',
  },
  {
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=HN9GVOoAAAAJ',
    handle: 'D. N. Primer',
  },
] as const;

export const about = [
  'I lead CMC process chemistry teams that develop, optimize, and scale the synthetic routes behind oncology drug candidates — moving programs from gram-scale discovery deliveries through hundred-kilogram GMP manufacture.',
  'My work sits at the intersection of synthetic invention, crystallization and form control, vendor and tech-transfer management, and the practical realities of clinical-supply timelines. Earlier in my career I co-developed the photoredox / nickel dual-catalysis cross-coupling strategy that opened up Csp2–Csp3 bond formation as a routine pharmaceutical disconnection.',
];

export const experience = [
  {
    org: 'Eli Lilly',
    logo: '/logos/lilly.svg',
    role: 'Director, CMC Process Chemistry',
    period: '2022 – present',
    location: 'Boulder, CO',
    bullets: [
      'Lead and develop the CMC process chemistry team — coordinating project assignments, technical training, and career development.',
      'CMC project lead for LSN4170130, coordinating across three external vendors, discovery partners, and the broader CMC development team.',
      'Developed the 4-step GMP route for <a href="https://trials.lilly.com/en-US/trial/528616" target="_blank" rel="noopener" class="link-underline">LY4050784</a>, internally delivering 500 g for GLP tox on an accelerated timeline; the process has since scaled to >100 kg at multiple GMP vendors.',
      'Developed the 5-step GMP route for <a href="https://www.lillyoncologypipeline.com/molecule/fgfr3-inhibitor/clinical-trial/NCT07218380" target="_blank" rel="noopener" class="link-underline">LY3866288</a> and led tech transfer activities that cut timelines by 70% and costs by 50% — keeping Phase 1 plans on pace for accelerated approval; scaled to >400 kg externally.',
    ],
  },
  {
    org: 'Bristol Myers Squibb',
    logo: '/logos/bms.svg',
    role: 'Senior Scientist / Principal Scientist, Chemical Process Development',
    period: '2020 – 2022',
    location: 'New Brunswick, NJ',
    bullets: [
      'Optimized the final three steps of the CC-94676 (<a href="https://www.bmsclinicaltrials.com/us/en/recharge-hcp/how-bms-986365-works" target="_blank" rel="noopener" class="link-underline">BMS-986365</a>) synthesis — delivering >12 kg of Phase 1 material as racemate and as both single diastereomers in high chemical and enantiomeric purity.',
      'Managed and trained two scientists on process development and route scouting toward a key intermediate in the bifunctional degrader portfolio.',
      'Identified multiple crystalline forms of a high-MW (>900) greasy API, enabling the program to transition from amorphous precipitation to a controlled crystallization.',
      'Provided technical leadership for tech transfers to partner sites in Colorado, Wisconsin, India, and China.',
      'Co-designed <a href="https://www.acdlabs.com/products/spectrus-platform/katalyst-d2d/" target="_blank" rel="noopener" class="link-underline">browser-based high-throughput-experimentation software</a> with ACD Labs and internal IT, improving data capture across the solubility, catalysis, and class-variable screening groups.',
    ],
  },
  {
    org: 'Celgene Corporation',
    logo: '/logos/celgene.svg',
    role: 'Scientist I / II, Drug Substance Development',
    period: '2017 – 2020',
    location: 'Summit, NJ',
    bullets: [
      'Developed a crystallization-induced resolution of a racemic amine — providing the first commercial-scale access to the single-enantiomer of a glutarimide-containing scaffold.',
      'Scaled three processes from 500 g to >20 kg, supporting on-site manufacturing in Switzerland, the United Kingdom, and the United States for the synthesis of <a href="https://www.bmsclinicaltrials.com/us/en/clinical-trials/NCT04975997" target="_blank" rel="noopener" class="link-underline">Iberdomide</a>.',
      'Filed a patent application and published a peer-reviewed paper on the novel processes developed for <a href="https://www.bmsclinicaltrials.com/us/en/clinical-trials/NCT03220347" target="_blank" rel="noopener" class="link-underline">CC-90010</a>.',
    ],
  },
] as const;

export const education = [
  {
    school: 'University of Pennsylvania',
    degree: 'Ph.D., Organic Chemistry',
    period: '2012 – 2017',
    detail: 'GPA 3.97 / 4.00 · Advisor: Prof. Gary A. Molander · Thesis: Single-Electron Transmetalation: Radical-Mediated Alkyl Transfer in Cross-Coupling.',
  },
  {
    school: 'Emory University',
    degree: 'B.S., Chemistry',
    period: '2008 – 2012',
    detail: 'GPA 3.37 / 4.00 · Undergraduate research with Prof. Huw M. L. Davies on chiral silver and gold carbenoid reactivity.',
  },
] as const;

export const publications = [
  {
    slug: 'wang-2024-nature',
    title: 'Identifying General Reaction Conditions by Bandit Optimization',
    authors: 'J. Y. Wang, J. M. Stevens, S. K. Kariofillis, M. Tom, D. L. Golden, J. Li, J. E. Tabora, M. Parasram, B. J. Shields, D. N. Primer, B. Hao, D. Del Valle, S. DiSomma, A. Furman, G. G. Zipp, S. Melnikov, J. Paulson, A. G. Doyle',
    journal: 'Nature',
    year: 2024,
    where: '626, 1025–1033',
    doi: '10.1038/s41586-024-07021-y',
  },
  {
    slug: 'zacuto-2024-oprd',
    title: 'Process Development and Kilogram-Scale Manufacture of Key Intermediates toward Single-Enantiomer CELMoDs: Synthesis of Iberdomide·BSA, Part 1',
    authors: 'M. J. Zacuto, J. F. Traverse, K. F. Bostwick, M. E. Geherty, D. N. Primer, W. Zhang, C. Zhang, R. D. Janes, C. Marton',
    journal: 'Organic Process Research & Development',
    year: 2024,
    where: '28, 46–56',
    doi: '10.1021/acs.oprd.3c00315',
  },
  {
    slug: 'oprd-2022-isoquinolinone',
    pdfThumb: true,
    title: 'Development of a Process to a 4-Arylated 2-Methylisoquinolin-1(2H)-one for the Treatment of Solid Tumors: Lessons in Ortho-Bromination, Selective Solubility, Pd Deactivation, and Form Control',
    authors: 'D. N. Primer, K. Yong, A. Ramirez, M. Kreilein, A. C. Ferretti, A. M. Ruda, N. Fleary-Roberts, J. D. Moseley, S. M. Forsyth, G. R. Evans, J. F. Traverse',
    journal: 'Organic Process Research & Development',
    year: 2022,
    where: '26, 1458–1469',
    doi: '10.1021/acs.oprd.2c00057',
  },
  {
    slug: 'primer-2017-jacs',
    title: 'Enabling the Cross-Coupling of Tertiary Organoboron Nucleophiles through Radical-Mediated Alkyl Transfer',
    authors: 'D. N. Primer, G. A. Molander',
    journal: 'Journal of the American Chemical Society',
    year: 2017,
    where: '139, 9847–9850',
    doi: '10.1021/jacs.7b06288',
  },
  {
    slug: 'kelly-2017-natprotoc',
    title: 'Preparation of Visible-Light-Activated Metal Complexes and Their Use in Photoredox/Nickel Dual Catalysis',
    authors: 'C. B. Kelly, N. R. Patel, D. N. Primer, M. Jouffroy, J. C. Tellis, G. A. Molander',
    journal: 'Nature Protocols',
    year: 2017,
    where: '12, 472–492',
    doi: '10.1038/nprot.2016.176',
  },
  {
    slug: 'matsui-2017-chemsci',
    title: 'Metal-Free C–H Alkylation of Heteroarenes with Alkyltrifluoroborates',
    authors: 'J. K. Matsui, D. N. Primer, G. A. Molander',
    journal: 'Chemical Science',
    year: 2017,
    where: '8, 3512–3522',
    doi: '10.1039/C7SC00283A',
  },
  {
    slug: 'zheng-2017-acscatal',
    title: 'Nickel/Photoredox-Catalyzed Amidation via Alkylsilicates and Isocyanates',
    authors: 'S. Zheng, D. N. Primer, G. A. Molander',
    journal: 'ACS Catalysis',
    year: 2017,
    where: '7, 7957–7961',
    doi: '10.1021/acscatal.7b02795',
  },
  {
    slug: 'tellis-2016-acr',
    title: 'Single-Electron Transmetalation via Photoredox/Nickel Dual Catalysis',
    authors: 'J. C. Tellis, C. B. Kelly, D. N. Primer, M. Jouffroy, N. R. Patel, G. A. Molander',
    journal: 'Accounts of Chemical Research',
    year: 2016,
    where: '49, 1429–1439',
    doi: '10.1021/acs.accounts.6b00214',
  },
  {
    slug: 'jouffroy-2016-jacs',
    title: 'Base-Free Photoredox/Nickel Dual-Catalytic Cross-Coupling of Ammonium Alkylsilicates',
    authors: 'M. Jouffroy, D. N. Primer, G. A. Molander',
    journal: 'Journal of the American Chemical Society',
    year: 2016,
    where: '138, 475–478',
    doi: '10.1021/jacs.5b10963',
  },
  {
    slug: 'ryu-2016-chemeurj',
    title: 'Single-Electron Transmetalation: Synthesis of 1,1-Diaryl-2,2,2-trifluoroethanes by Photoredox/Nickel Dual Catalysis',
    authors: 'D. W. Ryu, D. N. Primer, J. C. Tellis, G. A. Molander',
    journal: 'Chemistry – A European Journal',
    year: 2016,
    where: '22, 120–123',
    doi: '10.1002/chem.201504079',
  },
  {
    slug: 'gutierrez-2015-jacs',
    title: 'Nickel-Catalyzed Cross-Coupling of Photoredox-Generated Radicals: Uncovering a General Manifold for Stereoconvergence',
    authors: 'O. Gutierrez, J. C. Tellis, D. N. Primer, G. A. Molander, M. C. Kozlowski',
    journal: 'Journal of the American Chemical Society',
    year: 2015,
    where: '137, 4896–4899',
    doi: '10.1021/ja513079r',
  },
  {
    slug: 'primer-2015-jacs',
    title: 'Single-Electron Transmetalation: An Enabling Technology for Secondary Alkylboron Cross-Coupling',
    authors: 'D. N. Primer, I. Karakaya, J. C. Tellis, G. A. Molander',
    journal: 'Journal of the American Chemical Society',
    year: 2015,
    where: '137, 2195–2198',
    doi: '10.1021/ja512946e',
  },
  {
    slug: 'karakaya-2015-orglett',
    title: 'Photoredox Cross-Coupling: Ir/Ni Dual Catalysis for the Synthesis of Benzylic Ethers',
    authors: 'I. Karakaya, D. N. Primer, G. A. Molander',
    journal: 'Organic Letters',
    year: 2015,
    where: '17, 3294–3297',
    doi: '10.1021/acs.orglett.5b01463',
  },
  {
    slug: 'tellis-2014-science',
    title: 'Single-Electron Transmetalation in Organoboron Cross-Coupling by Photoredox/Nickel Dual Catalysis',
    authors: 'J. C. Tellis, D. N. Primer, G. A. Molander',
    journal: 'Science',
    year: 2014,
    where: '345, 433–436',
    doi: '10.1126/science.1253647',
    note: 'Co-first author',
  },
] as const;

export const patents = [
  {
    slug: 'patent-2025-cc94676',
    title: 'Processes for the Preparation of Substituted 3-((3-Aminophenyl)amino)piperidine-2,6-dione Compounds',
    authors: 'G. Beutner, R. Carrasquillo, W. P. Gallagher, M. Geherty, J. Han, K. Jones, et al.',
    office: 'US Patent Application',
    number: '19/201,806',
    year: 2025,
    url: 'https://patents.google.com/?inventor=David+Primer&assignee=Bristol-Myers+Squibb',
  },
  {
    slug: 'patent-2023-bromodomain',
    title: 'Process for the Preparation of a Bromodomain Inhibitor',
    authors: 'J. F. Traverse, K. H. Y. Yong, A. C. Ferretti, H. Alite, J. Moseley, A. M. Ruda, et al.',
    office: 'US Patent',
    number: '11,566,004',
    year: 2023,
    url: 'https://patents.google.com/patent/US11566004B2/',
  },
] as const;

export const recognition = [
  {
    what: 'ACS Organic Division Early Career Investigator Award — winner',
    when: 'Aug 2026',
    href: 'https://www.organicdivision.org/earlycareerinvestigator/ecihistory/',
  },
  {
    what: 'Heterocycles Gordon Conference — Invited 45-min talk on CC-90010 synthesis and scale-up',
    when: 'Jun 2022',
    href: 'https://www.grc.org/heterocyclic-compounds-conference/2022/',
  },
  {
    what: 'UPenn Dissertation Completion Fellowship — 9-month award for outstanding research',
    when: '2016 – 2017',
    href: 'https://www.chem.upenn.edu/graduate/awards-fellowship-opportunities',
  },
  {
    what: 'IPMI Sabin Metal Corp. Student Award — $5,000 for outstanding precious-metals research',
    when: 'Jun 2016',
    href: 'https://www.ipmi.org/student-award-winners',
  },
  {
    what: 'Genentech Graduate Student Symposium — $1,000 honorarium for oral presentation',
    when: 'May 2016',
    href: 'https://www.gene.com/careers/university-and-early-career/graduate-student-symposium-chemical-research',
  },
  {
    what: 'NIH grant GM-113878 — co-author; funded the lab for four years',
    when: '2015',
    href: 'https://grantome.com/grant/NIH/R01-GM113878-01',
  },
] as const;

export const stats = [
  { value: '15', label: 'Peer-reviewed publications' },
  { value: '3', label: 'Patents' },
  { value: '>400 kg', label: 'Largest GMP scale led' },
  { value: '8', label: 'Direct reports mentored' },
] as const;
