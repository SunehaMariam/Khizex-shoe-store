import type { CartState } from "../types/cart";

export interface AddItemPayload {
  productId: number;
  name: string;
  price: number;

  color: string;
  size: number;

  quantity: number;

  image: string;
}

export interface RemoveItemPayload {
  productId: number;
  color: string;
  size: number;
}

export interface UpdateQuantityPayload {
  productId: number;
  color: string;
  size: number;
  quantity: number;
}

export type WorkerRequest =
  | {
      type: "ADD_ITEM";
      payload: AddItemPayload;
    }
  | {
      type: "REMOVE_ITEM";
      payload: RemoveItemPayload;
    }
  | {
      type: "UPDATE_QUANTITY";
      payload: UpdateQuantityPayload;
    }
  | {
      type: "GET_CART";
    }
  | { type: "CLEAR_CART" };

export interface WorkerResponse {
  type: "CART_UPDATED";
  payload: CartState;
}