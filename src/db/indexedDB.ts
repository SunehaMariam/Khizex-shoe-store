import { openDB } from "idb";
import type { CartState } from "../types/cart";

const DB_NAME = "khizex-shoe-store";
const STORE_NAME = "cart";
const DB_VERSION = 1;

export const dbPromise = openDB(DB_NAME, DB_VERSION, {
  upgrade(db) {
    if (!db.objectStoreNames.contains(STORE_NAME)) {
      db.createObjectStore(STORE_NAME);
    }
  },
});

export async function saveCart(cart: CartState) {
  const db = await dbPromise;

  await db.put(STORE_NAME, cart, "current-cart");
}

export async function loadCart(): Promise<CartState | null> {
  const db = await dbPromise;

  return (await db.get(STORE_NAME, "current-cart")) ?? null;
}

export async function clearCart() {
  const db = await dbPromise;

  await db.delete(STORE_NAME, "current-cart");
}