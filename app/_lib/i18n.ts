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
      "Stylo mâchouillé +3, sourire en coin –2 : verdict… époustou-flop !",
      "Cravate mal nouée +1, regard perdu –3 : résultat… médiocrement génial !",
      "Cheveux en bataille +2, lunettes de travers –1 : conclusion… parfaitement banal !",
      "T-shirt froissé +1, posture décontractée –2 : verdict… étonnamment prévisible !",
      "Chaussettes dépareillées +2, air mystérieux –1 : résultat… brillamment terne !",
      "Café renversé +1, sourire gêné –2 : conclusion… remarquablement ordinaire !",
      "Costard 3 pièces +5, chaussettes Batman –4 : évaluation… super-héros raté !",
      "Barbe de 3 jours +2, cravate Hermès –3 : verdict… luxueusement négligé !",
      "Lunettes de soleil +1, costume de plage –5 : résultat… professionnellement décalé !",
      "Chapeau melon +3, baskets Nike –2 : conclusion… élégamment sportif !",
      "Montre en toc +1, attitude de boss –4 : verdict… faussement important !",
      "Bretelles colorées +2, chemise hawaïenne –3 : résultat… tropicalement formel !",
      "Bague à l'auriculaire +1, air de mafioso –5 : conclusion… dangereusement kitsch !",
      "Pochette assortie +2, chaussures croco –3 : verdict… reptilien chic !",
      "Foulard en soie +3, jean troué –2 : résultat… déchiré élégant !",
      "Boutons de manchette +1, t-shirt 'I ❤️ Paris' –4 : conclusion… parisien kitsch !",
      "Cigare non allumé +2, costume Armani –3 : verdict… fumeur d'eau !",
      "Boucle d'oreille +1, costume 3 pièces –2 : résultat… formellement rebelle !",
      "Casquette à l'envers +3, costume cravate –4 : conclusion… hip-hop corporate !",
      "Écharpe en cachemire +2, pantalon de jogging –3 : verdict… sportivement luxueux !"
    ],
    biasCards: {
      halo: {
        title: "Effet Halo",
        description: "Tendance à généraliser une première impression positive ou négative à tous les aspects d'une personne."
      },
      confirmation: {
        title: "Biais de confirmation",
        description: "Recherche et interprétation d'informations qui confirment nos préjugés existants."
      },
      beauty: {
        title: "Beauté perçue",
        description: "Association automatique entre beauté physique et compétences, intelligence ou moralité."
      },
      stereotypes: {
        title: "Stéréotypes",
        description: "Croyances simplifiées et généralisées sur les caractéristiques d'un groupe social."
      },
      authority: {
        title: "Biais d'autorité",
        description: "Tendance à accorder plus de crédit aux personnes perçues comme ayant de l'autorité."
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
