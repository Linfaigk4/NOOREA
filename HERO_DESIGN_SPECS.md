# HERO DESIGN — SPÉCIFICATIONS VISUELLES COMPLÈTES

## 📐 LAYOUT DESKTOP (≥768px)

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                                                                                 │
│  [LOGO NOOREA]   ACCUEIL  COLLECTION  NOTRE HISTOIRE  ENGAGEMENTS  JOURNAL     │
│                                                       [WhatsApp] CONTACTEZ ☰    │
│                                                                                 │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│    ZONE GAUCHE (60-65%)               │        ZONE DROITE (35-40%)            │
│                                       │                                         │
│        ╭─────────────╮                │                                         │
│       │   ●●●●●●●    │                │                                         │
│       │  ● NOOREA ●  │                │          [IMAGE PRODUITS]              │
│       │   ●●●●●●●    │                │                                         │
│        ╰─────────────╯                │          Sérum + Pots                  │
│     [Logo circulaire doré]            │                                         │
│                                       │          Lumière chaude                 │
│                                       │                                         │
│         N O O R E A                   │          Overlay fondu                  │
│                                       │                                         │
│   « Révélez la lumière qui vit       │                                         │
│      en votre peau. »                 │                                         │
│                                       │                                         │
│   [💬 PARLER] [EXPLORER] [DÉCOUVRIR]  │                                         │
│                                       │                                         │
│   Des rituels de soin pensés pour    │                                         │
│   nourrir, révéler et célébrer...    │                                         │
│                                       │                                         │
│                ↓                      │                                         │
│         [scroll indicator]            │                                         │
└─────────────────────────────────────────────────────────────────────────────────┘

FOND : Gradient noir chaud → taupe → brun sombre
```

---

## 📱 LAYOUT MOBILE (<768px)

```
┌─────────────────────────────┐
│  [LOGO]               ☰     │
├─────────────────────────────┤
│                             │
│      ╭───────────╮          │
│     │  ● LOGO ●  │          │
│      ╰───────────╯          │
│                             │
│       N O O R E A           │
│                             │
│  « Révélez la lumière       │
│     qui vit en votre        │
│        peau. »              │
│                             │
│  ┌─────────────────────┐   │
│  │  💬 PARLER À NOOREA │   │
│  └─────────────────────┘   │
│                             │
│  ┌─────────────────────┐   │
│  │ EXPLORER COLLECTION │   │
│  └─────────────────────┘   │
│                             │
│  ┌─────────────────────┐   │
│  │  DÉCOUVRIR NOOREA   │   │
│  └─────────────────────┘   │
│                             │
│  Des rituels de soin...     │
│                             │
│           ↓                 │
└─────────────────────────────┘

IMAGE PRODUITS : Masquée sur mobile
BOUTONS : Empilés verticalement
TEXTES : Centrés
```

---

## 🎨 DIMENSIONS EXACTES

### Logo Circulaire
| Écran      | Diamètre      | Logo intérieur |
|------------|---------------|----------------|
| Mobile     | 200px × 200px | 140px × 140px  |
| Tablet     | 240px × 240px | 170px × 170px  |
| Desktop    | 280px × 280px | 200px × 200px  |
| Desktop XL | 320px × 320px | 200px × 200px  |

### Titre NOOREA
- Mobile : `text-5xl` → ~48px
- Tablet : `text-6xl` → ~60px
- Desktop : `text-7xl` → ~72px
- Desktop XL : `text-8xl` → ~96px

### Accroche
- Mobile : `text-xl` → ~20px
- Tablet : `text-2xl` → ~24px
- Desktop : `text-3xl` → ~30px
- Desktop XL : `text-4xl` → ~36px

### Boutons
- Hauteur : `py-3.5` → ~48px (mobile: `py-3` → ~44px)
- Padding horizontal : `px-6 à px-8`
- Border radius Pilule : `rounded-full`
- Border radius Standard : `0px` (rectangulaire)

---

## 🎨 COULEURS & DÉGRADÉS

### Logo Circulaire

**Bordure dorée (linear-gradient 135deg) :**
```css
#8B5A00 → #C9952E → #F5D77A → #C9952E → #A66B00
```

**Halo lumineux (box-shadow) :**
```css
0 0 30px rgba(212, 175, 55, 0.25),
0 0 80px rgba(212, 175, 55, 0.15),
inset 0 0 60px rgba(212, 175, 55, 0.1)
```

**Fond radial (background) :**
```css
radial-gradient(
  circle,
  rgba(212, 175, 55, 0.15) 0%,
  rgba(212, 175, 55, 0.05) 45%,
  transparent 75%
)
```

**Fond intérieur :** `#faf8f6` (ivoire/crème)

---

### Boutons

**Bouton 1 — PARLER À NOOREA**
```css
background: linear-gradient(135deg, 
  #C9952E 0%, 
  #F5D77A 50%, 
  #C9952E 100%
);
box-shadow: 0 4px 20px rgba(212, 175, 55, 0.3);
color: #1a1a1a;
```

**Bouton 2 — EXPLORER LA COLLECTION**
```css
background: linear-gradient(135deg, 
  #8B5A00 0%, 
  #C9952E 50%, 
  #F5D77A 100%
);
box-shadow: 0 4px 20px rgba(212, 175, 55, 0.25);
color: #faf8f6;
```

**Bouton 3 — DÉCOUVRIR NOOREA**
```css
background: transparent;
border: 2px solid #C9952E;
color: #F5D77A;
```

**Bouton 3 — Hover**
```css
background: rgba(212, 175, 55, 0.15);
```

---

### Textes

| Élément          | Couleur                      | Hex/RGBA              |
|------------------|------------------------------|-----------------------|
| Titre NOOREA     | Blanc cassé/Ivoire           | `#faf8f6`             |
| Accroche         | Ivoire chaud                 | `#f5f3f0`             |
| Texte descriptif | Blanc transparent 65%        | `rgba(255,255,255,0.65)` |
| Nav active       | Or clair                     | `#F5D77A` ou `#C9952E` |
| Nav standard     | Blanc/Charcoal               | `#fff` / `#2b2b2b`    |

---

### Fond Hero

**Gradient principal :**
```css
background: radial-gradient(
  ellipse at 30% 40%,
  rgba(43, 43, 43, 0.8) 0%,     /* Taupe */
  rgba(26, 15, 10, 1) 50%,      /* Espresso */
  rgba(26, 26, 26, 1) 100%      /* Noir */
);
```

**Lumière dorée ambiante (top-left) :**
```css
background: radial-gradient(
  circle at center,
  rgba(212, 175, 143, 0.25) 0%,
  rgba(212, 175, 143, 0.1) 40%,
  transparent 70%
);
filter: blur(120px);
opacity: 0.12;
```

**Vignette naturelle :**
```css
background: radial-gradient(
  ellipse at center,
  transparent 0%,
  rgba(26, 15, 10, 0.4) 75%,
  rgba(26, 15, 10, 0.7) 100%
);
```

---

### Overlay Image Produits

```css
background: linear-gradient(
  90deg,
  rgba(26, 15, 10, 0.85) 0%,
  rgba(26, 15, 10, 0.45) 35%,
  rgba(26, 15, 10, 0.15) 60%,
  transparent 80%
);
```

**Glow produits :**
```css
background: radial-gradient(
  circle,
  rgba(212, 175, 143, 0.5) 0%,
  transparent 65%
);
filter: blur(90px);
opacity: 0.3;
```

---

## 🎬 ANIMATIONS

### Durées
- Logo : `0.4s`
- Titre : `0.4s` (delay: `0.2s`)
- Accroche : `0.4s` (delay: `0.3s`)
- Boutons : `0.4s` (delay: `0.4s`)
- Texte : `0.4s` (delay: `0.5s`)

### Easing
```typescript
ease: [0.16, 1, 0.3, 1]  // Ease out expo
```

### Particules lumineuses
```typescript
// Particule 1
animate: {
  opacity: [0, 0.6, 0],
  scale: [0.8, 1.2, 0.8],
}
duration: 3s
repeat: Infinity

// Particule 2
animate: {
  opacity: [0, 0.5, 0],
  scale: [0.8, 1.1, 0.8],
}
duration: 3.5s
repeat: Infinity
```

### Scroll Indicator
```typescript
animate: {
  y: [0, 8, 0]
}
duration: 2s
repeat: Infinity
easing: easeInOut
```

---

## 🔤 TYPOGRAPHIE

### Font Family
- **Principale :** `var(--font-geist-sans)` (Geist Sans)
- **Poids :** `font-light` (300)
- **Tracking :** `tracking-wider` + `letter-spacing: 0.05em`

### Navigation
- **Transform :** `uppercase`
- **Tracking :** `letter-spacing: 0.1em`
- **Taille :** `text-sm` (~14px)
- **Poids :** `font-medium` (500)

---

## 📏 SPACING

### Marges verticales (Desktop)
```
Logo ↓ 48-64px (mb-8 md:mb-12)
Titre ↓ 32-48px (mb-6 md:mb-8)
Accroche ↓ 48-64px (mb-10 md:mb-12)
Boutons ↓ 32-40px (mb-8 md:mb-10)
```

### Padding conteneur
- Mobile : `px-6` (24px)
- Desktop : `px-12` (48px)
- Desktop XL : `px-16` (64px)

### Gap boutons
- Mobile : `gap-3` (12px) — vertical
- Desktop : `gap-4` (16px) — horizontal

---

## 🖼️ ASSETS

### Logo
- **Path :** `/NOREA-ASSETS/brand/logo.png`
- **Alt :** "NOOREA"
- **Priority :** `true` (preload)

### Logo Navbar (dark)
- **Path :** `/NOREA-ASSETS/brand/logo-white.png`

### Image Produits
- **Path :** `/NOREA-ASSETS/hero/hero-03.jfif`
- **Alt :** "Collection NOOREA — Sérum et soins premium"
- **Priority :** `true`
- **Quality :** `90`
- **Sizes :** `(max-width: 1024px) 40vw, 35vw`

---

## 🔗 LIENS

### WhatsApp
```typescript
createWhatsAppUrl()
// → "https://wa.me/2250703397700?text=..."
```

### Navigation
- `/` — ACCUEIL
- `/collection` — COLLECTION
- `#story-section` — NOTRE HISTOIRE
- `#engagements` — ENGAGEMENTS
- `#journal` — JOURNAL

---

## ♿ ACCESSIBILITÉ

### Attributs ARIA
```html
<a aria-label="NOOREA - Accueil" ... >
<a aria-label="Contacter NOOREA sur WhatsApp" ... >
<button aria-label="Ouvrir le menu" ... >
```

### Focus States
```css
focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-[#C9952E]
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  animation-duration: 0.01ms !important;
  transition-duration: 0.01ms !important;
}
```

---

## 🎯 Z-INDEX LAYERS

```
Navbar:              z-[100]
FloatingWhatsApp:    z-[100]
MenuOverlay:         z-[110]
HeroScrollIndicator: z-10
HeroIdentity:        z-1 (default)
HeroProduct:         z-0 (default)
HeroBackground:      z-0 (base)
```

---

## 📊 PERFORMANCE

### Image Optimization
- Format : Next.js Image Component
- Preload : Hero assets
- Lazy : Non (priority=true)
- Quality : 90

### Animation Performance
- GPU-accelerated : `opacity`, `transform`
- Pas de : `width`, `height`, `left`, `right`
- Hardware acceleration : `will-change: transform`

### Bundle Size
- Framer Motion : Tree-shaking enabled
- Lucide Icons : Individual imports
- No external CSS libraries

---

## ✅ CHECKLIST VALIDATION

### Visuel
- [ ] Logo circulaire visible en haut à gauche
- [ ] Bordure dorée avec dégradé
- [ ] Halo lumineux visible
- [ ] Particules animées discrètes
- [ ] Titre NOOREA très grand
- [ ] Hiérarchie titre > accroche
- [ ] 3 boutons alignés horizontalement (desktop)
- [ ] Vraies icônes (pas emojis)
- [ ] Image produits à droite (35-40%)
- [ ] Overlay fondu visible
- [ ] Fond noir chaud avec profondeur
- [ ] Navigation complète visible

### Fonctionnel
- [ ] Lien WhatsApp fonctionnel
- [ ] Bouton EXPLORER → /collection
- [ ] Bouton DÉCOUVRIR → scroll #story-section
- [ ] Navigation cliquable
- [ ] Menu hamburger ouvrant
- [ ] Scroll indicator animé

### Responsive
- [ ] Logo adapté mobile (200px)
- [ ] Textes centrés mobile
- [ ] Boutons verticaux mobile
- [ ] Navigation hamburger mobile
- [ ] Image produits masquée mobile
- [ ] Spacing adapté tablette

### Performance
- [ ] Build réussi sans erreur
- [ ] TypeScript valide
- [ ] Images optimisées
- [ ] Animations fluides 60fps
- [ ] Pas de layout shift

---

**Design System : NOOREA Hero v2.0**  
**Date : 24 août 2026**  
**Status : Production Ready ✅**
