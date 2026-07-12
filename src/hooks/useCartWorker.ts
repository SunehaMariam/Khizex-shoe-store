import { useEffect, useState } from "react";
import cartWorker from "../workers/cartWorkerInstance";
import type { CartState } from "../types/cart";
import type {
  WorkerRequest,
} from "../workers/worker.types";

export function useCartWorker() {
  const [cart, setCart] = useState<CartState>({
    items: [],
    subtotal: 0,
    tax: 0,
    total: 0,
  });

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      setCart(event.data.payload);
    };

    cartWorker.addEventListener("message", handleMessage);

    cartWorker.postMessage({
      type: "GET_CART",
    });

    return () => {
      cartWorker.removeEventListener("message", handleMessage);
    };
  }, []);

  const sendMessage = (message: WorkerRequest) => {
    cartWorker.postMessage(message);
  };

  const clearCart = () => {
    sendMessage({
      type: "CLEAR_CART",
    });
  };

  return {
    cart,
    sendMessage,
    clearCart,
  };
}