# NOOREA

> Une expérience digitale premium dédiée au soin de la peau

NOOREA est une expérience narrative immersive qui réinvente la présentation des produits de soin. À travers un parcours visuel sophistiqué et des interactions subtiles, la marque dévoile son univers et sa collection de produits d'exception.

---

## ✨ L'Expérience

Le parcours NOOREA se déroule en **8 scènes narratives** :

```
Hero
  ↓
Manifeste
  ↓
Découverte Produit
  ↓
Expérience Sensorielle
  ↓
Connexion Humaine
  ↓
Choix Guidé
  ↓
Désir
  ↓
Ouverture
```

Chaque scène utilise des animations fluides, des effets de lumière subtils et une typographie raffinée pour créer une atmosphère premium et contemporaine.

---

## 🎯 Fonctionnalités

### Expérience Narrative
- **8 scènes immersives** avec transitions fluides
- **Animations Framer Motion** pour des interactions naturelles
- **Effets de lumière dynamiques** (glow, sweep, ambient)
- **Micro-interactions** sur tous les éléments cliquables
- **Scroll narratif** avec parallaxe et révélations progressives

### Catalogue & Produits
- **8 produits** (sérums, crèmes visage, crème corps, savon)
- **Pages produits dynamiques** avec SSG (Static Site Generation)
- **Navigation produit** précédente/suivante
- **Produits similaires** avec recommandations
- **Images haute qualité** multi-formats (front, angle, wide, transparent)

### Navigation & Filtres
- **Menu hamburger** avec overlay full-screen
- **Filtres collection** par catégorie (Sérum Visage, Crème Visage, Crème Corps, Savon)
- **Breadcrumb** navigation sur pages produits
- **Retour collection** depuis les pages produits

### Interactions
- **Quiz de recommandation** personnalisé (8 questions)
- **WhatsApp integration** pour contact direct
- **CTAs stratégiques** tout au long du parcours

### Technique
- **Responsive** mobile, tablet, desktop
- **Accessibilité** (aria-labels, focus management, keyboard navigation)
- **SEO** metadata dynamiques par page/produit
- **Performance optimisée** (lazy loading, image optimization)
- **TypeScript strict** pour fiabilité

---

## 🛠️ Stack Technique

### Framework & UI
- **Next.js 16** (App Router, React Server Components)
- **React 19** avec hooks modernes
- **TypeScript 5** strict mode
- **Tailwind CSS 4** pour le styling

### Animation & Interactions
- **Framer Motion 12** pour animations fluides
- **Lucide React** pour iconographie cohérente

### Backend & Data (optionnel)
- **Supabase** (authentification, base de données future)
- **React Hook Form + Zod** pour validation formulaires

### Développement
- **ESLint 9** avec config Next.js
- **Prettier 3** avec plugin Tailwind
- **Git** avec workflow branches

---

## 🚀 Installation

### Prérequis
- Node.js 20+
- npm ou yarn

### Cloner le projet
```bash
git clone https://github.com/Linfaigk4/NOOREA.git
cd NOOREA
```

### Installer les dépendances
```bash
npm install
```

### Variables d'environnement
Copier `.env.example` vers `.env.local` :
```bash
cp .env.example .env.local
```

Puis configurer les variables Supabase (optionnel pour MVP) :
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_key
```

### Lancer le serveur de développement
```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

---

## 🧪 Validation

### Linter
```bash
npm run lint
```

### Build de production
```bash
npm run build
```

Le build génère :
- **Pages statiques** pour `/`, `/collection`, `/playground`
- **Pages dynamiques SSG** pour les 8 produits (`/collection/[slug]`)
- **Assets optimisés** (images, fonts, CSS)

---

## 📂 Structure du Projet

```
NOOREA/
├── app/
│   ├── collection/           # Catalogue & pages produits
│   │   ├── page.tsx          # Liste des produits avec filtres
│   │   └── [slug]/           # Pages produits dynamiques (SSG)
│   ├── playground/           # Environnement de test composants
│   ├── globals.css           # Styles globaux + variables CSS
│   ├── layout.tsx            # Layout racine avec Navigation
│   └── page.tsx              # Page d'accueil (8 scènes)
├── src/
│   ├── components/
│   │   ├── collection/       # Composants catalogue
│   │   ├── experience/       # Système d'effets (motion, lighting, effects, layout)
│   │   ├── home/             # 8 scènes narratives (Hero → Scene08)
│   │   ├── navigation/       # Hamburger, MenuOverlay, Footer
│   │   ├── product/          # ProductPage, ProductDetails, etc.
│   │   └── quiz/             # Quiz de recommandation
│   ├── config/               # Configuration globale
│   ├── constants/            # Couleurs, textes, données statiques
│   ├── data/                 # Produits, FAQ, quiz
│   ├── hooks/                # useScrollProgress, etc.
│   ├── lib/                  # Utils (slugify, supabase, etc.)
│   ├── providers/            # Context providers
│   └── types/                # Types TypeScript
├── public/
│   └── NOREA-ASSETS/         # Images (hero, products, editorial, etc.)
├── MISSION_*.md              # Documentation des évolutions
└── package.json
```

---

## 🎨 Système de Design

### Palette de Couleurs
- **Noir profond** (`#1A1A1A`) — Fond principal, textes headers
- **Charcoal** (`#2A2A2A`) — Éléments secondaires
- **Ivoire** (`#F8F6F1`) — Backgrounds clairs
- **Crème** (`#F2EFE7`) — Surfaces douces
- **Sable** (`#E8E3D8`) — Bordures subtiles
- **Beige** (`#D4CFC0`) — Séparateurs
- **Taupe** (`#A39A89`) — Textes secondaires
- **Or** (`#D4AF37`) — Accents premium
- **Or clair** (`#E8C25F`) — Hover states

### Typographie
- **Font principale** : System fonts optimisées (sans-serif)
- **Poids** : Light (300), Normal (400), Medium (500)
- **Tracking** : Wide spacing pour élégance

### Effets
- **Glow layers** pour profondeur
- **Light sweep** pour dynamisme
- **Gradient mesh** pour textures organiques
- **Noise overlay** pour grain cinématographique
- **Cursor light** pour interactivité premium

---

## 🔒 Sécurité

- ✅ Secrets **exclus** de Git (`.env.local`, credentials)
- ✅ `.gitignore` configuré pour Next.js, Node.js, Vercel
- ✅ Variables d'environnement **jamais committées**
- ✅ API keys **côté serveur uniquement** (quand utilisées)

---

## 📦 Routes Disponibles

| Route | Description | Type |
|-------|-------------|------|
| `/` | Expérience principale (8 scènes) | Statique |
| `/collection` | Catalogue produits avec filtres | Statique |
| `/collection/bright-serum-face` | Produit 1 — Bright Serum Face 30ml | SSG |
| `/collection/bright-serum-face-200ml` | Produit 2 — Bright Serum Face 200ml | SSG |
| `/collection/serum-repair-skincare` | Produit 3 — Serum Repair Skincare | SSG |
| `/collection/bright-face-cream` | Produit 4 — Bright Face Cream | SSG |
| `/collection/face-repair-cream` | Produit 5 — Face Repair Cream | SSG |
| `/collection/face-repair-cream-250g` | Produit 6 — Face Repair Cream 250g | SSG |
| `/collection/soap-repair-skincare` | Produit 7 — Soap Repair Skincare | SSG |
| `/collection/bright-body-cream` | Produit 8 — Bright Body Cream | SSG |
| `/playground` | Test des composants Experience System | Statique |

---

## 🚧 Statut du Projet

**Status** : Active development

**Version actuelle** : v0.1.0 — MVP fonctionnel complet

### Prochaines Évolutions Possibles
- Authentification utilisateur (Supabase Auth)
- Panier et paiement (Stripe/autre)
- Dashboard admin pour gestion produits
- Blog/articles éditoriaux
- Multi-langue (FR/EN complet)
- Analytics et tracking conversions

---

## 📄 Licence

Propriétaire — Tous droits réservés NOOREA

---

## 🤝 Contact

Pour toute question ou collaboration :
- **WhatsApp** : [Contact direct via l'application]
- **GitHub** : [github.com/Linfaigk4/NOOREA](https://github.com/Linfaigk4/NOOREA)

---

**Made with precision and care for NOOREA** ✨
