import ramenPic from "../assets/ramen.jpg";
import chefPic from "../assets/chef.jpg";
import winePic from "../assets/wine.jpg";

export const cardsData = [
  {
    src: ramenPic,
    alt: "photo of ramen",
    title: "Inspired by the Region",
    description:
      "Rich in heritage and abundant in local produce, Miller is a gathering place celebrating Mornington’s finest.",
    buttonText: "View Menu",
  },
  {
    src: chefPic,
    alt: "photo of sushi",
    title: "Award Winning Kitchen",
    description:
      "A collaboration of esteemed international chefs Andrew, Celia Miller and our many local providers.",
    buttonText: "Learn More",
  },
  {
    src: winePic,
    alt: "photo of wine",
    title: "The Perfect Venue",
    description:
      "Make your next event one to remember with our elegant indoor-outdoor cocktail and dining spaces.",
    buttonText: "Book Now",
  },
];

export const menuData = [
  {
    title: "FIRST",
    subtitle: "SMALL PIECES, IDEAL FOR SHARING",
    items: [
      { dish: "Oyster – shaved scallop, sea herbs, lemon (GF)", price: 4.5 },
      { dish: "Mill house bread – smoked cultured butter (V)", price: 5 },
      { dish: "7 spiced pepita seeds – orange, garlic, capsicum, pork (GF)", price: 5 },
      { dish: "Tasmanian salmon – ginger, kaffir, finger lime, grape (GF)", price: 5 },
      { dish: "Chicken liver pate – spiced bread, crackling", price: 8 },
      { dish: "Scallop cannelloni – nettle, bower spinach, katsuobushi", price: 9 },
      { dish: "Kangaroo tartare – green olive, miso, flax cracker (GF)", price: 12 },
    ],
  },
  {
    title: "MAIN",
    subtitle: "LARGER SINGLE-SERVE DISHES",
    items: [
      { dish: "Arcadia Lamb - cucumber, lemon, honey, sake (GF)", price: 4.5 },
      { dish: "Roasted duck - pickled turnip, black garlic, slow-cooked grains", price: 5 },
      { dish: "Smoked Abalone - pearl oyster, heart of palm, black vinegar (GF)", price: 5 },
      { dish: "Pickled Quail - walnut crackling, cured seaweed, star anise", price: 5 },
      { dish: "Confit Salmon - shiitake, grains, horseradish emulsion", price: 8 },
      { dish: "Slow Cooked Cod - eggplant, hazelnut, juniper berry (GF)", price: 9 },
      { dish: "Pickled Mussels– nettle, bower spinach, katsuobushi", price: 12 },
    ],
  },
  {
    title: "DESSERT",
    subtitle: "SMALL SERVINGS, IDEAL FOR SHARING",
    items: [
      { dish: "Lychee tart – filtered créme fràiche, blueberries (V)", price: 12 },
      { dish: "Caramel cheesecake – apple leaves, ginger (V)", price: 5 },
      { dish: "Sweet potato ice cream – shaved pear, cacao (V) (GF)", price: 5 },
      { dish: "Pickled Quail - walnut crackling, cured seaweed, star anise", price: 5 },
      { dish: "Chocolate friand – quince paste, ginger root (V)", price: 8 },
    ],
  },
];

