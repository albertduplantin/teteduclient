# tete-du-client (Parody)

Application web parodique dénonçant les biais d'évaluation basés sur l'apparence. Cette application illustre de façon humoristique l'absurdité des systèmes de notation "à la tête du client" tout en sensibilisant aux dangers de tels systèmes.

## ⚠️ Important - Parodie éducative

Cette application est une **parodie éducative** qui :
- ❌ **NE FAIT AUCUNE** analyse de visage
- ❌ **NE STOCKE AUCUNE** image
- ❌ **NE COLLECTE AUCUNE** donnée personnelle
- ✅ **DÉNONCE** les biais d'évaluation
- ✅ **ÉDUQUE** sur les dangers de tels systèmes
- ✅ **RESPECTE** la vie privée (RGPD)

## 🎯 Objectif

Démontrer de façon humoristique l'absurdité des évaluations basées sur l'apparence et sensibiliser aux biais cognitifs qui peuvent influencer nos jugements de manière injuste et non pertinente.

## ✨ Fonctionnalités

### 🎭 Simulation parodique
- **Générateur de score** basé sur des biais simulés (Halo, Conformisme, Superstition)
- **Phrases absurdes** générées aléatoirement
- **Effets sonores et vibration** (désactivables)

### 📱 PWA (Progressive Web App)
- **Installation** sur mobile et desktop
- **Fonctionnement hors ligne** après première visite
- **Interface responsive** adaptée à tous les écrans

### 🌍 Internationalisation
- **Français** et **Anglais**
- **Contenu localisé** (textes, phrases, disclaimers)

### 🎨 Effets visuels (optionnels)
- **Caméra locale** pour effets visuels (lunettes, étoiles)
- **Aucune capture** ni envoi d'images
- **Traitement 100% local**

### 🎮 Easter Egg
- **Code Konami** (↑↑↓↓←→←→BA) pour le mode sérieux
- **Modal pédagogique** expliquant les dangers de tels systèmes

## 🚀 Installation et développement

### Prérequis
- Node.js 18+ 
- pnpm (recommandé) ou npm

### Installation
```bash
# Cloner le repository
git clone <repository-url>
cd tete-du-client

# Installer les dépendances
pnpm install

# Lancer en développement
pnpm dev
```

### Scripts disponibles
```bash
pnpm dev          # Développement (http://localhost:3000)
pnpm build        # Build de production
pnpm start        # Serveur de production
pnpm lint         # Vérification ESLint
```

## 🏗️ Architecture

### Stack technique
- **Next.js 14+** avec App Router
- **TypeScript** pour la sécurité des types
- **Tailwind CSS** + **shadcn/ui** pour l'UI
- **PWA** avec Service Worker
- **Aucune dépendance** d'analyse de visage

### Structure du projet
```
tete-du-client/
├── app/
│   ├── _components/          # Composants React
│   ├── _lib/                # Utilitaires et logique métier
│   ├── about/               # Page À propos
│   ├── legal/               # Mentions légales
│   └── page.tsx             # Page d'accueil
├── public/
│   ├── icons/               # Icônes PWA
│   ├── manifest.webmanifest # Manifest PWA
│   ├── sw.js               # Service Worker
│   └── offline.html        # Page hors ligne
└── ...
```

## 🔒 Conformité et sécurité

### RGPD
- ✅ Aucune collecte de données personnelles
- ✅ Aucun cookie de tracking
- ✅ Traitement 100% local
- ✅ Transparence totale

### Protection des mineurs
- ✅ Contenu éducatif uniquement
- ✅ Aucun contenu inapproprié
- ✅ Objectif pédagogique clair

### Aspects légaux
- ✅ Conforme à la loi française
- ✅ Respect des interdictions d'évaluation de visages par IA
- ✅ Licence MIT

## 🎓 Contenu éducatif

### Biais cognitifs illustrés
- **Effet Halo** : généralisation d'une première impression
- **Biais de confirmation** : recherche d'informations confirmant nos préjugés
- **Beauté perçue** : association beauté/compétences
- **Stéréotypes** : croyances simplifiées sur les groupes
- **Biais d'autorité** : crédit excessif aux figures d'autorité

### Messages pédagogiques
- Explication des dangers de l'évaluation basée sur l'apparence
- Sensibilisation aux biais cognitifs
- Promotion de pratiques plus équitables

## 🚀 Déploiement

### Vercel (recommandé)
```bash
# Installation Vercel CLI
npm i -g vercel

# Déploiement
vercel

# Déploiement en production
vercel --prod
```

### Autres plateformes
L'application peut être déployée sur toute plateforme supportant Next.js :
- Netlify
- Railway
- Heroku
- VPS avec Docker

## 📄 Licence

MIT License - Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🤝 Contribution

Les contributions sont les bienvenues ! Cette application étant éducative, toute amélioration du contenu pédagogique ou de l'accessibilité est particulièrement appréciée.

## ⚖️ Avertissement légal

Cette application est une **parodie éducative**. Elle ne doit en aucun cas être utilisée pour des évaluations réelles. L'évaluation basée sur l'apparence est discriminatoire, injuste et souvent illégale.

---

**Rappel important** : Cette application démontre l'absurdité des systèmes d'évaluation basés sur l'apparence. Ne basez jamais une évaluation réelle sur l'apparence d'une personne.
