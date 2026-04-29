// ===== NCERT SCIENCE DATA 2026-27 =====
const syllabus = {
  6: {
    label: "Class 6",
    book: "Curiosity",
    emoji: "🌱",
    desc: "New NCERT textbook aligned with NEP 2020 & NCF-SE 2023. Focuses on inquiry-based learning, exploration, and real-world connections.",
    subject: "Science",
    chapters: [
      { title: "The Wonderful World of Science", type: "general", desc: "Introduction to science as a discipline — its methods, tools, and role in understanding the world around us.", concepts: ["Scientific method", "Observation & experimentation", "Role of science in daily life", "Types of scientists"] },
      { title: "Diversity in the Living World", type: "biology", desc: "Classifying and understanding the vast variety of plants, animals, and microorganisms found on Earth.", concepts: ["Biodiversity", "Classification of organisms", "Kingdoms of life", "Local flora and fauna"] },
      { title: "Mindful Eating: A Path to a Healthy Body", type: "biology", desc: "Understanding nutrients, balanced diet, and the importance of food for growth and health.", concepts: ["Nutrients: carbohydrates, proteins, fats", "Vitamins & minerals", "Balanced diet", "Malnutrition & deficiency diseases"] },
      { title: "Exploring Magnets", type: "physics", desc: "Properties of magnets, magnetic poles, and how magnetism is used in everyday applications.", concepts: ["Magnetic poles", "Attraction & repulsion", "Compass & Earth's magnetism", "Uses of magnets"] },
      { title: "Measurement of Length and Motion", type: "physics", desc: "Standard units of measurement, tools for measuring length, and basic concepts of motion.", concepts: ["SI units", "Measuring length accurately", "Types of motion: linear, circular, oscillatory", "Speed basics"] },
      { title: "Materials Around Us", type: "chemistry", desc: "Properties of common materials, how they are classified, and their everyday uses.", concepts: ["Properties: hardness, solubility, transparency", "Natural vs synthetic materials", "Grouping materials", "Material choices in everyday life"] },
      { title: "Temperature and its Measurement", type: "physics", desc: "Understanding temperature, heat, and how we measure them using different types of thermometers.", concepts: ["Heat vs temperature", "Thermometers: clinical and laboratory", "Celsius & Fahrenheit scales", "Body temperature"] },
      { title: "A Journey through States of Water", type: "chemistry", desc: "Exploring the three states of water, the water cycle, and the unique properties of water.", concepts: ["Solid, liquid, gas states", "Melting, boiling, evaporation", "The water cycle", "Importance of water"] },
      { title: "Methods of Separation in Everyday Life", type: "chemistry", desc: "Techniques to separate mixtures — from hand-picking and sieving to evaporation and filtration.", concepts: ["Mixtures vs pure substances", "Hand-picking, sieving, filtration", "Evaporation, distillation", "Practical applications"] },
      { title: "Living Creatures: Exploring Their Characteristics", type: "biology", desc: "What makes something alive — key characteristics of living organisms and how they differ from non-living things.", concepts: ["Characteristics of living organisms", "Growth & reproduction", "Respiration & excretion", "Movement & response to stimuli"] },
      { title: "Nature's Treasures", type: "earth", desc: "Exploring natural resources — forests, soil, water, air — and the importance of their conservation.", concepts: ["Natural resources: renewable & non-renewable", "Forest ecosystems", "Soil composition", "Conservation of resources"] },
      { title: "Beyond Earth", type: "earth", desc: "An introduction to space science — our solar system, planets, stars, and space exploration.", concepts: ["The Solar System", "Planets and their features", "Stars and constellations", "Space exploration & satellites"] },
    ]
  },
  7: {
    label: "Class 7",
    book: "Curiosity",
    emoji: "🔭",
    desc: "New NCERT Class 7 Science textbook (Curiosity) aligned with NEP 2020. Focuses on deeper scientific inquiry and real-world problem solving.",
    subject: "Science",
    chapters: [
      { title: "The Ever-Evolving World of Science", type: "general", desc: "How science has evolved over time and continues to shape technology, medicine, and our understanding of the universe.", concepts: ["History of science", "Scientific discoveries & inventions", "Science & technology today", "Future of science"] },
      { title: "Exploring Substances: Acidic, Basic, and Neutral", type: "chemistry", desc: "Understanding acids, bases, and salts — their properties, indicators, and everyday examples.", concepts: ["Acids and bases", "Indicators: litmus, turmeric", "pH scale basics", "Neutralisation & salts"] },
      { title: "Electricity: Circuits and their Components", type: "physics", desc: "Electric circuits, components, conductors, insulators, and the basics of how electricity flows.", concepts: ["Electric circuit", "Conductors & insulators", "Series & parallel circuits", "Switches & bulbs"] },
      { title: "The World of Metals and Non-metals", type: "chemistry", desc: "Properties that distinguish metals from non-metals and their uses in industry and everyday life.", concepts: ["Physical properties of metals", "Chemical properties", "Reactivity series basics", "Uses of metals & non-metals"] },
      { title: "Changes Around Us: Physical and Chemical", type: "chemistry", desc: "Distinguishing between physical and chemical changes and understanding reversible vs irreversible changes.", concepts: ["Physical vs chemical changes", "Reversible and irreversible changes", "Signs of chemical change", "Examples in daily life"] },
      { title: "Adolescence: A Stage of Growth and Change", type: "biology", desc: "Understanding puberty, physical and emotional changes, reproductive health, and balanced nutrition for adolescents.", concepts: ["Adolescence & puberty", "Physical changes in boys & girls", "Hormones & endocrine glands", "Reproductive health & hygiene"] },
      { title: "Heat Transfer in Nature", type: "physics", desc: "How heat is transferred through conduction, convection, and radiation — with real-world applications.", concepts: ["Conduction, convection, radiation", "Good & poor conductors", "Land & sea breeze", "Greenhouse effect basics"] },
      { title: "Measurement of Time and Motion", type: "physics", desc: "Measuring time, understanding speed, and exploring different types of motion with graphs.", concepts: ["Units of time", "Uniform vs non-uniform motion", "Speed = Distance/Time", "Distance-time graphs"] },
      { title: "Life Processes in Animals", type: "biology", desc: "Key life processes in animals — nutrition, respiration, transportation of blood, and excretion.", concepts: ["Nutrition in animals", "Respiration: aerobic & anaerobic", "Blood circulation", "Excretion in animals"] },
      { title: "Life Processes in Plants", type: "biology", desc: "How plants make food, breathe, transport water, and reproduce — with focus on photosynthesis.", concepts: ["Photosynthesis", "Respiration in plants", "Transpiration", "Transport of water & minerals"] },
      { title: "Light: Shadows and Reflections", type: "physics", desc: "Properties of light, how shadows are formed, reflection from mirrors, and image formation.", concepts: ["Rectilinear propagation of light", "Transparent, translucent, opaque", "Reflection laws", "Plane mirror images"] },
      { title: "Earth, Moon, and the Sun", type: "earth", desc: "Understanding the Earth–Moon–Sun system: rotations, revolutions, tides, eclipses, and seasons.", concepts: ["Earth's rotation & revolution", "Moon's phases & orbit", "Solar & lunar eclipses", "Tides & seasons"] },
    ]
  },
  8: {
    label: "Class 8",
    book: "Curiosity",
    emoji: "⚗️",
    desc: "New NCERT Class 8 Science textbook (Curiosity) with 13 chapters. Builds advanced concepts with activity-based and inquiry-led learning.",
    subject: "Science",
    chapters: [
      { title: "Exploring the Investigative World of Science", type: "general", desc: "Advanced scientific methods, experimental design, hypothesis testing, and the role of evidence in science.", concepts: ["Hypothesis & experiment", "Variables: dependent & independent", "Scientific models", "Science & society"] },
      { title: "The Invisible Living World: Beyond Our Naked Eye", type: "biology", desc: "Microorganisms — bacteria, viruses, fungi, protozoa — their types, uses, and how they cause diseases.", concepts: ["Types of microorganisms", "Useful microbes: fermentation, antibiotics", "Harmful microbes & diseases", "Koch's postulates"] },
      { title: "Health: The Ultimate Treasure", type: "biology", desc: "Understanding health, diseases, immunity, vaccination, and healthy lifestyle choices.", concepts: ["Definition of health", "Communicable & non-communicable diseases", "Immune system & vaccines", "Healthy habits"] },
      { title: "Electricity: Magnetic and Heating Effects", type: "physics", desc: "Magnetic effect of electric current — electromagnets, motors — and heating effect in everyday applications.", concepts: ["Magnetic effect of current", "Electromagnets", "Electric motor principle", "Heating effect: fuses, appliances"] },
      { title: "Exploring Forces", type: "physics", desc: "Contact and non-contact forces — friction, gravity, magnetic force — and their effects on motion.", concepts: ["Contact vs non-contact forces", "Friction: static, kinetic", "Gravity & gravitational force", "Pressure basics"] },
      { title: "Pressure, Wind, Storm and Cyclones", type: "earth", desc: "How atmospheric pressure, wind, and storms form — and understanding cyclones and their impact.", concepts: ["Atmospheric pressure", "Wind formation", "Cyclone formation & safety", "Monsoon winds"] },
      { title: "Particulate Nature of Matter", type: "chemistry", desc: "Understanding that matter is made of tiny particles — atoms and molecules — and how this explains properties.", concepts: ["Kinetic particle theory", "States of matter explained", "Diffusion & Brownian motion", "Interparticle forces"] },
      { title: "Pure Substances and Mixtures", type: "chemistry", desc: "Distinguishing pure substances from mixtures, types of mixtures, and methods to separate them.", concepts: ["Elements & compounds", "Homogeneous & heterogeneous mixtures", "Solutions & colloids", "Separation methods"] },
      { title: "Solutions", type: "chemistry", desc: "Properties of solutions — solubility, concentration, saturated and unsaturated solutions, and factors affecting solubility.", concepts: ["Solute, solvent, solution", "Solubility & saturation", "Factors affecting solubility", "Concentration calculations"] },
      { title: "Light and Spherical Mirrors", type: "physics", desc: "Reflection of light from curved mirrors — concave and convex — and real-world applications.", concepts: ["Concave & convex mirrors", "Principal focus, focal length", "Image formation: ray diagrams", "Uses: headlights, periscopes"] },
      { title: "Refraction and Lenses", type: "physics", desc: "Bending of light through lenses — convex and concave — and their applications in glasses and cameras.", concepts: ["Refraction of light", "Convex & concave lenses", "Image formation by lenses", "Power of a lens"] },
      { title: "Natural Resources and Sustainability", type: "earth", desc: "Managing natural resources sustainably — forests, water, soil, and fossil fuels.", concepts: ["Renewable & non-renewable resources", "Deforestation & its effects", "Water conservation", "Sustainable development"] },
      { title: "Our Environment and Conservation", type: "earth", desc: "Ecosystems, food chains, pollution, and the importance of protecting our environment.", concepts: ["Ecosystem components", "Food chains & food webs", "Types of pollution", "Conservation strategies"] },
    ]
  },
  9: {
    label: "Class 9",
    book: "Integrated Science",
    emoji: "⚛️",
    desc: "New integrated NCERT Science textbook for Class 9. Covers Physics, Chemistry, Biology & Earth Science in a unified, interconnected approach.",
    subject: "Science",
    chapters: [
      { title: "Cell — The Unit of Life", type: "biology", desc: "Structure of the cell, types of cells, and the role of organelles in maintaining life processes.", concepts: ["Prokaryotic & eukaryotic cells", "Cell organelles & functions", "Cell membrane & nucleus", "Cell theory"] },
      { title: "Tissues", type: "biology", desc: "Organisation of cells into tissues — plant and animal tissues and their specialized functions.", concepts: ["Plant tissues: meristematic, permanent", "Animal tissues: epithelial, connective, muscular, nervous", "Tissue functions", "Comparison of plant & animal tissues"] },
      { title: "Reproduction", type: "biology", desc: "Modes of reproduction in organisms — asexual and sexual — and the importance of reproduction for species survival.", concepts: ["Asexual reproduction: binary fission, budding, fragmentation", "Sexual reproduction", "Reproductive organs", "Fertilisation & development"] },
      { title: "Diversity in Living Organisms", type: "biology", desc: "Classification of living organisms into five kingdoms and the basis of biological classification.", concepts: ["Five kingdom classification", "Monera, Protista, Fungi, Plantae, Animalia", "Binomial nomenclature", "Vertebrates & invertebrates"] },
      { title: "Exploring Mixtures and Their Separation", type: "chemistry", desc: "Advanced techniques to separate different types of mixtures — including chromatography and distillation.", concepts: ["Colloidal solutions", "Chromatography", "Fractional distillation", "Centrifugation"] },
      { title: "Structure of an Atom", type: "chemistry", desc: "Historical models of the atom, subatomic particles, electronic configuration, and atomic structure.", concepts: ["Subatomic particles: proton, neutron, electron", "Thomson, Rutherford & Bohr models", "Atomic number & mass number", "Electronic configuration"] },
      { title: "Atoms and Molecules", type: "chemistry", desc: "Atoms, molecules, chemical formulae, mole concept, and atomic masses.", concepts: ["Laws of chemical combination", "Atomic masses & molecular mass", "Mole concept & Avogadro's number", "Chemical formulae"] },
      { title: "Earth as a System: Energy, Matter and Life", type: "earth", desc: "Earth's spheres — lithosphere, hydrosphere, atmosphere, biosphere — and how they interact.", concepts: ["Earth's layers", "Geochemical cycles: carbon, nitrogen, water", "Energy flow in ecosystems", "Human impact on Earth systems"] },
      { title: "Motion", type: "physics", desc: "Describing motion using distance, displacement, speed, velocity, and acceleration with graphical analysis.", concepts: ["Distance vs displacement", "Speed vs velocity", "Acceleration", "Equations of motion", "Graphical representation"] },
      { title: "Force and Laws of Motion", type: "physics", desc: "Newton's three laws of motion, inertia, momentum, and their applications in daily life.", concepts: ["Newton's 1st, 2nd & 3rd laws", "Inertia & mass", "Linear momentum", "Action-reaction pairs"] },
      { title: "Work, Energy and Simple Machines", type: "physics", desc: "Scientific definition of work, forms of energy, law of conservation of energy, and simple machines.", concepts: ["Work = Force × Distance", "Kinetic & potential energy", "Conservation of energy", "Lever, pulley, inclined plane"] },
      { title: "Sound", type: "physics", desc: "Production and propagation of sound, characteristics of sound waves, and the human ear.", concepts: ["Longitudinal waves", "Amplitude, frequency, wavelength", "Speed of sound", "Reflection & echo", "Human ear"] },
    ]
  },
  10: {
    label: "Class 10",
    book: "Science (Board Exam Year)",
    emoji: "🏆",
    desc: "NCERT Class 10 Science — the most important year. Integrated Physics, Chemistry, Biology chapters for the Board examination 2026-27.",
    subject: "Science",
    chapters: [
      { title: "Chemical Reactions and Equations", type: "chemistry", desc: "Representing chemical reactions using equations, balancing equations, and types of chemical reactions.", concepts: ["Chemical equations & balancing", "Types: combination, decomposition, displacement", "Oxidation & reduction", "Corrosion & rancidity"] },
      { title: "Acids, Bases and Salts", type: "chemistry", desc: "Properties of acids and bases, the pH scale, and how salts are formed and used.", concepts: ["Properties of acids & bases", "pH scale (0-14)", "Neutralisation reactions", "Important salts: NaCl, NaOH, baking soda"] },
      { title: "Metals and Non-metals", type: "chemistry", desc: "Physical and chemical properties of metals and non-metals, reactivity series, and extraction of metals.", concepts: ["Physical properties comparison", "Reactivity series", "Ionic bond formation", "Corrosion prevention"] },
      { title: "Carbon and its Compounds", type: "chemistry", desc: "Unique properties of carbon, covalent bonding, hydrocarbons, and important carbon compounds.", concepts: ["Covalent bonding in carbon", "Hydrocarbons: alkanes, alkenes, alkynes", "Functional groups", "Ethanol, ethanoic acid, soaps & detergents"] },
      { title: "Life Processes", type: "biology", desc: "Essential life processes: nutrition, respiration, transportation of substances, and excretion in living organisms.", concepts: ["Autotrophic & heterotrophic nutrition", "Aerobic & anaerobic respiration", "Human circulatory system", "Excretion in humans & plants"] },
      { title: "Control and Coordination", type: "biology", desc: "Nervous system, reflex actions, hormonal control, and coordination in plants and animals.", concepts: ["Human nervous system", "Reflex arc & action", "Hormones in animals", "Tropic movements in plants"] },
      { title: "How do Organisms Reproduce?", type: "biology", desc: "Modes of reproduction in plants and animals, sexual reproduction, and reproductive health.", concepts: ["Asexual: fission, budding, vegetative propagation", "Sexual reproduction in flowering plants", "Human reproductive system", "Reproductive health & STDs"] },
      { title: "Heredity", type: "biology", desc: "Mendel's laws of inheritance, chromosomes, genes, and variations in traits.", concepts: ["Mendel's experiments with pea plants", "Laws of inheritance", "Chromosomes & genes", "Sex determination in humans"] },
      { title: "Light — Reflection and Refraction", type: "physics", desc: "Laws of reflection and refraction, mirrors and lenses — with mirror and lens formulae.", concepts: ["Laws of reflection", "Spherical mirrors: concave & convex", "Refraction & Snell's law", "Lenses & lens formula", "Magnification"] },
      { title: "The Human Eye and the Colourful World", type: "physics", desc: "Structure of the human eye, common eye defects, dispersion of light, and atmospheric phenomena.", concepts: ["Human eye structure & working", "Myopia, hypermetropia, presbyopia", "Dispersion & prism", "Tyndall effect, scattering of light"] },
      { title: "Electricity", type: "physics", desc: "Electric charge, potential difference, Ohm's law, resistance, and electrical power in circuits.", concepts: ["Electric current & potential difference", "Ohm's law V=IR", "Series & parallel resistance", "Power P=VI & electrical energy"] },
      { title: "Magnetic Effects of Electric Current", type: "physics", desc: "Magnetic field due to current, Fleming's rules, electromagnetic induction, and electric generator.", concepts: ["Magnetic field & field lines", "Electromagnet & solenoid", "Fleming's left & right hand rules", "AC generator & DC motor"] },
      { title: "Our Environment", type: "earth", desc: "Ecosystem, food chains, ozone layer depletion, waste management, and human impact on the environment.", concepts: ["Ecosystem & food chains", "Biodegradable & non-biodegradable", "Ozone layer & CFCs", "Waste management & 3Rs"] },
    ]
  }
};

// ===== CURRENT STATE =====
let currentClass = 6;
let selectedChapter = null;

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  createParticles();
  renderChapters(6);
  setupNavScroll();
  setupHamburger();
});

// ===== PARTICLES =====
function createParticles() {
  const container = document.getElementById('particles-bg');
  const colors = ['#4f8ef7', '#7c5cfc', '#00d4aa', '#f0c040', '#f06292'];
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 4 + 2;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random()*100}%;
      background:${colors[Math.floor(Math.random()*colors.length)]};
      animation-duration:${Math.random()*15+10}s;
      animation-delay:${Math.random()*10}s;
      box-shadow:0 0 ${size*3}px currentColor;
    `;
    container.appendChild(p);
  }
}

// ===== NAV SCROLL =====
function setupNavScroll() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 20 ? '0 4px 30px rgba(0,0,0,0.5)' : 'none';
  });
  // Active link
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 80) current = s.id; });
    links.forEach(l => { l.classList.toggle('active', l.getAttribute('href') === '#' + current); });
  });
}

// ===== HAMBURGER =====
function setupHamburger() {
  const btn = document.getElementById('hamburger');
  const links = document.getElementById('nav-links');
  btn.addEventListener('click', () => links.classList.toggle('open'));
}

// ===== SHOW CHAPTERS (from class card click) =====
function showChapters(cls) {
  currentClass = cls;
  const chaptersSection = document.getElementById('chapters');
  chaptersSection.scrollIntoView({ behavior: 'smooth' });
  const tab = document.getElementById('tab-' + cls);
  document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
  if (tab) tab.classList.add('active');
  renderChapters(cls);
}

// ===== FILTER CHAPTERS =====
function filterChapters(cls, btn) {
  currentClass = cls;
  document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  renderChapters(cls);
}

// ===== RENDER CHAPTERS =====
function renderChapters(cls) {
  const data = syllabus[cls];
  if (!data) return;

  // Update banner
  document.getElementById('banner-emoji').textContent = data.emoji;
  document.getElementById('banner-class-name').textContent = `${data.label} – ${data.book}`;
  document.getElementById('banner-class-desc').textContent = data.desc;
  document.getElementById('banner-chapter-count').textContent = data.chapters.length;
  document.getElementById('banner-subject').textContent = data.subject;

  // Render chapter cards
  const grid = document.getElementById('chapters-grid');
  grid.innerHTML = '';
  data.chapters.forEach((ch, i) => {
    const card = document.createElement('div');
    card.className = `chapter-card ${ch.type}`;
    card.onclick = () => openModal(cls, i);
    card.innerHTML = `
      <div class="ch-top">
        <span class="ch-num">Ch. ${i + 1}</span>
        <span class="ch-subject-badge ${ch.type}">${subjectLabel(ch.type)}</span>
      </div>
      <div class="ch-title">${ch.title}</div>
      <div class="ch-desc">${ch.desc.substring(0, 80)}…</div>
      <div class="ch-arrow">›</div>
    `;
    grid.appendChild(card);
  });
}

function subjectLabel(type) {
  const map = { physics: '⚡ Physics', chemistry: '🧪 Chemistry', biology: '🌿 Biology', earth: '🌍 Earth Sci', general: '🔬 General' };
  return map[type] || type;
}

// ===== MODAL =====
function openModal(cls, idx) {
  window.location.href = `chapter.html?class=${cls}&ch=${idx+1}`;
  return;
  // Legacy modal code below (unused):

  const data = syllabus[cls];
  const ch = data.chapters[idx];

  document.getElementById('modal-chapter-num').textContent = `${data.label} · Chapter ${idx + 1}`;
  document.getElementById('modal-title').textContent = ch.title;
  document.getElementById('modal-overview').textContent = ch.desc;

  const tags = document.getElementById('modal-tags');
  tags.innerHTML = `
    <span class="ch-subject-badge ${ch.type}" style="font-size:0.75rem;padding:4px 12px;">${subjectLabel(ch.type)}</span>
    <span class="ch-subject-badge general" style="font-size:0.75rem;padding:4px 12px;">NCERT 2026-27</span>
  `;

  const concepts = document.getElementById('modal-concepts');
  concepts.innerHTML = ch.concepts.map(c => `<li>${c}</li>`).join('');

  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ===== SCROLL TO CHAPTERS =====
function scrollToChapters() {
  document.getElementById('chapters').scrollIntoView({ behavior: 'smooth' });
}
