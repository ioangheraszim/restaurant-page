import ramenPic from "../assets/ramen.jpg";
import chefPic from "../assets/chef.jpg";
import winePic from "../assets/wine.jpg";
import cPic1 from "../assets/carousel-1.jpg";
import cPic2 from "../assets/carousel-2.jpg";
import grid1 from "../assets/grid-1.webp";
import grid2 from "../assets/grid-2.webp";
import grid3 from "../assets/grid-3.webp";
import grid4 from "../assets/grid-4.webp";
import grid5 from "../assets/grid-5.webp";
import grid6 from "../assets/grid-6.webp";

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
      {
        dish: "7 spiced pepita seeds – orange, garlic, capsicum, pork (GF)",
        price: 5,
      },
      {
        dish: "Tasmanian salmon – ginger, kaffir, finger lime, grape (GF)",
        price: 5,
      },
      { dish: "Chicken liver pate – spiced bread, crackling", price: 8 },
      {
        dish: "Scallop cannelloni – nettle, bower spinach, katsuobushi",
        price: 9,
      },
      {
        dish: "Kangaroo tartare – green olive, miso, flax cracker (GF)",
        price: 12,
      },
    ],
  },
  {
    title: "MAIN",
    subtitle: "LARGER SINGLE-SERVE DISHES",
    items: [
      { dish: "Arcadia Lamb - cucumber, lemon, honey, sake (GF)", price: 4.5 },
      {
        dish: "Roasted duck - pickled turnip, black garlic, slow-cooked grains",
        price: 5,
      },
      {
        dish: "Smoked Abalone - pearl oyster, heart of palm, black vinegar (GF)",
        price: 5,
      },
      {
        dish: "Pickled Quail - walnut crackling, cured seaweed, star anise",
        price: 5,
      },
      {
        dish: "Confit Salmon - shiitake, grains, horseradish emulsion",
        price: 8,
      },
      {
        dish: "Slow Cooked Cod - eggplant, hazelnut, juniper berry (GF)",
        price: 9,
      },
      {
        dish: "Pickled Mussels– nettle, bower spinach, katsuobushi",
        price: 12,
      },
    ],
  },
  {
    title: "DESSERT",
    subtitle: "SMALL SERVINGS, IDEAL FOR SHARING",
    items: [
      {
        dish: "Lychee tart – filtered créme fràiche, blueberries (V)",
        price: 12,
      },
      { dish: "Caramel cheesecake – apple leaves, ginger (V)", price: 5 },
      {
        dish: "Sweet potato ice cream – shaved pear, cacao (V) (GF)",
        price: 5,
      },
      {
        dish: "Pickled Quail - walnut crackling, cured seaweed, star anise",
        price: 5,
      },
      { dish: "Chocolate friand – quince paste, ginger root (V)", price: 8 },
    ],
  },
];

export const aboutData = [
  {
    title: "WHAT WE'RE ABOUT",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus.",
    ],
    image: chefPic,
    alt: "picture of a chef cooking",
  },
  {
    title: "MADE FROM SCRATCH",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ],
    image: ramenPic,
    alt: "picture of a ramen",
  },
];

export const functionsData = [
  {
    title: "PRIVATE DINING HALL",
    subtitle: "WEDDINGS & LARGER GROUPS",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.<br /><br />
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    buttonText: "Enquire",
    imageSrc: cPic1,
    imageAlt: "image of food",
  },
  {
    title: "PRIVATE DINING HALL",
    subtitle: "WEDDINGS & LARGER GROUPS",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.<br /><br />
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    buttonText: "Enquire",
    imageSrc: cPic2,
    imageAlt: "image of food",
  },
];

export const newsItems = [
  {
    date: "July 31, 2025",
    title: "July's Featured Provider: Grange Winery",
    imageSrc: grid1,
  },
  {
    date: "April 19, 2023",
    title: "We've Launched Our New Website",
    imageSrc: grid2,
  },
  {
    date: "May 14, 2021",
    title: "May's Featured Provider: Parnell Sea Food",
    imageSrc: grid3,
  },
  {
    date: "March 17, 2023",
    title: "New Dessert Menu Coming Soon",
    imageSrc: grid4,
  },
  {
    date: "July 31, 2022",
    title: "Introducing our new Sous Chef: Gordon Ramsey",
    imageSrc: grid5,
  },
  {
    date: "August 20, 2024",
    title: "New casual dining and function space",
    imageSrc: grid6,
  },
];
