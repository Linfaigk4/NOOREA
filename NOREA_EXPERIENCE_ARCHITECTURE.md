# NOREA EXPERIENCE ARCHITECTURE
## Digital Experience System — Architecture Complète

---

## TABLE DES MATIÈRES

1. [Philosophie UX](#philosophie-ux)
2. [Principes de Direction Artistique](#principes-de-direction-artistique)
3. [Parcours Utilisateur](#parcours-utilisateur)
4. [Architecture des Scènes](#architecture-des-scènes)
5. [Système de Composants](#système-de-composants)
6. [Système d'Animation](#système-danimation)
7. [Effets Visuels](#effets-visuels)
8. [Contraintes de Performance](#contraintes-de-performance)
9. [Règles Responsive](#règles-responsive)
10. [Structure du Projet](#structure-du-projet)
11. [Assets Disponibles](#assets-disponibles)

---

## PHILOSOPHIE UX

### Vision Globale
NOREA n'est pas un site e-commerce classique. C'est une **expérience narrative immersive** qui fusionne :
- Un **magazine premium** (éditorial visuel fort)
- Une **landing page immersive** (conversion naturelle)
- Une **expérience éditoriale** (storytelling visuel)
- Un **tunnel de découverte** (exploration guidée)
- Un **tunnel de conversion** (achat naturel sans friction)

### Principe Cardinal : ONE SCREEN = ONE IDEA
Chaque écran visible doit porter **UNE SEULE idée**, **UNE SEULE émotion**, **UN SEUL objectif**.

Jamais de surcharge.  
Jamais de distractions multiples.  
Chaque scène est une **publication magazine exportable**.

### Anti-Patterns à Éviter Absolument
❌ Grilles de produits e-commerce classiques  
❌ Templates Shopify/WooCommerce  
❌ Catalogues avec prix affichés partout  
❌ Alignements parfaits et symétriques  
❌ Sections trop courtes (<80vh)  
❌ Textes longs et descriptifs  
❌ Call-to-actions multiples par section  
❌ Navigation traditionnelle avec menu déroulant  

### Inspiration Référence
- **Dior Beauty** : luxe éditorial, compositions asymétriques
- **Aesop** : minimalisme radical, typographie dominante
- **Apple** : espaces vides massifs, focus produit unique
- **Rhode** : esthétique clean, textures douces
- **Le Labo** : storytelling sensoriel, identité forte
- **Loewe Perfumes** : direction artistique audacieuse

---

## PRINCIPES DE DIRECTION ARTISTIQUE

### Identité Visuelle
**Palette NOREA** (définie dans `app/globals.css`) :
- `cream` : #faf8f6 (fond principal)
- `ivory` : #f5f3f0
- `sand` : #e8e4dd
- `beige` : #d4cfc6
- `taupe` : #8b837a (textes secondaires)
- `charcoal` : #2b2b2b
- `black` : #1a1a1a (textes principaux)
- `gold-light` : #d4af8f (accents dorés)
- `gold` : #c0a080 (glow effects)

### Règles Typographiques
- **Titres** : très grandes tailles (60px à 120px desktop)
- **Hiérarchie** : utiliser l'échelle, pas la couleur
- **Espacement** : tracking très serré pour les titres
- **Poids** : léger (font-light) pour élégance
- **Langue** : **tout en français**

### Règles de Composition
1. **Asymétrie intentionnelle** : briser les grilles classiques
2. **Espaces négatifs massifs** : 40-60% de l'écran peut être vide
3. **Images débordantes** : sortir du flux, superposer
4. **Depth layering** : z-index pour créer plusieurs plans
5. **Proportions inattendues** : produits très grands ou très petits
6. **Textures douces** : golden glow subtil, jamais RGB criard

### Golden Glow Effect
- **Utilisation** : moments clés uniquement (Hero, CTA final)
- **Caractéristiques** : doux, diffus, sophistiqué
- **Couleurs** : or pâle (#d4af8f), jamais néon
- **Opacité** : 10-20% maximum
- **Blur** : 80-120px pour effet diffus
- **Animation** : pulse subtil (2-3s), jamais clignotant

---

## PARCOURS UTILISATEUR

### Journey Map
```
ENTER → DISCOVER → INTRIGUED → EXPLORE → FEEL → UNDERSTAND → DESIRE → CHOOSE → CONVERT
```

### Étapes Détaillées

**1. ENTER** (Scène 1)  
Visiteur arrive → immersion immédiate → comprend qu'il n'est pas sur un site classique

**2. DISCOVER** (Scène 2)  
Manifeste de marque → philosophie NOREA → valeurs révélées mot par mot

**3. INTRIGUED** (Scène 3)  
Premiers produits découverts progressivement → pas de catalogue complet → curiosité éveillée

**4. EXPLORE** (Scène 4)  
Textures, matières, sensorialité → expérience visuelle immersive → parallaxe subtile

**5. FEEL** (Scène 5)  
Connexion émotionnelle → portraits humains → identification personnelle

**6. UNDERSTAND** (Scène 6)  
Quiz interactif → découverte guidée → produit personnalisé suggéré

**7. DESIRE** (Scène 7)  
Univers NOREA complet → storytelling éditorial → désir d'appartenance

**8. CHOOSE** (Scène 8)  
Conversion naturelle → WhatsApp direct → pas de panier, conversation humaine

---

## ARCHITECTURE DES SCÈNES

### Scène 1 : L'ENTRÉE IMMERSIVE
**Hauteur** : 100vh  
**Objectif** : Impact visuel immédiat  
**Contenu** :
- Boucle vidéo/image hero (hero-01 à hero-05)
- Logo NOREA discret en haut
- Titre ultra-court en français
- Golden glow subtil en overlay
- Scroll indicator minimal

**Assets** : `NOREA-ASSETS/hero/hero-*.jfif`

**Mood** : mystérieux, premium, invitation silencieuse

---

### Scène 2 : LE MANIFESTE
**Hauteur** : 80vh  
**Objectif** : Révéler la philosophie de la marque  
**Contenu** :
- Fond noir NOREA
- Phrase dominante révélée mot par mot
- Animation typographique subtile
- Pas d'image (texte = héros)

**Exemple de texte** :
```
LA BEAUTÉ
N'EST PAS UNE TENDANCE.
```

**Mood** : affirmation de valeurs, confiance, identité forte

---

### Scène 3 : DÉCOUVERTE PRODUIT INTERACTIVE
**Hauteur** : 120vh  
**Objectif** : Révéler les produits progressivement au scroll  
**Contenu** :
- 3-4 produits seulement (pas les 8)
- Apparition progressive sur scroll
- Images grandes et espacées
- Noms + formats uniquement (pas de prix)
- Composition asymétrique

**Assets** : `NOREA-ASSETS/products/product-0*/front-4x5.png`

**Interaction** : scroll-triggered reveal, parallaxe subtile

**Mood** : découverte organique, pas de catalogue

---

### Scène 4 : EXPÉRIENCE SENSORIELLE
**Hauteur** : 100vh  
**Objectif** : Immersion dans les textures et matières  
**Contenu** :
- Images sensory superposées
- Parallaxe multi-couches
- Texte minimal ("TEXTURE", "LUMIÈRE", "MATIÈRE")
- Fond cream/ivory

**Assets** : `NOREA-ASSETS/editorial/sensory/sensory-*.png`

**Interaction** : parallaxe 3 niveaux (foreground, middle, background)

**Mood** : immersion sensorielle, tactile, organique

---

### Scène 5 : CONNEXION HUMAINE
**Hauteur** : 90vh  
**Objectif** : Créer connexion émotionnelle  
**Contenu** :
- 1 portrait principal (portrait-01)
- 2-3 portraits secondaires en composition libre
- Titre émotionnel court
- Pas de faux témoignages

**Assets** : `NOREA-ASSETS/models/portrait-*.png`

**Exemple de titre** :
```
CHAQUE PEAU
MÉRITE SON PROPRE ÉCLAT.
```

**Mood** : intimité, authenticité, diversité

---

### Scène 6 : CHOIX GUIDÉ INTERACTIF
**Hauteur** : 110vh  
**Objectif** : Personnalisation via mini-quiz  
**Contenu** :
- Question 1 : "Votre type de peau ?"
- Question 2 : "Votre routine idéale ?"
- Question 3 : "Votre priorité ?"
- Résultat : 1 produit recommandé

**Interaction** : clic sur réponses → transition fluide → recommandation

**Données** : utiliser `src/data/products.ts` pour recommandations

**Mood** : guidance personnelle, découverte aidée

---

### Scène 7 : UNIVERS NOREA
**Hauteur** : 100vh  
**Objectif** : Storytelling éditorial de la marque  
**Contenu** :
- Images brand editorial en scroll horizontal
- Texte narratif court
- Composition éditoriale magazine

**Assets** : `NOREA-ASSETS/editorial/brand-editorial/brand-editorial-*.png`

**Interaction** : scroll horizontal ou vertical avec parallaxe

**Mood** : campagne de marque, identité forte

---

### Scène 8 : CONVERSION NATURELLE
**Hauteur** : 80vh  
**Objectif** : CTA WhatsApp sans friction  
**Contenu** :
- Fond noir
- Titre final puissant
- 1 seul bouton CTA WhatsApp
- Golden glow autour du CTA
- Footer minimal

**Exemple de titre** :
```
VOTRE RITUEL NOREA
COMMENCE ICI.
```

**Action** : Ouvre WhatsApp avec message pré-rempli (voir `src/data/constants.ts`)

**Mood** : invitation naturelle, conversation humaine

---

## SYSTÈME DE COMPOSANTS

### Architecture de Composants d'Expérience

#### Composants de Scène (à créer)
```
src/components/scenes/
├── Scene01_EntreeImmersive.tsx
├── Scene02_Manifeste.tsx
├── Scene03_DecouverteProduit.tsx
├── Scene04_ExperienceSensorielle.tsx
├── Scene05_ConnexionHumaine.tsx
├── Scene06_ChoixGuide.tsx
├── Scene07_UniversNOREA.tsx
└── Scene08_ConversionNaturelle.tsx
```

Chaque scène est **autonome et auto-suffisante**.

#### Composants d'Animation (à créer)
```
src/components/animations/
├── RevealOnScroll.tsx         // Apparition progressive au scroll
├── WordByWordReveal.tsx        // Révélation mot par mot
├── ParallaxLayer.tsx           // Parallaxe multi-couches
├── GoldenGlow.tsx              // Effet golden glow
├── MagneticButton.tsx          // Bouton avec effet magnétique
└── ScrollProgress.tsx          // Indicateur de progression
```

#### Composants d'Interaction (à créer)
```
src/components/interactions/
├── Quiz.tsx                    // Système de quiz
├── QuizQuestion.tsx            // Question individuelle
├── ProductRecommendation.tsx   // Résultat personnalisé
└── WhatsAppCTA.tsx             // Bouton WhatsApp avec analytics
```

#### Composants UI (existants - à conserver)
```
src/components/ui/
├── Button.tsx                  // Bouton de base
├── Container.tsx               // Container responsive
└── index.ts                    // Exports
```

#### Composants Système (à créer)
```
src/components/system/
├── Navigation.tsx              // Navigation minimaliste
├── ScrollIndicator.tsx         // Indicateur scroll
└── Footer.tsx                  // Footer minimal
```

---

## SYSTÈME D'ANIMATION

### Bibliothèques
- **Framer Motion** (`framer-motion`) : animations React
- **Motion** (`motion`) : animations avancées

### Types d'Animations

#### 1. Scroll-Triggered Animations
- **Apparition progressive** : fade-in + translate-y
- **Révélation d'images** : clip-path progressive
- **Parallaxe** : vitesses différentielles (0.5x, 1x, 1.5x)

#### 2. Typography Animations
- **Word-by-word reveal** : délai 100-200ms entre chaque mot
- **Letter spacing animation** : tracking qui se resserre
- **Fade-in cascade** : ligne par ligne

#### 3. Interaction Animations
- **Hover effects** : scale 1.05, transition 300ms
- **Magnetic buttons** : attraction vers cursor (20px radius)
- **Click feedback** : scale down puis up

#### 4. Continuous Animations
- **Golden glow pulse** : opacity 0.1 → 0.2, duration 2s
- **Gentle floating** : translate-y ±5px, duration 3s
- **Image breathing** : scale 1 → 1.02, duration 4s

### Animation Timing
- **Rapide** : 200-300ms (interactions)
- **Standard** : 600-800ms (transitions)
- **Lent** : 1200-1800ms (entrées de scène)
- **Ambient** : 2000-4000ms (effets continus)

### Easing Functions
- **Entrées** : `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo)
- **Sorties** : `cubic-bezier(0.7, 0, 0.84, 0)` (ease-in-expo)
- **Interactions** : `cubic-bezier(0.4, 0, 0.2, 1)` (ease-in-out)

### Respect `prefers-reduced-motion`
Toujours désactiver animations complexes si `prefers-reduced-motion: reduce`.

---

## EFFETS VISUELS

### Golden Glow
**Implémentation** :
- `box-shadow: 0 0 80px 40px rgba(212, 175, 143, 0.15)`
- Animation pulse subtile
- Utilisé sur : Hero, CTA final, hover produits

### Parallaxe Multi-Couches
**Vitesses** :
- Background : `translateY(scrollY * 0.3)`
- Middleground : `translateY(scrollY * 0.5)`
- Foreground : `translateY(scrollY * 0.8)`

### Clip-Path Reveals
**Progression** :
- Images révélées par découpe progressive
- `clip-path: inset(0 0 ${100-progress}% 0)`

### Backdrop Filters
- `backdrop-filter: blur(20px)` sur overlays
- Toujours avec fallback couleur semi-transparente

---

## CONTRAINTES DE PERFORMANCE

### Objectifs
- **First Contentful Paint** : < 1.8s
- **Largest Contentful Paint** : < 2.5s
- **Time to Interactive** : < 3.8s
- **Cumulative Layout Shift** : < 0.1

### Optimisations Images
- Utiliser Next.js `<Image>` avec `priority` pour hero
- Format WebP avec fallback JPEG
- Lazy loading pour images hors viewport
- `sizes` appropriés pour responsive

### Optimisations JavaScript
- Code splitting par scène (dynamic imports)
- Lazy load animations (IntersectionObserver)
- Debounce scroll events (16ms)
- Throttle parallax calculations

### Optimisations CSS
- Utiliser `transform` et `opacity` (GPU-accelerated)
- Éviter `width`, `height`, `top`, `left` dans animations
- `will-change` uniquement pendant animations
- CSS Grid pour layouts complexes

---

## RÈGLES RESPONSIVE

### Breakpoints
- **Mobile** : 375px (iPhone SE)
- **Tablet** : 768px (iPad)
- **Desktop Small** : 1024px
- **Desktop Large** : 1440px

### Adaptation par Scène

#### Mobile (375px)
- Sections : 100vh minimum
- Typographie réduite (40px → 60px titres)
- Images en pleine largeur
- Quiz : 1 question par écran
- Parallaxe désactivé (performance)

#### Tablet (768px)
- Sections : 90vh minimum
- Typographie intermédiaire (50px → 80px)
- Compositions simplifiées
- Parallaxe léger (2 couches max)

#### Desktop (1024px+)
- Sections : hauteurs définies (80vh → 150vh)
- Typographie pleine échelle (60px → 120px)
- Compositions asymétriques complètes
- Parallaxe complet (3 couches)

### Touch vs Mouse
- **Touch** : désactiver hover effects
- **Touch** : agrandir zones de clic (48px minimum)
- **Mouse** : activer magnetic buttons, hover reveals

---

## STRUCTURE DU PROJET

### Arborescence Cible
```
NOREA-web/
├── app/
│   ├── globals.css                 # Palette NOREA + base styles
│   ├── layout.tsx                  # Layout Next.js
│   └── page.tsx                    # Homepage (importe les scènes)
│
├── src/
│   ├── components/
│   │   ├── scenes/                 # 8 scènes complètes
│   │   ├── animations/             # Système d'animation
│   │   ├── interactions/           # Quiz, CTA, etc.
│   │   ├── system/                 # Navigation, Footer
│   │   └── ui/                     # Boutons, Container (existants)
│   │
│   ├── data/
│   │   ├── products.ts             # 8 produits NOREA (existant)
│   │   └── constants.ts            # Constantes marque (existant)
│   │
│   ├── hooks/                      # Hooks custom (à créer)
│   │   ├── useScrollProgress.ts    # Suivi progression scroll
│   │   ├── useParallax.ts          # Calcul parallaxe
│   │   └── useReducedMotion.ts     # Détection prefers-reduced-motion
│   │
│   └── utils/                      # Utilitaires (à créer)
│       ├── animations.ts           # Variants Framer Motion
│       └── analytics.ts            # Tracking événements
│
├── NOREA-ASSETS/                   # Assets existants (ne pas toucher)
│   ├── hero/                       # 5 images hero
│   ├── products/                   # 8 produits (4 images chacun)
│   ├── editorial/                  # Images éditoriales
│   ├── models/                     # 4 portraits
│   ├── lifestyle/                  # 3 images lifestyle
│   └── brand/                      # Logo, favicon
│
├── NOREA_EXPERIENCE_ARCHITECTURE.md   # Ce document
└── package.json                    # Dépendances (existant)
```

---

## ASSETS DISPONIBLES

### Produits (8 produits × 4 images chacun)
```
NOREA-ASSETS/products/product-01/ à product-08/
├── front-4x5.png        # Vue frontale (recommandé pour scènes)
├── angle-1x1.png        # Vue angle
├── transparent.png      # PNG détouré
└── wide-16x9.png        # Vue wide
```

**Produits** : Bright Serum Face (30ml, 200ml), Serum Repair Skincare, Bright Face Cream, Face Repair Cream (200g, 250g), Soap Repair Skincare, Bright Body Cream

### Hero (5 images)
```
NOREA-ASSETS/hero/hero-01.jfif à hero-05.jfif
```
Format : JFIF, haute qualité

### Editorial
```
NOREA-ASSETS/editorial/
├── brand-editorial/            # 2 images identité marque
├── product-focus/              # 3 images focus produit
└── sensory/                    # 2 images textures sensorielles
```

### Portraits (4 images)
```
NOREA-ASSETS/models/portrait-01.png à portrait-04.png
```

### Lifestyle (3 images)
```
NOREA-ASSETS/lifestyle/lifestyle-01.png à lifestyle-03.png
```

### Ensemble (3 images)
```
NOREA-ASSETS/ensemble/ensemble-01.png à ensemble-03.png
```

### Brand
```
NOREA-ASSETS/brand/
├── logo.png             # Logo standard
├── logo-white.png       # Logo blanc
└── favicon.png          # Favicon
```

### Backgrounds
```
NOREA-ASSETS/backgrounds/
├── dark.png             # Fond sombre
├── light.png            # Fond clair
└── warm.png             # Fond chaud
```

---

## DONNÉES PRODUITS

### Source
`src/data/products.ts` contient les 8 produits avec :
- `id`, `name`, `nameEn`, `nameFr`
- `type`, `typeFr`, `volume`
- `description`, `image`, `imageAlt`
- `featured` (produit héros)

### Utilisation dans Scènes
- **Scène 3** : afficher 3-4 produits seulement
- **Scène 6** : logique de recommandation basée sur quiz
- **Pas de prix affichés** (vente via WhatsApp uniquement)

---

## PROCHAINES ÉTAPES

### Phase 1 : Fondations
1. Créer structure de dossiers (`scenes/`, `animations/`, `interactions/`)
2. Créer hooks utilitaires (`useScrollProgress`, `useParallax`, `useReducedMotion`)
3. Créer composants d'animation de base (`RevealOnScroll`, `ParallaxLayer`)

### Phase 2 : Scènes Core
1. Scène 1 : Entrée Immersive
2. Scène 2 : Manifeste
3. Scène 8 : Conversion Naturelle

### Phase 3 : Scènes Intermédiaires
1. Scène 3 : Découverte Produit
2. Scène 4 : Expérience Sensorielle
3. Scène 7 : Univers NOREA

### Phase 4 : Scènes Avancées
1. Scène 5 : Connexion Humaine
2. Scène 6 : Choix Guidé (quiz interactif)

### Phase 5 : Polish
1. Optimisations performance
2. Tests responsive (4 breakpoints)
3. Tests accessibilité
4. Analytics et tracking

---

## CRITÈRES DE VALIDATION

### Question 1
**"Est-ce que cette homepage pourrait être confondue avec un template premium acheté sur Internet ?"**

✅ Réponse attendue : **NON**

Si OUI → la direction artistique n'est pas assez distinctive.

### Question 2
**"Est-ce qu'un visiteur comprend immédiatement ce que NOREA vend et pourquoi il devrait s'y intéresser ?"**

✅ Réponse attendue : **OUI**

### Question 3
**"Est-ce que chaque section donne envie de continuer à descendre ?"**

✅ Réponse attendue : **OUI**

### Question 4
**"Est-ce que chaque écran pourrait être exporté comme une publicité magazine ?"**

✅ Réponse attendue : **OUI**

---

## NOTES IMPORTANTES

- **Tout le contenu en français**
- **Utiliser uniquement les assets existants** (ne pas créer/remplacer)
- **Respecter la palette NOREA** (définie dans `app/globals.css`)
- **ONE SCREEN = ONE IDEA** : ne jamais surcharger
- **Ne pas ressembler à un catalogue e-commerce**
- **Conversion via WhatsApp uniquement** (pas de panier)
- **Animations respectant `prefers-reduced-motion`**
- **Performance : objectifs Core Web Vitals**

---

**Document créé le** : 31 juillet 2026  
**Version** : 1.0  
**Statut** : Spécification complète — prêt pour implémentation

---

**FIN DU DOCUMENT D'ARCHITECTURE**
