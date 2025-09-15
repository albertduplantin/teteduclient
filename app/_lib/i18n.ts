export type Language = 'fr' | 'en'

export interface I18nContent {
  disclaimer: string
  cameraNotice: string
  biasHalo: string
  biasHerd: string
  biasLucky: string
  deliberate: string
  redeliberate: string
  showBiases: string
  score: string
  outOf: string
  absurdPhrases: string[]
  biasCards: {
    halo: { title: string; description: string }
    confirmation: { title: string; description: string }
    beauty: { title: string; description: string }
    stereotypes: { title: string; description: string }
    authority: { title: string; description: string }
  }
  settings: {
    title: string
    camera: string
    glasses: string
    stars: string
    sound: string
    vibration: string
    language: string
  }
  about: {
    title: string
    content: string
  }
  legal: {
    title: string
    content: string
  }
  serious: {
    title: string
    content: string
  }
  navigation: {
    home: string
    about: string
    legal: string
  }
}

export const i18n: Record<Language, I18nContent> = {
  fr: {
    disclaimer: "PARODIE — Aucune analyse de visage. Cette application illustre les dérives des notations biaisées. La caméra (si activée) sert uniquement à un effet visuel local, sans capture ni envoi. Ne basez jamais une évaluation réelle sur l'apparence.",
    cameraNotice: "La caméra n'est utilisée que pour un effet visuel local, rien n'est enregistré ni transmis.",
    biasHalo: "Biais d'Halo",
    biasHerd: "Conformisme",
    biasLucky: "Superstition",
    deliberate: "Délibérer",
    redeliberate: "Re-délibérer",
    showBiases: "Afficher les biais",
    score: "Score",
    outOf: "sur 20",
    absurdPhrases: [
      "Tête de vainqueur, style de perdant : 12/20 - La déception totale !",
      "Barbe de hipster, âme de boomer : 8/20 - Génération confuse !",
      "Costard 5000€, chaussettes Batman : 15/20 - Luxe et geek, combo gagnant !",
      "Sourire de commercial, regard de serial killer : 6/20 - Vendeur de cauchemars !",
      "Cheveux parfaits, personnalité nulle : 4/20 - Belle coquille vide !",
      "Lunettes de vue, lunettes de soleil : 7/20 - Double vision, zéro style !",
      "Montre Rolex, montre Apple : 9/20 - Montre-moi ton vrai niveau !",
      "Cravate Hermès, slip H&M : 11/20 - Luxe visible, confort caché !",
      "Chaussures cuir, chaussettes trouées : 5/20 - Élégance de façade !",
      "Parfum Chanel, haleine de chat : 3/20 - Parfumé mais puant !",
      "Coiffure 2024, mentalité 1990 : 8/20 - Moderne mais dépassé !",
      "T-shirt vintage, âme de vieux : 13/20 - Rétro mais authentique !",
      "Bague en or, doigt en plastique : 6/20 - Bijou vrai, doigt faux !",
      "Écharpe en cachemire, nez qui coule : 7/20 - Chic mais malade !",
      "Casquette à l'envers, cerveau à l'endroit : 16/20 - Rebelle mais intelligent !",
      "Costume 3 pièces, âme de 2 pièces : 10/20 - Habillé mais simple !",
      "Lunettes de soleil la nuit : 2/20 - Mode aveugle !",
      "Chaussettes dépareillées, chaussures assorties : 14/20 - Désordonné mais cohérent !",
      "Barbe de 3 jours, mentalité de 30 ans : 12/20 - Mature et négligé !",
      "T-shirt 'I ❤️ Paris', n'a jamais été à Paris : 1/20 - Faux parisien !",
      "Montre connectée, cerveau déconnecté : 5/20 - Techno mais bête !",
      "Costard noir, âme colorée : 17/20 - Élégant et original !",
      "Chaussures de sport, costume de ville : 9/20 - Sportif mais décalé !",
      "Lunettes de vue, vision d'avenir : 18/20 - Prévisionnaire !",
      "Cravate mal nouée, vie bien nouée : 15/20 - Désordonné mais heureux !"
    ],
    biasCards: {
      halo: {
        title: "Effet Halo",
        description: "On juge quelqu'un sur son apparence : beau = intelligent, moche = bête. C'est con mais c'est humain !"
      },
      confirmation: {
        title: "Conformisme", 
        description: "On suit le troupeau : si tout le monde dit que c'est nul, on dit pareil. Mouton mode activé !"
      },
      beauty: {
        title: "Superstition",
        description: "On croit que porter du vert porte bonheur ou que les lunettes de soleil la nuit c'est stylé. Magie !"
      },
      stereotypes: {
        title: "Stéréotypes",
        description: "On met tout le monde dans des cases : les blonds sont bêtes, les roux ont du caractère. Cliché !"
      },
      authority: {
        title: "Biais d'autorité",
        description: "Si quelqu'un a l'air important, on le croit plus. Même s'il raconte n'importe quoi !"
      }
    },
    settings: {
      title: "Paramètres",
      camera: "Activer caméra",
      glasses: "Filtre lunettes",
      stars: "Étoiles",
      sound: "Son",
      vibration: "Vibration",
      language: "Langue"
    },
    about: {
      title: "À propos",
      content: "Cette application parodique dénonce l'absurdité des évaluations basées sur l'apparence. Elle illustre comment les biais cognitifs peuvent influencer nos jugements de manière injuste et non pertinente. Aucune analyse de visage n'est effectuée - c'est purement éducatif et humoristique."
    },
    legal: {
      title: "Mentions légales",
      content: "Cette application est une parodie éducative. Aucune donnée personnelle n'est collectée, aucune image n'est enregistrée ou transmise. L'application respecte le RGPD et ne contient aucun système d'analyse biométrique. Public mineur autorisé - contenu éducatif uniquement."
    },
    serious: {
      title: "Pourquoi ce scoring est problématique ?",
      content: "L'évaluation basée sur l'apparence est discriminatoire, injuste et non pertinente. Elle perpétue les stéréotypes, renforce les inégalités et viole les principes d'équité. En France, l'évaluation de visages par IA est interdite par la loi. Cette parodie vise à sensibiliser aux dangers de tels systèmes."
    },
    navigation: {
      home: "Accueil",
      about: "À propos",
      legal: "Mentions légales"
    }
  },
  en: {
    disclaimer: "PARODY — No face analysis. This app highlights how biased 'appearance-based' scoring is. Camera (if enabled) is only for a local visual effect, no capture or upload. Never base real assessments on appearance.",
    cameraNotice: "The camera is only used for a local visual effect, nothing is recorded or transmitted.",
    biasHalo: "Halo Bias",
    biasHerd: "Conformity",
    biasLucky: "Superstition",
    deliberate: "Deliberate",
    redeliberate: "Re-deliberate",
    showBiases: "Show biases",
    score: "Score",
    outOf: "out of 20",
    absurdPhrases: [
      "Mismatched socks +2, mysterious grin −1: final verdict… glorious meh!",
      "Coffee stain +1, awkward smile −2: result… remarkably ordinary!",
      "Messy hair +2, crooked glasses −1: conclusion… perfectly bland!",
      "Wrinkled shirt +1, relaxed posture −2: verdict… surprisingly predictable!",
      "Chewed pen +3, knowing smirk −2: outcome… stunningly mediocre!",
      "Lost look +1, crooked tie −3: result… brilliantly average!"
    ],
    biasCards: {
      halo: {
        title: "Halo Effect",
        description: "Tendency to generalize a first positive or negative impression to all aspects of a person."
      },
      confirmation: {
        title: "Confirmation Bias",
        description: "Searching for and interpreting information that confirms existing prejudices."
      },
      beauty: {
        title: "Beauty Premium",
        description: "Automatic association between physical beauty and skills, intelligence or morality."
      },
      stereotypes: {
        title: "Stereotyping",
        description: "Simplified and generalized beliefs about the characteristics of a social group."
      },
      authority: {
        title: "Authority Bias",
        description: "Tendency to give more credit to people perceived as having authority."
      }
    },
    settings: {
      title: "Settings",
      camera: "Enable camera",
      glasses: "Glasses filter",
      stars: "Stars",
      sound: "Sound",
      vibration: "Vibration",
      language: "Language"
    },
    about: {
      title: "About",
      content: "This parody application denounces the absurdity of appearance-based evaluations. It illustrates how cognitive biases can unfairly and irrelevantly influence our judgments. No face analysis is performed - it's purely educational and humorous."
    },
    legal: {
      title: "Legal Notice",
      content: "This application is an educational parody. No personal data is collected, no images are recorded or transmitted. The application complies with GDPR and contains no biometric analysis system. Minors allowed - educational content only."
    },
    serious: {
      title: "Why is this scoring problematic?",
      content: "Appearance-based evaluation is discriminatory, unfair and irrelevant. It perpetuates stereotypes, reinforces inequalities and violates fairness principles. In France, face evaluation by AI is prohibited by law. This parody aims to raise awareness of the dangers of such systems."
    },
    navigation: {
      home: "Home",
      about: "About",
      legal: "Legal"
    }
  }
}

export function useI18n(lang: Language) {
  return i18n[lang]
}
