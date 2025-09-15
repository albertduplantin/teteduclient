// Générateur pseudo-aléatoire simple (LCG - Linear Congruential Generator)
class RNG {
  private seed: number

  constructor(seed: number) {
    this.seed = seed
  }

  // LCG: seed = (seed * a + c) % m
  // Utilise des constantes recommandées pour un bon mélange
  next(): number {
    this.seed = (this.seed * 1664525 + 1013904223) % (2 ** 32)
    return this.seed / (2 ** 32) // Normalise entre 0 et 1
  }

  // Génère un entier entre min et max (inclus)
  nextInt(min: number, max: number): number {
    const range = max - min + 1
    return Math.floor(this.next() * range) + min
  }
}

// Fonction pour calculer le score basé sur les biais
export function computeScore(biases: {
  halo: number
  herd: number
  lucky: number
}, phrases: string[] = []): { score: number; phrase: string; phrases: string[] } {
  // Crée un seed basé sur les valeurs des biais
  const seed = (biases.halo * 73856093) ^ 
               (biases.herd * 19349663) ^ 
               (biases.lucky * 83492791)
  
  const rng = new RNG(seed)
  
  // Génère un score entre 1 et 20 (plus réaliste)
  const score = rng.nextInt(1, 20)
  
  // Utilise les phrases fournies ou des phrases par défaut
  const defaultPhrases = [
    "Stylo mâchouillé +3, sourire en coin –2 : verdict… époustou-flop !",
    "Cravate mal nouée +1, regard perdu –3 : résultat… médiocrement génial !",
    "Cheveux en bataille +2, lunettes de travers –1 : conclusion… parfaitement banal !",
    "T-shirt froissé +1, posture décontractée –2 : verdict… étonnamment prévisible !",
    "Chaussettes dépareillées +2, air mystérieux –1 : résultat… brillamment terne !",
    "Café renversé +1, sourire gêné –2 : conclusion… remarquablement ordinaire !"
  ]
  const phrasesToUse = phrases.length > 0 ? phrases : defaultPhrases
  
  // Sélectionne une phrase basée sur le score
  const phraseIndex = rng.nextInt(0, phrasesToUse.length - 1)
  const phrase = phrasesToUse[phraseIndex] || phrasesToUse[0] // Fallback si l'index est invalide
  
  return { score, phrase, phrases: phrasesToUse }
}

// Fonction utilitaire pour générer des nombres aléatoires
export function randomInt(min: number, max: number, seed?: number): number {
  if (seed !== undefined) {
    const rng = new RNG(seed)
    return rng.nextInt(min, max)
  }
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Fonction pour mélanger un tableau
export function shuffleArray<T>(array: T[], seed?: number): T[] {
  const shuffled = [...array]
  const rng = seed !== undefined ? new RNG(seed) : new RNG(Date.now())
  
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = rng.nextInt(0, i)
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  
  return shuffled
}
