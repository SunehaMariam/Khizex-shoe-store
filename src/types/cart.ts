export interface CartItem {
  productId: number;
  name: string;
  price: number;
  color: string;
  size: number;
  quantity: number;
  image: string;
}

export interface CartState {
  items: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
}