import { useNavigate } from "react-router-dom";
import { useCartWorker } from "../../hooks/useCartWorker";
import type { CartItem } from "../../types/cart";

const Cart = () => {
  

  const { cart, sendMessage } = useCartWorker();
  const navigate = useNavigate();

  const removeItem = (
    productId: number,
    color: string,
    size: number
  ) => {
    sendMessage({
      type: "REMOVE_ITEM",
      payload: {
        productId,
        color,
        size,
      },
    });
  };

  const increaseQuantity = (item: CartItem) => {
    sendMessage({
      type: "UPDATE_QUANTITY",
      payload: {
        productId: item.productId,
        color: item.color,
        size: item.size,
        quantity: item.quantity + 1,
      },
    });
  };

  const decreaseQuantity = (item: CartItem) => {
    if (item.quantity > 1) {
      sendMessage({
        type: "UPDATE_QUANTITY",
        payload: {
          productId: item.productId,
          color: item.color,
          size: item.size,
          quantity: item.quantity - 1,
        },
      });
    } else {
      removeItem(item.productId, item.color, item.size);
    }
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="mb-10 text-4xl font-bold">
          Shopping Cart
        </h1>

        {cart.items.length === 0 ? (
          <div className="rounded-xl bg-white p-10 text-center shadow">
            <h2 className="text-2xl font-semibold">
              Your cart is empty
            </h2>

            <p className="mt-3 text-gray-500">
              Add some shoes to continue shopping.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Cart Items */}
            <div className="space-y-5 lg:col-span-2">
              {cart.items.map((item) => (
                <div
                  key={`${item.productId}-${item.color}-${item.size}`}
                  className="flex items-center justify-between rounded-xl bg-white p-5 shadow"
                >
                  <div className="flex items-center gap-5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-24 w-24 rounded-lg object-cover"
                    />

                    <div>
                      <h2 className="text-xl font-bold">
                        {item.name}
                      </h2>

                      <p className="text-gray-500">
                        Color: {item.color}
                      </p>

                      <p className="text-gray-500">
                        Size: {item.size}
                      </p>

                      <div className="mt-3 flex items-center gap-3">
                        <button
                          onClick={() => decreaseQuantity(item)}
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-xl font-bold hover:bg-gray-300"
                        >
                          −
                        </button>

                        <span className="w-8 text-center text-lg font-bold">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQuantity(item)}
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-xl font-bold hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() =>
                          removeItem(
                            item.productId,
                            item.color,
                            item.size
                          )
                        }
                        className="mt-4 rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </h2>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="h-fit rounded-xl bg-white p-6 shadow">
              <h2 className="mb-6 text-2xl font-bold">
                Order Summary
              </h2>

              <div className="mb-3 flex justify-between">
                <span>Subtotal</span>
                <span>${cart.subtotal.toFixed(2)}</span>
              </div>

              <div className="mb-3 flex justify-between">
                <span>Tax</span>
                <span>${cart.tax.toFixed(2)}</span>
              </div>

              <hr className="my-4" />

              <div className="flex justify-between text-2xl font-bold">
                <span>Total</span>
                <span>${cart.total.toFixed(2)}</span>
              </div>

              <button
  onClick={() => {
   
    navigate("/checkout");
  }}
  className="mt-6 w-full rounded-lg bg-black py-3 text-lg font-semibold text-white"
>
Proceed to checkout
</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;