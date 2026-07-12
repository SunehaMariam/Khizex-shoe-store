import type { Product } from "../types/product";

import airmaxBlack from "../assets/images/airmax-black.jpg";
import airmaxWhite from "../assets/images/airmax-white.jpg";

import zoomBlack from "../assets/images/zoom-black.jpg";
import zoomWhite from "../assets/images/zoom-white.jpg";

import jordanBlack from "../assets/images/jordan-black.jpg";
import jordanWhite from "../assets/images/jordan-white.jpg";

import rsxBlack from "../assets/images/rsx-black.jpg";
import rsxWhite from "../assets/images/rsx-white.jpg";

export const products: Product[] = [
  {
    id: 1,
    name: "Nike Air Max",
    brand: "Nike",
    category: "Running",
    price: 180,

    image: airmaxBlack,

    images: {
      Black: airmaxBlack,
      White: airmaxWhite,
    },

    description:
      "Premium running shoes designed for comfort, speed, and everyday performance.",

    colors: ["Black", "White"],

    sizes: [39, 40, 41, 42, 43],

    stock: 20,
  },

  {
    id: 2,
    name: "Nike Zoom",
    brand: "Nike",
    category: "Sports",
    price: 220,

    image: zoomBlack,

    images: {
      Black: zoomBlack,
      White: zoomWhite,
    },

    description:
      "Lightweight sports shoes with responsive cushioning for maximum comfort.",

    colors: ["Black", "White"],

    sizes: [40, 41, 42, 43, 44],

    stock: 15,
  },

  {
    id: 3,
    name: "Air Jordan",
    brand: "Jordan",
    category: "Basketball",
    price: 260,

    image: jordanBlack,

    images: {
      Black: jordanBlack,
      White: jordanWhite,
    },

    description:
      "Classic basketball sneakers combining premium materials with iconic style.",

    colors: ["Black", "White"],

    sizes: [40, 41, 42, 43, 44],

    stock: 12,
  },

  {
    id: 4,
    name: "Puma RS-X",
    brand: "Puma",
    category: "Casual",
    price: 170,

    image: rsxBlack,

    images: {
      Black: rsxBlack,
      White: rsxWhite,
    },

    description:
      "Modern casual sneakers with bold styling and all-day comfort.",

    colors: ["Black", "White"],

    sizes: [39, 40, 41, 42, 43],

    stock: 25,
  },
];