# Shamia Shawarma — prototype de site vitrine

Prototype bilingue (FR/EN) pour **Shamia Shawarma**, inspiré de la structure et de la
dynamique de [boulangerie-bon-matin.vercel.app](https://boulangerie-bon-matin.vercel.app/) :
hero animé en carrousel, classiques en vedette, section "Notre histoire", menu par
catégories, avis clients, carte "Nous trouver" et boutons de commande en ligne.

> **Statut : prototype.** Toutes les photos de plats sont des placeholders animés
> ("Image à venir"), et tous les prix affichés sont à **0,00 $** en attendant les
> montants officiels du propriétaire. Voir *"Remplacer les placeholders"* ci-dessous.

## Stack technique

- [Next.js 16](https://nextjs.org/) (App Router, TypeScript)
- [Tailwind CSS v4](https://tailwindcss.com/) — thème de couleurs dans `src/app/globals.css`
- [Framer Motion](https://www.framer.com/motion/) — transitions et micro-interactions
- [lucide-react](https://lucide.dev/) — icônes
- i18n maison (contexte React, sans dépendance externe) — voir `src/context/LanguageContext.tsx`

## Lancer le projet en local

```bash
npm install
npm run dev
# http://localhost:3000
```

Build de production :

```bash
npm run build
npm run start
```

## Déploiement sur Vercel

1. Poussez ce dépôt sur GitHub/GitLab.
2. Sur vercel.com, "Add New Project" → importez le dépôt.
3. Aucune variable d'environnement n'est requise pour ce prototype. Cliquez "Deploy".

## Structure des composants

```
src/
  app/
    layout.tsx          Layout racine, métadonnées SEO
    page.tsx             Assemble toutes les sections
    globals.css           Palette de couleurs, polices, animations partagées
    sitemap.ts            Sitemap dynamique
  components/
    Header.tsx            Nav sticky, toggle FR/EN, CTA "Commander"
    Hero.tsx               Carrousel plein écran animé
    FeaturedDropdown.tsx   "Nos classiques" (équivalent du menu en vedette du site référence)
    Services.tsx            "Notre histoire" + 3 blocs de services
    Menu.tsx                 Menu complet avec filtres de catégories animés
    MenuItemCard.tsx          Carte plat réutilisable (grille ou ligne)
    Reviews.tsx                 Avis clients + compteurs de note
    WhereWeAre.tsx                Adresse, horaires, carte Google Maps intégrée
    OrderButtons.tsx                Boutons Uber Eats / DoorDash / SkipTheDishes
    Footer.tsx
    LanguageToggle.tsx
    PlaceholderArt.tsx                Visuel de remplacement pour les photos manquantes
  context/
    LanguageContext.tsx                 Provider FR/EN (contexte React)
  lib/
    dictionary.ts                        Textes d'interface bilingues
    data.ts                               Menu, avis, adresse, liens de commande
```

## Palette de couleurs

| Rôle | Couleur | Hex |
|---|---|---|
| Primaire (CTA) | Paprika | `#C1440E` |
| Secondaire | Olive | `#6B7A3A` |
| Accent | Safran | `#E3A73A` |
| Fond clair | Crème | `#FBF1E1` |
| Fond sombre (hero, avis, footer) | Charbon | `#1C1410` |

Palette pensée pour évoquer la broche tournante et les épices (paprika, sumac,
safran) plutôt que la palette crème/terracotta du site de référence, tout en
gardant la même dynamique de sections claires/foncées alternées.

## Contenu temporaire et données réelles déjà intégrées

Comme demandé, le menu temporaire a été rempli à partir des menus publics de
Shamia Shawarma sur Uber Eats / DoorDash / SkipTheDishes (noms de plats et
descriptions adaptés, **prix volontairement mis à 0,00 $**). Ont déjà été
intégrés avec les informations réelles fournies :

- **Adresse** : 4, rue d'Orléans, Orléans, ON (confirmée via SkipTheDishes)
- **Carte Google Maps** intégrée dans la section "Nous trouver"
- **Lien "Obtenir l'itinéraire"** vers la fiche Google Maps officielle
- **Boutons de commande** : liens réels vers Uber Eats, DoorDash et SkipTheDishes

## Remplacer les placeholders (guide en 3 étapes)

1. **Logo et photos** — remplacez le composant `PlaceholderArt` par de vraies
   images (`next/image`) dans `Hero.tsx`, `FeaturedDropdown.tsx`, `MenuItemCard.tsx`
   et `Services.tsx`. Déposez les fichiers dans `public/images/` et mettez à jour
   les chemins.
2. **Prix et menu officiel** — ouvrez `src/lib/data.ts`. Chaque plat a un champ
   `price: 0`. Remplacez-le par le prix réel une fois confirmé, et ajustez/ajoutez
   les catégories dans `menuCategories` si le menu officiel diffère.
3. **Horaires et téléphone** — dans `src/lib/dictionary.ts`, remplacez
   `hoursValue`, et dans `src/lib/data.ts`, remplacez `restaurantInfo.phone`.

## Accessibilité et SEO

- Structure sémantique (`header`, `main`, `section`, `footer`), hiérarchie de
  titres H1 → H4 cohérente.
- Toutes les images placeholder ont un texte alternatif explicite
  ("Image à venir" / "Photo coming soon").
- Contraste vérifié entre le texte crème sur fond charbon et le texte encre sur
  fond crème.
- `prefers-reduced-motion` respecté (animations désactivées automatiquement).
- `robots.txt` et sitemap dynamique inclus.

## Rapport de conformité aux critères d'acceptation

| Critère | Statut |
|---|---|
| Hero animé, menu en vedette, services, avis, carte "Où nous trouvez" | Fait |
| Bilingue FR/EN avec toggle fonctionnel | Fait |
| CTA "Commander en ligne" → scroll vers section de commande + 3 liens externes réels | Fait |
| Tous les plats : image vide + prix 0,00 $ | Fait |
| Palette de couleurs harmonieuse et appétissante, appliquée partout | Fait (voir palette ci-dessus) |
| Responsive (mobile → desktop) et accessible | Fait |
| Composants réutilisables, code TypeScript propre | Fait |
| Build de production sans erreur (`npm run build`) | Testé, sans erreur |

Prochaine étape suggérée : fournir logo, photos des plats et prix officiels pour
finaliser le site avant mise en ligne définitive.
