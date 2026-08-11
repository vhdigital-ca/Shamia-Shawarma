export type Bi = { fr: string; en: string };

export interface MenuItem {
  id: string;
  name: Bi;
  description: Bi;
  price: number; // placeholder, always 0 until the owner confirms real pricing
  badge?: "bestseller" | "new";
}

export interface MenuCategory {
  id: string;
  label: Bi;
  items: MenuItem[];
}

// Item names & short descriptions are adapted from Shamia Shawarma's public
// delivery-platform listings (Skip The Dishes / DoorDash) so the prototype
// reads like the real menu. Prices are intentionally zeroed out — see README.
export const menuCategories: MenuCategory[] = [
  {
    id: "entrees",
    label: { fr: "Entrées", en: "Appetizers" },
    items: [
      {
        id: "lentil-soup",
        name: { fr: "Soupe aux lentilles", en: "Lentil Soup" },
        description: {
          fr: "Une soupe réconfortante et onctueuse aux lentilles, carottes et oignons.",
          en: "A comforting, creamy soup made with lentils, carrots and onion.",
        },
        price: 0,
      },
      {
        id: "hummus",
        name: { fr: "Houmous à l'ail", en: "Garlic Hummus" },
        description: {
          fr: "Notre tartinade de pois chiches maison, onctueuse et bien relevée à l'ail.",
          en: "Our house-made chickpea spread, smooth and generously seasoned with garlic.",
        },
        price: 0,
      },
      {
        id: "garlic-potatoes",
        name: { fr: "Patates à l'ail", en: "Garlic Potatoes" },
        description: {
          fr: "Pommes de terre rôties bien croustillantes, assaisonnées à l'ail maison.",
          en: "Crispy roasted potatoes tossed in our house garlic seasoning.",
        },
        price: 0,
      },
      {
        id: "falafel",
        name: { fr: "Falafels (5 mcx)", en: "Falafel (5 pcs)" },
        description: {
          fr: "Boules de pois chiches épicées, croustillantes dehors, moelleuses dedans, servies avec houmous et sauce à l'ail.",
          en: "Spiced chickpea balls, crisp outside and soft inside, served with hummus and garlic sauce.",
        },
        price: 0,
      },
      {
        id: "kebbeh",
        name: { fr: "Kebbeh au bœuf", en: "Beef Kebbeh" },
        description: {
          fr: "Croquette traditionnelle frite, farcie de bœuf haché épicé et d'oignons.",
          en: "A traditional fried croquette stuffed with spiced ground beef and onion.",
        },
        price: 0,
      },
      {
        id: "chicken-wings",
        name: { fr: "Ailes de poulet (8 mcx)", en: "Chicken Wings (8 pcs)" },
        description: {
          fr: "Grandes ailes de poulet, sauce au choix.",
          en: "Large chicken wings tossed in your choice of sauce.",
        },
        price: 0,
      },
    ],
  },
  {
    id: "salades",
    label: { fr: "Salades", en: "Salads" },
    items: [
      {
        id: "fattoush",
        name: { fr: "Salade fattouche", en: "Fattoush Salad" },
        description: {
          fr: "Laitue, tomates, concombres et poivrons, croustillants de pita et sumac.",
          en: "Lettuce, tomato, cucumber and pepper tossed with crispy pita chips and sumac.",
        },
        price: 0,
      },
      {
        id: "tabbouleh",
        name: { fr: "Taboulé", en: "Tabbouleh" },
        description: {
          fr: "Boulgour, persil frais, tomate et oignon, relevé au citron et à l'huile d'olive.",
          en: "Bulgur, fresh parsley, tomato and onion, brightened with lemon and olive oil.",
        },
        price: 0,
      },
      {
        id: "shawarma-salad",
        name: { fr: "Salade au shawarma", en: "Shawarma Salad" },
        description: {
          fr: "Notre salade maison garnie de tranches de shawarma grillé, poulet ou bœuf.",
          en: "Our house salad topped with sliced grilled shawarma, chicken or beef.",
        },
        price: 0,
      },
    ],
  },
  {
    id: "sandwiches",
    label: { fr: "Sandwichs", en: "Sandwiches" },
    items: [
      {
        id: "chicken-shawarma-sandwich",
        name: { fr: "Sandwich shawarma poulet", en: "Chicken Shawarma Sandwich" },
        description: {
          fr: "Poulet mariné grillé à la broche, légumes frais, sauce à l'ail maison et cornichons, dans un pain pita chaud.",
          en: "Spit-grilled marinated chicken, fresh vegetables, house garlic sauce and pickles, in warm pita.",
        },
        price: 0,
        badge: "bestseller",
      },
      {
        id: "beef-shawarma-sandwich",
        name: { fr: "Sandwich shawarma bœuf", en: "Beef Shawarma Sandwich" },
        description: {
          fr: "Bœuf grillé à la broche, légumes frais, sauce à l'ail et cornichons, dans un pain pita chaud.",
          en: "Spit-grilled beef, fresh vegetables, garlic sauce and pickles, in warm pita.",
        },
        price: 0,
        badge: "bestseller",
      },
      {
        id: "mixed-sandwich",
        name: { fr: "Sandwich mixte", en: "Mixed Sandwich" },
        description: {
          fr: "Poulet et bœuf réunis, taboulé, houmous et sauce à l'ail maison, pour ceux qui n'arrivent pas à choisir.",
          en: "Chicken and beef together, tabbouleh, hummus and house garlic sauce — for anyone who can't decide.",
        },
        price: 0,
      },
      {
        id: "falafel-sandwich",
        name: { fr: "Sandwich falafel", en: "Falafel Sandwich" },
        description: {
          fr: "Falafels maison, houmous, tahini et sauce grenade, servis dans un pain pita moelleux.",
          en: "House falafel, hummus, tahini and pomegranate sauce, tucked into soft pita.",
        },
        price: 0,
      },
      {
        id: "shish-taouk-sandwich",
        name: { fr: "Sandwich shish taouk", en: "Shish Taouk Sandwich" },
        description: {
          fr: "Morceaux de poulet mariné grillé, salade de chou et mayonnaise.",
          en: "Grilled marinated chicken pieces, coleslaw and mayo.",
        },
        price: 0,
      },
    ],
  },
  {
    id: "plats",
    label: { fr: "Plats", en: "Plates" },
    items: [
      {
        id: "chicken-plate",
        name: { fr: "Plat shawarma poulet", en: "Chicken Shawarma Plate" },
        description: {
          fr: "Poulet grillé à la broche, riz, salade, patates à l'ail, houmous, sauce à l'ail, cornichons et pita.",
          en: "Spit-grilled chicken, rice, salad, garlic potatoes, hummus, garlic sauce, pickles and pita.",
        },
        price: 0,
        badge: "bestseller",
      },
      {
        id: "beef-plate",
        name: { fr: "Plat shawarma bœuf", en: "Beef Shawarma Plate" },
        description: {
          fr: "Bœuf grillé à la broche, riz, salade, patates à l'ail, houmous, sauce à l'ail, cornichons et pita.",
          en: "Spit-grilled beef, rice, salad, garlic potatoes, hummus, garlic sauce, pickles and pita.",
        },
        price: 0,
      },
      {
        id: "mixed-plate",
        name: { fr: "Plat mixte (poulet et bœuf)", en: "Mixed Plate (Chicken & Beef)" },
        description: {
          fr: "Le meilleur des deux mondes : poulet et bœuf grillés à la broche, riz, salade et fixings maison.",
          en: "Best of both worlds — spit-grilled chicken and beef, rice, salad and house fixings.",
        },
        price: 0,
      },
      {
        id: "shish-kabab-plate",
        name: { fr: "Plat de kabab", en: "Kabab Plate" },
        description: {
          fr: "Deux brochettes de bœuf grillées, riz, salade, patates à l'ail, houmous et pita.",
          en: "Two grilled beef skewers, rice, salad, garlic potatoes, hummus and pita.",
        },
        price: 0,
      },
    ],
  },
  {
    id: "familial",
    label: { fr: "Familial", en: "Family" },
    items: [
      {
        id: "family-platter-chicken",
        name: { fr: "Assiette familiale — poulet", en: "Family Platter — Chicken" },
        description: {
          fr: "Poulet grillé à la broche, riz, salade, patates à l'ail, houmous, sauce à l'ail et pitas — pour toute la tablée.",
          en: "Spit-grilled chicken, rice, salad, garlic potatoes, hummus, garlic sauce and pitas — feeds the whole table.",
        },
        price: 0,
        badge: "bestseller",
      },
      {
        id: "mixed-grill-family",
        name: { fr: "Grillades mixtes familiales", en: "Mixed Grill Family Platter" },
        description: {
          fr: "Brochettes de shish taouk et de kabab, riz, frites, houmous, salade et pita — pour 5 à 6 personnes.",
          en: "Shish taouk and beef kabab skewers, rice, fries, hummus, salad and pita — serves 5–6.",
        },
        price: 0,
        badge: "new",
      },
      {
        id: "party-platter",
        name: { fr: "Plateau de fête", en: "Party Platter" },
        description: {
          fr: "Sandwichs shawarma poulet et bœuf tranchés, disposés sur un lit de frites avec sauce supplémentaire.",
          en: "Sliced chicken and beef shawarma sandwiches, arranged over fries with extra sauce.",
        },
        price: 0,
      },
    ],
  },
  {
    id: "boissons",
    label: { fr: "Boissons", en: "Beverages" },
    items: [
      {
        id: "soft-drink-can",
        name: { fr: "Boisson gazeuse (canette)", en: "Pop (can)" },
        description: { fr: "355 ml, au choix.", en: "355 ml, your choice." },
        price: 0,
      },
      {
        id: "juice",
        name: { fr: "Jus", en: "Juice" },
        description: { fr: "Bouteille de jus au choix.", en: "Bottled juice, your choice." },
        price: 0,
      },
      {
        id: "water",
        name: { fr: "Eau", en: "Water" },
        description: { fr: "Bouteille d'eau.", en: "Bottled water." },
        price: 0,
      },
      {
        id: "baklava",
        name: { fr: "Baklava", en: "Baklava" },
        description: {
          fr: "Pâtisserie feuilletée aux noix et sirop, pour finir en douceur.",
          en: "Flaky pastry layered with nuts and syrup — a sweet way to finish.",
        },
        price: 0,
      },
    ],
  },
];

export const featuredIds = [
  "family-platter-chicken",
  "chicken-plate",
  "chicken-shawarma-sandwich",
  "beef-shawarma-sandwich",
];

export const featuredItems: MenuItem[] = featuredIds
  .map((id) => menuCategories.flatMap((c) => c.items).find((i) => i.id === id))
  .filter((i): i is MenuItem => Boolean(i));

export interface Review {
  id: string;
  quote: Bi;
  author: string;
  source: Bi;
  initial: string;
}

// Paraphrased, in our own words, from public reviews left on Shamia
// Shawarma's DoorDash listing — never quoted verbatim.
export const reviews: Review[] = [
  {
    id: "r1",
    quote: {
      fr: "Portions généreuses, sauces savoureuses, et ouvert tard contrairement à bien d'autres shawarmas du coin — un client qui revient sans hésiter.",
      en: "Generous portions and tasty sauces, open later than most other local shawarma spots — a repeat customer through and through.",
    },
    author: "Pasha Y.",
    source: { fr: "Avis DoorDash", en: "DoorDash review" },
    initial: "P",
  },
  {
    id: "r2",
    quote: {
      fr: "Le plat mixte bœuf et poulet a conquis un client épuisé après le travail : portions généreuses, livraison rapide et tout était encore frais à l'arrivée.",
      en: "The mixed beef and chicken plate won over a customer at the end of a long day — huge portions, fast delivery, and everything still tasted fresh.",
    },
    author: "Diane G.",
    source: { fr: "Avis DoorDash", en: "DoorDash review" },
    initial: "D",
  },
  {
    id: "r3",
    quote: {
      fr: "Le poulet et bœuf shawarma est devenu son préféré à Gatineau, grâce à une viande bien grillée et une sauce particulièrement réussie.",
      en: "The chicken and beef shawarma became a new local favourite, thanks to well-charred meat and a sauce that stood out.",
    },
    author: "Sophie V.",
    source: { fr: "Avis DoorDash", en: "DoorDash review" },
    initial: "S",
  },
  {
    id: "r4",
    quote: {
      fr: "Pour le prix, les portions sont copieuses et relativement santé — trois commandes plus tard, toujours aucune déception.",
      en: "For the price, portions are generous and reasonably healthy — three orders in, still nothing to complain about.",
    },
    author: "Raphael B.",
    source: { fr: "Avis DoorDash", en: "DoorDash review" },
    initial: "R",
  },
  {
    id: "r5",
    quote: {
      fr: "Les samosas et le kebbeh se sont démarqués comme de vrais coups de cœur, avec un potentiel évident sur le reste du menu.",
      en: "The samosas and kebbeh stood out as clear highlights, with plenty of promise across the rest of the menu.",
    },
    author: "Marilou L.",
    source: { fr: "Avis DoorDash", en: "DoorDash review" },
    initial: "M",
  },
];

export const ratingSummary = {
  average: 4.1,
  count: "500+",
};

export const restaurantInfo = {
  name: "Shamia Shawarma",
  addressLine: "4, rue d'Orléans, Orléans, ON",
  mapEmbedSrc:
    "https://www.google.com/maps?q=4+Rue+d%27Orl%C3%A9ans%2C+Orl%C3%A9ans%2C+ON&output=embed",
  directionsUrl:
    "https://www.google.ca/maps/place/Shamia+Shawarma/@45.481168,-75.70356,17z/data=!4m6!3m5!1s0x4cce1b69d215d357:0x461bdffb3640a773!8m2!3d45.4811643!4d-75.7009851!16s%2Fg%2F11c2jw3r97",
  googleReviewsUrl:
    "https://www.google.ca/maps/place/Shamia+Shawarma/@45.481168,-75.70356,17z/data=!4m6!3m5!1s0x4cce1b69d215d357:0x461bdffb3640a773!8m2!3d45.4811643!4d-75.7009851!16s%2Fg%2F11c2jw3r97",
  phone: null as string | null,
};

export const orderLinks = {
  uberEats:
    "https://www.ubereats.com/ca/store/shamia-shawarma/klD47-WxQD2GSQTuca50-g?diningMode=PICKUP",
  doorDash:
    "https://www.doordash.com/store/shamia-shawarma-gatineau-22978884/12700935/?pickup=true",
  skipTheDishes:
    "https://www.skipthedishes.com/fr/shamia-shawarma-rue-d-orleans?serviceType=collection",
};
