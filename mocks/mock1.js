

const questions = {
  physics: [
    {
      id: 1,
      question: "A body is thrown vertically upward with velocity u. The ratio of the time of upward journey to the time of downward journey is:",
      options: ["1:2", "2:1", "1:1", "1:3"],
      answer: 2
    },
    {
      id: 2,
      question: "The dimensional formula of angular momentum is:",
      options: ["[MLT⁻¹]", "[ML²T⁻¹]", "[ML²T⁻²]", "[ML³T⁻²]"],
      answer: 1
    },
    {
      id: 3,
      question: "A particle moves in a circle of radius r. In half revolution, the displacement is:",
      options: ["πr", "2r", "r", "2πr"],
      answer: 1
    },
    {
      id: 4,
      question: "Which of the following is a scalar quantity?",
      options: ["Force", "Velocity", "Work", "Acceleration"],
      answer: 2
    },
    {
      id: 5,
      question: "The escape velocity from the surface of Earth is approximately:",
      options: ["7.9 km/s", "11.2 km/s", "9.8 km/s", "3 km/s"],
      answer: 1
    },
    {
      id: 6,
      question: "Which law states that the rate of change of momentum is proportional to the applied force?",
      options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Conservation of Momentum"],
      answer: 1
    },
    {
      id: 7,
      question: "The unit of electric field intensity is:",
      options: ["Newton/Coulomb", "Joule/Coulomb", "Coulomb/Newton", "Volt·meter"],
      answer: 0
    },
    {
      id: 8,
      question: "When a body moves in a circular path at constant speed, the work done is:",
      options: ["Maximum", "Minimum", "Zero", "Negative"],
      answer: 2
    },
    {
      id: 9,
      question: "The frequency of a wave is 500 Hz and its wavelength is 0.6 m. The velocity of the wave is:",
      options: ["200 m/s", "300 m/s", "400 m/s", "500 m/s"],
      answer: 1
    },
    {
      id: 10,
      question: "Which of the following has maximum penetrating power?",
      options: ["Alpha rays", "Beta rays", "Gamma rays", "X-rays"],
      answer: 2
    },
    {
      id: 11,
      question: "The work done in moving a charge of 2C across two points having a potential difference of 12V is:",
      options: ["6 J", "24 J", "14 J", "10 J"],
      answer: 1
    },
    {
      id: 12,
      question: "A convex lens has power +5 D. Its focal length is:",
      options: ["5 m", "0.2 m", "20 m", "50 m"],
      answer: 1
    },
    {
      id: 13,
      question: "The phenomenon of total internal reflection is used in:",
      options: ["Microscope", "Optical fibre", "Telescope", "Camera"],
      answer: 1
    },
    {
      id: 14,
      question: "The SI unit of magnetic flux is:",
      options: ["Tesla", "Weber", "Gauss", "Ampere"],
      answer: 1
    },
    {
      id: 15,
      question: "In photoelectric effect, the stopping potential depends on:",
      options: ["Intensity of light", "Frequency of light", "Both intensity and frequency", "Neither"],
      answer: 1
    },
    {
      id: 16,
      question: "The de Broglie wavelength of a particle is inversely proportional to its:",
      options: ["Mass", "Velocity", "Momentum", "Energy"],
      answer: 2
    },
    {
      id: 17,
      question: "In a transformer, if the primary has 200 turns and secondary has 1000 turns, and primary voltage is 220V, the secondary voltage is:",
      options: ["44 V", "1100 V", "440 V", "2200 V"],
      answer: 1
    },
    {
      id: 18,
      question: "The angle of incidence equals the angle of reflection. This is:",
      options: ["Snell's Law", "Law of refraction", "Law of reflection", "Huygen's principle"],
      answer: 2
    },
    {
      id: 19,
      question: "Which gate is called the universal gate?",
      options: ["AND", "OR", "NOT", "NAND"],
      answer: 3
    },
    {
      id: 20,
      question: "The speed of light in vacuum is approximately:",
      options: ["3 × 10⁶ m/s", "3 × 10⁸ m/s", "3 × 10¹⁰ m/s", "3 × 10⁴ m/s"],
      answer: 1
    },
    {
      id: 21,
      question: "Bernoulli's theorem is based on conservation of:",
      options: ["Mass", "Energy", "Momentum", "Angular momentum"],
      answer: 1
    },
    {
      id: 22,
      question: "The half-life of a radioactive substance is 20 min. After 60 min, the fraction remaining is:",
      options: ["1/4", "1/8", "1/2", "1/16"],
      answer: 1
    },
    {
      id: 23,
      question: "Which instrument is used to measure very small distances using interference?",
      options: ["Vernier caliper", "Screw gauge", "Interferometer", "Spectrometer"],
      answer: 2
    },
    {
      id: 24,
      question: "The process by which a heavier nucleus splits into lighter nuclei is called:",
      options: ["Fusion", "Fission", "Radioactivity", "Decay"],
      answer: 1
    },
    {
      id: 25,
      question: "Ohm's law is not obeyed by:",
      options: ["Copper wire", "Nichrome wire", "Semiconductor diode", "Carbon resistor"],
      answer: 2
    },
    {
      id: 26,
      question: "The image formed by a plane mirror is:",
      options: ["Real and inverted", "Virtual and erect", "Real and erect", "Virtual and inverted"],
      answer: 1
    },
    {
      id: 27,
      question: "Which colour of light travels fastest in glass?",
      options: ["Violet", "Blue", "Green", "Red"],
      answer: 3
    },
    {
      id: 28,
      question: "In an LCR circuit at resonance, the impedance is:",
      options: ["Maximum", "Zero", "Equal to R", "Equal to L"],
      answer: 2
    },
    {
      id: 29,
      question: "The binding energy per nucleon is maximum for:",
      options: ["Hydrogen", "Iron (Fe-56)", "Uranium", "Carbon"],
      answer: 1
    },
    {
      id: 30,
      question: "Gauss's law relates electric flux to:",
      options: ["Electric potential", "Enclosed charge", "Electric field", "Surface area"],
      answer: 1
    },
    {
      id: 31,
      question: "When two bodies collide elastically, which quantity is conserved?",
      options: ["Kinetic energy only", "Momentum only", "Both KE and momentum", "Neither"],
      answer: 2
    },
    {
      id: 32,
      question: "The phenomenon of emission of electrons from a metal surface when light falls on it is called:",
      options: ["Thermionic emission", "Photoelectric effect", "Field emission", "Secondary emission"],
      answer: 1
    },
    {
      id: 33,
      question: "Which type of semiconductor is formed by adding pentavalent impurity to pure silicon?",
      options: ["Intrinsic", "p-type", "n-type", "Compound"],
      answer: 2
    },
    {
      id: 34,
      question: "The unit of capacitance is:",
      options: ["Joule", "Coulomb", "Farad", "Volt"],
      answer: 2
    },
    {
      id: 35,
      question: "Ultrasonic waves have frequency:",
      options: ["Below 20 Hz", "Between 20 Hz and 20 kHz", "Above 20 kHz", "Above 200 kHz"],
      answer: 2
    },
    {
      id: 36,
      question: "The gravitational potential energy at infinite distance from Earth is:",
      options: ["Positive", "Zero", "Negative", "Undefined"],
      answer: 1
    },
    {
      id: 37,
      question: "What is the refractive index of glass if the critical angle is 42°? (sin 42° ≈ 0.669)",
      options: ["0.669", "1.495", "1.234", "0.743"],
      answer: 1
    },
    {
      id: 38,
      question: "The frequency of revolution of an electron in Bohr's first orbit of hydrogen atom is approximately:",
      options: ["6.57 × 10¹⁵ Hz", "6.57 × 10¹³ Hz", "3.14 × 10¹⁵ Hz", "9.1 × 10¹⁵ Hz"],
      answer: 0
    },
    {
      id: 39,
      question: "In simple harmonic motion, the restoring force is proportional to:",
      options: ["Velocity", "Acceleration", "Displacement", "Time"],
      answer: 2
    },
    {
      id: 40,
      question: "Which of the following is used as a moderator in nuclear reactors?",
      options: ["Uranium", "Heavy water", "Cadmium", "Plutonium"],
      answer: 1
    },
    {
      id: 41,
      question: "The critical temperature of a superconductor is:",
      options: ["Temperature above which it becomes superconductor", "Temperature below which resistance becomes zero", "Room temperature", "0 K always"],
      answer: 1
    },
    {
      id: 42,
      question: "The ratio of electric force to gravitational force between two protons is of the order:",
      options: ["10⁻³⁶", "10³⁶", "10²⁴", "10⁻²⁴"],
      answer: 1
    },
    {
      id: 43,
      question: "Fleming's right-hand rule is used for:",
      options: ["Electric motor", "Electric generator", "Transformer", "Capacitor"],
      answer: 1
    },
    {
      id: 44,
      question: "Which of these waves does not require a medium to propagate?",
      options: ["Sound waves", "Water waves", "Electromagnetic waves", "Seismic waves"],
      answer: 2
    },
    {
      id: 45,
      question: "The energy stored in a capacitor of capacitance C charged to voltage V is:",
      options: ["CV", "CV²", "½CV²", "2CV²"],
      answer: 2
    },
    {
      id: 46,
      question: "For a convex mirror, the image is always:",
      options: ["Real and magnified", "Virtual and magnified", "Real and diminished", "Virtual and diminished"],
      answer: 3
    },
    {
      id: 47,
      question: "The Doppler effect is observed in:",
      options: ["Only sound waves", "Only light waves", "Both sound and light waves", "Neither"],
      answer: 2
    },
    {
      id: 48,
      question: "A proton and an electron have the same kinetic energy. The de Broglie wavelength is greater for:",
      options: ["Proton", "Electron", "Both are equal", "Depends on velocity"],
      answer: 1
    },
    {
      id: 49,
      question: "The dimension of Planck's constant is:",
      options: ["[ML²T⁻²]", "[ML²T⁻¹]", "[MLT⁻¹]", "[ML²T]"],
      answer: 1
    },
    {
      id: 50,
      question: "Which mirror is used in headlights of vehicles?",
      options: ["Plane mirror", "Convex mirror", "Concave mirror", "Cylindrical mirror"],
      answer: 2
    }
  ],
  chemistry: [
    {
      id: 51,
      question: "Which of the following elements has the highest electronegativity?",
      options: ["Oxygen", "Chlorine", "Fluorine", "Nitrogen"],
      answer: 2
    },
    {
      id: 52,
      question: "The hybridization of carbon in ethyne (acetylene) is:",
      options: ["sp³", "sp²", "sp", "sp³d"],
      answer: 2
    },
    {
      id: 53,
      question: "Which gas is evolved when sodium reacts with water?",
      options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"],
      answer: 2
    },
    {
      id: 54,
      question: "The IUPAC name of CH₃-CHO is:",
      options: ["Methanol", "Ethanal", "Propanal", "Ethanol"],
      answer: 1
    },
    {
      id: 55,
      question: "The number of moles in 44 g of CO₂ (molecular mass = 44) is:",
      options: ["0.5", "1", "2", "4"],
      answer: 1
    },
    {
      id: 56,
      question: "Which of the following is an example of a lyophilic colloid?",
      options: ["Gold sol", "Starch solution", "Sulphur sol", "Arsenic sulphide sol"],
      answer: 1
    },
    {
      id: 57,
      question: "Which of the following reactions involves reduction?",
      options: ["2Mg + O₂ → 2MgO", "CuO + H₂ → Cu + H₂O", "C + O₂ → CO₂", "S + O₂ → SO₂"],
      answer: 1
    },
    {
      id: 58,
      question: "The functional group present in carboxylic acids is:",
      options: ["-OH", "-CHO", "-COOH", "-CO-"],
      answer: 2
    },
    {
      id: 59,
      question: "According to VSEPR theory, the shape of water molecule is:",
      options: ["Linear", "Tetrahedral", "Bent/V-shaped", "Trigonal planar"],
      answer: 2
    },
    {
      id: 60,
      question: "The pH of a neutral solution at 25°C is:",
      options: ["0", "7", "14", "1"],
      answer: 1
    },
    {
      id: 61,
      question: "Which of the following is a noble gas?",
      options: ["Nitrogen", "Oxygen", "Argon", "Hydrogen"],
      answer: 2
    },
    {
      id: 62,
      question: "The process of conversion of glucose into ethanol is called:",
      options: ["Fermentation", "Distillation", "Oxidation", "Hydrolysis"],
      answer: 0
    },
    {
      id: 63,
      question: "Which metal is liquid at room temperature?",
      options: ["Lead", "Mercury", "Sodium", "Gallium"],
      answer: 1
    },
    {
      id: 64,
      question: "The type of bonding present in NaCl is:",
      options: ["Covalent", "Ionic", "Metallic", "Hydrogen"],
      answer: 1
    },
    {
      id: 65,
      question: "Which of the following is an alkane?",
      options: ["CH₂=CH₂", "CH≡CH", "CH₃-CH₃", "C₆H₆"],
      answer: 2
    },
    {
      id: 66,
      question: "Radiocarbon dating uses which isotope?",
      options: ["C-12", "C-13", "C-14", "C-11"],
      answer: 2
    },
    {
      id: 67,
      question: "The quantum number that determines the shape of an orbital is:",
      options: ["Principal (n)", "Azimuthal (l)", "Magnetic (m)", "Spin (s)"],
      answer: 1
    },
    {
      id: 68,
      question: "Which of the following has the highest boiling point?",
      options: ["HF", "HCl", "HBr", "HI"],
      answer: 0
    },
    {
      id: 69,
      question: "The standard electrode potential of hydrogen electrode is:",
      options: ["+1.0 V", "0.0 V", "-1.0 V", "+0.5 V"],
      answer: 1
    },
    {
      id: 70,
      question: "Baeyer's reagent is:",
      options: ["Acidified KMnO₄", "Alkaline KMnO₄", "H₂SO₄", "HNO₃"],
      answer: 1
    },
    {
      id: 71,
      question: "The most abundant element in the Earth's crust is:",
      options: ["Silicon", "Oxygen", "Aluminium", "Iron"],
      answer: 1
    },
    {
      id: 72,
      question: "Which of the following is an amphoteric oxide?",
      options: ["Na₂O", "MgO", "Al₂O₃", "SO₂"],
      answer: 2
    },
    {
      id: 73,
      question: "The number of sigma bonds in benzene (C₆H₆) is:",
      options: ["6", "9", "12", "3"],
      answer: 2
    },
    {
      id: 74,
      question: "Which catalyst is used in Haber's process for synthesis of ammonia?",
      options: ["Platinum", "Iron with Mo promoter", "Vanadium pentoxide", "Nickel"],
      answer: 1
    },
    {
      id: 75,
      question: "The Werner's theory of coordination compounds deals with:",
      options: ["Covalent compounds", "Ionic compounds", "Complex compounds", "Metallic compounds"],
      answer: 2
    },
    {
      id: 76,
      question: "Nylon-6,6 is formed by condensation polymerisation of:",
      options: ["Hexamethylenediamine and adipic acid", "Caprolactam", "Ethylene glycol and terephthalic acid", "Vinyl chloride"],
      answer: 0
    },
    {
      id: 77,
      question: "Which of the following is a reducing sugar?",
      options: ["Sucrose", "Glucose", "Starch", "Cellulose"],
      answer: 1
    },
    {
      id: 78,
      question: "The hybridization of sulphur in SF₆ is:",
      options: ["sp³", "sp³d", "sp³d²", "sp²"],
      answer: 2
    },
    {
      id: 79,
      question: "In electrolysis, cations move towards:",
      options: ["Anode", "Cathode", "Both electrodes", "Neither electrode"],
      answer: 1
    },
    {
      id: 80,
      question: "Tollens' reagent is used to test for:",
      options: ["Ketones", "Aldehydes", "Alcohols", "Esters"],
      answer: 1
    },
    {
      id: 81,
      question: "Which of the following is NOT a greenhouse gas?",
      options: ["CO₂", "CH₄", "N₂O", "O₂"],
      answer: 3
    },
    {
      id: 82,
      question: "The process of converting vegetable oil into ghee is called:",
      options: ["Saponification", "Hydrogenation", "Esterification", "Hydrolysis"],
      answer: 1
    },
    {
      id: 83,
      question: "Which of the following elements belongs to the d-block?",
      options: ["Na", "Mg", "Fe", "Cl"],
      answer: 2
    },
    {
      id: 84,
      question: "Le Chatelier's principle deals with:",
      options: ["Rate of reaction", "Equilibrium shift on disturbance", "Activation energy", "Enthalpy"],
      answer: 1
    },
    {
      id: 85,
      question: "The formula of chloroform is:",
      options: ["CHCl₃", "CCl₄", "CH₂Cl₂", "C₂H₅Cl"],
      answer: 0
    },
    {
      id: 86,
      question: "Van't Hoff factor for K₂SO₄ completely dissociated in water is:",
      options: ["1", "2", "3", "4"],
      answer: 2
    },
    {
      id: 87,
      question: "Which enzyme is responsible for the hydrolysis of starch into maltose?",
      options: ["Invertase", "Amylase", "Lipase", "Protease"],
      answer: 1
    },
    {
      id: 88,
      question: "Diazotisation reaction is a property of:",
      options: ["Primary aliphatic amines", "Secondary amines", "Primary aromatic amines", "Tertiary amines"],
      answer: 2
    },
    {
      id: 89,
      question: "The IUPAC name of (CH₃)₃COH is:",
      options: ["1-propanol", "2-methyl-2-propanol", "tert-butanol", "Both B and C"],
      answer: 3
    },
    {
      id: 90,
      question: "Which of the following is a cationic detergent?",
      options: ["Sodium lauryl sulphate", "Cetyltrimethylammonium bromide", "Sodium stearate", "Triton X-100"],
      answer: 1
    },
    {
      id: 91,
      question: "The ore of aluminium is:",
      options: ["Haematite", "Bauxite", "Chalcopyrite", "Galena"],
      answer: 1
    },
    {
      id: 92,
      question: "Raoult's law is applicable to:",
      options: ["Concentrated solutions", "Dilute ideal solutions", "Non-ideal solutions", "Supersaturated solutions"],
      answer: 1
    },
    {
      id: 93,
      question: "The geometry of [Ni(CO)₄] complex is:",
      options: ["Square planar", "Octahedral", "Tetrahedral", "Linear"],
      answer: 2
    },
    {
      id: 94,
      question: "The Maillard reaction involves:",
      options: ["Reducing sugars and proteins", "Fats and proteins", "Carbohydrates and lipids", "Oxidation of glucose"],
      answer: 0
    },
    {
      id: 95,
      question: "Which of the following is the best conductor of electricity?",
      options: ["Copper", "Gold", "Silver", "Aluminium"],
      answer: 2
    },
    {
      id: 96,
      question: "The Heisenberg uncertainty principle states that we cannot simultaneously and precisely determine:",
      options: ["Position and mass", "Position and momentum", "Velocity and charge", "Mass and charge"],
      answer: 1
    },
    {
      id: 97,
      question: "Biodegradable polymer among the following is:",
      options: ["Polyethylene", "PVC", "PHBV", "Teflon"],
      answer: 2
    },
    {
      id: 98,
      question: "The half-reaction at the anode is called:",
      options: ["Reduction", "Oxidation", "Neutralisation", "Precipitation"],
      answer: 1
    },
    {
      id: 99,
      question: "Which of these statements about enzymes is correct?",
      options: ["They are consumed in reactions", "They are biological catalysts", "They only work at high temperatures", "They are inorganic compounds"],
      answer: 1
    },
    {
      id: 100,
      question: "The products of saponification of a fat are:",
      options: ["Fatty acids and glycerol", "Soap and glycerol", "Fatty acids and alcohol", "Ester and water"],
      answer: 1
    }
  ],
  math: [
    {
      id: 101,
      question: "The value of sin²30° + cos²30° is:",
      options: ["0", "1/2", "1", "√3/2"],
      answer: 2
    },
    {
      id: 102,
      question: "If A = {1, 2, 3} and B = {2, 3, 4}, then A ∩ B is:",
      options: ["{1}", "{2, 3}", "{1, 2, 3, 4}", "{4}"],
      answer: 1
    },
    {
      id: 103,
      question: "The derivative of sin(x) is:",
      options: ["-cos(x)", "cos(x)", "tan(x)", "-sin(x)"],
      answer: 1
    },
    {
      id: 104,
      question: "The sum of interior angles of a hexagon is:",
      options: ["540°", "720°", "900°", "360°"],
      answer: 1
    },
    {
      id: 105,
      question: "The value of ∫₀^π sin(x) dx is:",
      options: ["0", "1", "2", "π"],
      answer: 2
    },
    {
      id: 106,
      question: "If the roots of x² - 5x + 6 = 0 are α and β, then α + β equals:",
      options: ["6", "5", "-5", "-6"],
      answer: 1
    },
    {
      id: 107,
      question: "The equation of a circle with centre (0,0) and radius 5 is:",
      options: ["x² + y² = 5", "x² + y² = 10", "x² + y² = 25", "x + y = 5"],
      answer: 2
    },
    {
      id: 108,
      question: "If f(x) = x³ - 3x, then f'(x) = 0 gives:",
      options: ["x = 0, 1", "x = ±1", "x = ±3", "x = 0"],
      answer: 1
    },
    {
      id: 109,
      question: "The number of ways to arrange 5 different books on a shelf is:",
      options: ["25", "60", "120", "720"],
      answer: 2
    },
    {
      id: 110,
      question: "The 10th term of the AP: 2, 5, 8, ... is:",
      options: ["27", "29", "30", "32"],
      answer: 1
    },
    {
      id: 111,
      question: "The amplitude of the complex number z = 1 + i is:",
      options: ["π/6", "π/4", "π/3", "π/2"],
      answer: 1
    },
    {
      id: 112,
      question: "lim(x→0) (sin x)/x equals:",
      options: ["0", "∞", "1", "-1"],
      answer: 2
    },
    {
      id: 113,
      question: "The eccentricity of a circle is:",
      options: ["1", "0", "Greater than 1", "Between 0 and 1"],
      answer: 1
    },
    {
      id: 114,
      question: "The determinant of matrix [[2,3],[1,4]] is:",
      options: ["11", "5", "8", "2"],
      answer: 1
    },
    {
      id: 115,
      question: "The general solution of dy/dx = y is:",
      options: ["y = x + C", "y = Ce^x", "y = Cx", "y = e^x + C"],
      answer: 1
    },
    {
      id: 116,
      question: "The coefficient of x³ in the expansion of (1+x)⁵ is:",
      options: ["5", "10", "20", "15"],
      answer: 1
    },
    {
      id: 117,
      question: "If tan A = 3/4, then sin A (A is acute) equals:",
      options: ["4/5", "3/5", "3/4", "4/3"],
      answer: 1
    },
    {
      id: 118,
      question: "The slope of the line 2x + 3y = 6 is:",
      options: ["2/3", "-2/3", "3/2", "-3/2"],
      answer: 1
    },
    {
      id: 119,
      question: "The value of C(8,3) is:",
      options: ["56", "72", "28", "120"],
      answer: 0
    },
    {
      id: 120,
      question: "The sum of first n natural numbers is:",
      options: ["n(n+1)", "n(n+1)/2", "n(n-1)/2", "n²"],
      answer: 1
    },
    {
      id: 121,
      question: "The area of a triangle with vertices (0,0), (4,0), and (0,3) is:",
      options: ["12", "6", "7", "10"],
      answer: 1
    },
    {
      id: 122,
      question: "If z = 3 + 4i, then |z| equals:",
      options: ["7", "5", "25", "1"],
      answer: 1
    },
    {
      id: 123,
      question: "The integral of 1/x dx is:",
      options: ["x + C", "ln|x| + C", "1/x² + C", "e^x + C"],
      answer: 1
    },
    {
      id: 124,
      question: "Which of the following is NOT a real root of x² + 4 = 0?",
      options: ["2i", "-2i", "2", "Both A and B are not real"],
      answer: 3
    },
    {
      id: 125,
      question: "The angle between two lines with slopes m₁ = 1 and m₂ = -1 is:",
      options: ["30°", "45°", "60°", "90°"],
      answer: 3
    },
    {
      id: 126,
      question: "If A and B are mutually exclusive events, then P(A∪B) equals:",
      options: ["P(A)·P(B)", "P(A)+P(B)-P(A∩B)", "P(A)+P(B)", "P(A)-P(B)"],
      answer: 2
    },
    {
      id: 127,
      question: "The inverse of the matrix [[1,0],[0,1]] is:",
      options: ["[[0,1],[1,0]]", "[[1,0],[0,1]]", "[[0,0],[0,0]]", "[[-1,0],[0,-1]]"],
      answer: 1
    },
    {
      id: 128,
      question: "lim(x→0) (e^x - 1)/x equals:",
      options: ["0", "e", "1", "∞"],
      answer: 2
    },
    {
      id: 129,
      question: "The focus of the parabola y² = 4x is:",
      options: ["(0, 1)", "(1, 0)", "(4, 0)", "(0, 4)"],
      answer: 1
    },
    {
      id: 130,
      question: "The maximum value of sin(x) + cos(x) is:",
      options: ["1", "√2", "2", "√3"],
      answer: 1
    },
    {
      id: 131,
      question: "The number of terms in the expansion of (a + b)^10 is:",
      options: ["10", "11", "12", "9"],
      answer: 1
    },
    {
      id: 132,
      question: "If P(A) = 0.6 and P(B) = 0.4 and A, B are independent, then P(A∩B) is:",
      options: ["0.24", "1.0", "0.2", "0.76"],
      answer: 0
    },
    {
      id: 133,
      question: "The value of cos 135° is:",
      options: ["1/√2", "-1/√2", "√3/2", "-√3/2"],
      answer: 1
    },
    {
      id: 134,
      question: "The general term of the GP: 2, 6, 18, ... is:",
      options: ["2·3^(n-1)", "3·2^n", "2n+1", "3^n"],
      answer: 0
    },
    {
      id: 135,
      question: "The length of the latus rectum of the ellipse x²/16 + y²/9 = 1 is:",
      options: ["9/2", "9/4", "18/4", "4"],
      answer: 0
    },
    {
      id: 136,
      question: "∫ e^x dx equals:",
      options: ["e^x + C", "xe^x + C", "e^(x+1) + C", "e^x/x + C"],
      answer: 0
    },
    {
      id: 137,
      question: "If tan(x) = 1, then x (principal value) is:",
      options: ["π/6", "π/4", "π/3", "π/2"],
      answer: 1
    },
    {
      id: 138,
      question: "The vector dot product of i·j is:",
      options: ["1", "0", "k", "-k"],
      answer: 1
    },
    {
      id: 139,
      question: "The sum of GP with first term a=2, ratio r=3, n=4 terms is:",
      options: ["80", "78", "82", "84"],
      answer: 0
    },
    {
      id: 140,
      question: "The derivative of ln(x) is:",
      options: ["x", "1/x", "e^x", "ln(x)/x"],
      answer: 1
    },
    {
      id: 141,
      question: "How many ways can 3 boys and 2 girls sit in a row?",
      options: ["60", "120", "24", "48"],
      answer: 1
    },
    {
      id: 142,
      question: "The foot of perpendicular from the point (2,3) to the x-axis is:",
      options: ["(2,0)", "(0,3)", "(3,2)", "(0,0)"],
      answer: 0
    },
    {
      id: 143,
      question: "The discriminant of the quadratic 2x² + 5x + 3 = 0 is:",
      options: ["1", "25", "49", "-1"],
      answer: 0
    },
    {
      id: 144,
      question: "If sin⁻¹(1) = x, then x equals:",
      options: ["0", "π/2", "π", "π/4"],
      answer: 1
    },
    {
      id: 145,
      question: "The value of i⁴ (where i = √-1) is:",
      options: ["-1", "i", "1", "-i"],
      answer: 2
    },
    {
      id: 146,
      question: "The equation of x-axis in 3D is:",
      options: ["x = 0, y = 0", "y = 0, z = 0", "x = 0, z = 0", "x = y = z"],
      answer: 1
    },
    {
      id: 147,
      question: "The rank of a zero matrix is:",
      options: ["1", "0", "Undefined", "Depends on order"],
      answer: 1
    },
    {
      id: 148,
      question: "If y = x^n, then dy/dx equals:",
      options: ["nx^n", "nx^(n-1)", "x^(n-1)/n", "n/x^n"],
      answer: 1
    },
    {
      id: 149,
      question: "The probability of getting a head in a single coin toss is:",
      options: ["1", "0", "1/4", "1/2"],
      answer: 3
    },
    {
      id: 150,
      question: "The angle between vectors a⃗ = (1,0,0) and b⃗ = (0,1,0) is:",
      options: ["0°", "45°", "60°", "90°"],
      answer: 3
    }
  ]
};
