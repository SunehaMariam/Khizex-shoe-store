export interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;

  image: string;

  images: {
    Black: string;
    White: string;
  };

  description: string;

  colors: string[];

  sizes: number[];

  stock: number;
}