const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const frontiers = [
  {
    slug: "light-intelligence",
    title: "Light Intelligence",
    short: "We learn which properties of light reveal the most about the system under study.",
    description: "We use inverse design to choose how light interacts with a sample. Its measured response helps us test a physical model and decide what to probe next.",
    image: `${basePath}/images/frontiers/adaptive-chirp.svg`,
    imageAlt: "Feedback arrows link a brain sketch to a chirped pulse whose oscillations tighten from red to blue.",
    capabilities: ["Physics-guided learning", "Inverse design", "Programmable optics"],
  },
  {
    slug: "health",
    title: "Biosensing, Precision Health and Biopharmaceutical Discovery",
    short:
      "Optical sensing and imaging to characterize biological samples and support therapeutic discovery.",
    description:
      "Intelligent imaging, molecular sensing, and multimodal inference for personalized medicine, biological characterization, and therapeutic development.",
    image: `${basePath}/images/frontiers/optical-trap.webp`,
    imageAlt: "A microscope objective focuses a trapping beam onto a suspended vesicle.",
    capabilities: [
      "Intelligent imaging",
      "Molecular sensing",
      "Multimodal inference",
      "Therapeutic discovery",
    ],
  },
  {
    slug: "materials",
    title: "Light for Quantum Science, Energy & Climate",
    short:
      "We generate quantum light and use ultrafast spectroscopy to study molecules and materials for energy conversion and sustainable chemistry.",
    description:
      "We study how to generate and convert quantum light, and use ultrafast measurements to follow molecular and material dynamics relevant to energy conversion and catalysis.",
    image: `${basePath}/images/frontiers/uv-molecule.webp`,
    imageAlt: "A violet beam illuminates an aromatic ring in a ball-and-stick molecular model.",
    capabilities: [
      "Quantum light and wavelength conversion",
      "Ultrafast pump–probe measurement",
      "Physics-guided inference",
      "Catalysis and energy conversion",
      "Sustainable chemistry",
    ],
  },
  {
    slug: "autonomous",
    title: "Autonomous Science and Advanced Instruments",
    short:
      "Digital twins and adaptive control for complex scientific instruments.",
    description:
      "Physics-grounded digital twins, adaptive experiments, and intelligent control for lasers, accelerators, advanced light sources, and scientific instrumentation.",
    image: `${basePath}/images/frontiers/agent-optics.svg`,
    imageAlt: "An AI agent controls a robotic arm and a Fourier-plane SLM in a 4f pulse shaper with two reflection gratings.",
    capabilities: [
      "Physics-grounded digital twins",
      "Adaptive experiments",
      "Intelligent instrument control",
      "Lasers, accelerators, and light sources",
    ],
  },
] as const;

export const publications = [
  {
    year: "2026",
    title: "Deep learning-assisted modeling for χ(2) nonlinear optics",
    venue: "Advanced Photonics 8, 036004",
  },
  {
    year: "2026",
    title:
      "Hybrid deep reconstruction for vignetting-free upconversion imaging through scattering in ENZ materials",
    venue: "Light: Science & Applications 15, 327",
  },
  {
    year: "2026",
    title:
      "Structured light at the extreme: harnessing spatiotemporal control for high-field laser–matter interactions",
    venue: "Advanced Photonics, in press",
  },
  {
    year: "2026",
    title:
      "Universal quantum interconnects via phase-coherent four-wave mixing",
    venue: "Advanced Photonics Nexus, in press",
  },
  {
    year: "2026",
    title:
      "Charged-particle control via spatio-temporally tailored pulses from gas-based nonlinear optics",
    venue: "Optical Materials Express 16, 611–627",
  },
  {
    year: "2025",
    title:
      "Multi-modality deep learning for pulse prediction in homogeneous nonlinear systems via parametric conversion",
    venue: "APL Photonics 10",
  },
  {
    year: "2025",
    title:
      "Accurate label-free classification of cancerous extracellular vesicles using nanoaperture optical tweezers and deep learning",
    venue: "npj Biosensing 2, 33",
  },
  {
    year: "2024",
    title:
      "Optimizing spectral phase transfer in four-wave mixing with gas-filled capillaries",
    venue: "Optics Express 32, 44397–44412",
  },
  {
    year: "2024",
    title: "The LCLS-II photoinjector laser infrastructure",
    venue: "High Power Laser Science and Engineering · Cover Feature & Editor’s Pick",
  },
  {
    year: "2022",
    title:
      "Coupling perovskite quantum dot pairs in solution using a nanoplasmonic assembly",
    venue: "Nano Letters",
  },
] as const;

export const funding = [
  {
    agency: "U.S. Department of Energy",
    program: "Free Electron Laser R&D",
    reference: "DE-AC02-76SF00515",
  },
  {
    agency: "U.S. Department of Energy",
    program: "Basic Energy Sciences · Detector and Accelerator Programs",
    reference: "DE-SC0022559",
  },
  {
    agency: "Office of Naval Research",
    program: "Photonics research program",
    reference: "N00014-24-1-2038",
  },
  {
    agency: "National Science Foundation",
    program: "Mathematical Foundations of AI-assisted Digital Twins",
    reference: "2436343",
  },
  {
    agency: "National Science Foundation",
    program: "Nanoscale photonics technologies for an ultra-compact X-ray source",
    reference: "2431903",
  },
] as const;
