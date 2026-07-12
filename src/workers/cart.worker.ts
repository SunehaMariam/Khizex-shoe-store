import type { CartItem, CartState } from "../types/cart";
import { saveCart, loadCart } from "../db/indexedDB";
import type {
  WorkerResponse,
} from "./worker.types";

let cart: CartState = {
  items: [],
  subtotal: 0,
  tax: 0,
  total: 0,
};

function calculateTotals() {
  cart.subtotal = cart.items.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  cart.tax = Number((cart.subtotal * 0.1).toFixed(2));
  cart.total = Number((cart.subtotal + cart.tax).toFixed(2));
}

function sendCart() {
  const response: WorkerResponse = {
    type: "CART_UPDATED",
    payload: cart,
  };

  self.postMessage(response);
}

self.onmessage = async (event: MessageEvent) => {
  const message = event.data;

  switch (message.type) {

    case "ADD_ITEM": {
      const existing = cart.items.find(
        (item) =>
          item.productId === message.payload.productId &&
          item.color === message.payload.color &&
          item.size === message.payload.size
      );

      if (existing) {
        existing.quantity += message.payload.quantity;
      } else {
        const newItem: CartItem = {
          productId: message.payload.productId,
          name: message.payload.name,
          price: message.payload.price,
          color: message.payload.color,
          size: message.payload.size,
          quantity: message.payload.quantity,
          image: message.payload.image,
        };

        cart.items.push(newItem);
      }

      calculateTotals();

      await saveCart(cart);

      sendCart();
      break;
    }


    case "REMOVE_ITEM": {

      cart.items = cart.items.filter(
        (item) =>
          !(
            item.productId === message.payload.productId &&
            item.color === message.payload.color &&
            item.size === message.payload.size
          )
      );

      calculateTotals();

      await saveCart(cart);

      sendCart();

      break;
    }


    case "UPDATE_QUANTITY": {

      const item = cart.items.find(
        (item) =>
          item.productId === message.payload.productId &&
          item.color === message.payload.color &&
          item.size === message.payload.size
      );


      if (item) {

        if (message.payload.quantity <= 0) {

          cart.items = cart.items.filter(
            (i) =>
              !(
                i.productId === item.productId &&
                i.color === item.color &&
                i.size === item.size
              )
          );

        } else {

          item.quantity = message.payload.quantity;

        }
      }


      calculateTotals();

      await saveCart(cart);

      sendCart();

      break;
    }


    case "GET_CART": {

      const savedCart = await loadCart();

      if (savedCart) {
        cart = savedCart;
      }

      calculateTotals();

      sendCart();

      break;
    }


    // CLEAR CART AFTER SUCCESSFUL ORDER
    case "CLEAR_CART": {

      cart = {
        items: [],
        subtotal: 0,
        tax: 0,
        total: 0,
      };


      await saveCart(cart);


      sendCart();


      break;
    }


    default:
      break;
  }
};

export {};