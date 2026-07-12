import { useEffect, useRef } from "react";
import { useMachine } from "@xstate/react";
import toast from "react-hot-toast";
import { checkoutMachine } from "../../machine/checkoutMachine";
import { useCartWorker } from "../../hooks/useCartWorker";

const Checkout = () => {
  const { cart, clearCart } = useCartWorker();

  const [state, send] = useMachine(checkoutMachine);

  const successShown = useRef(false);

  useEffect(() => {
    if (state.matches("success") && !successShown.current) {
      successShown.current = true;

      clearCart();

      toast.success("🎉 Order placed successfully!", {
        duration: 3000,
      });
    }
  }, [state, clearCart]);

  return (
    <section>
      <div className="mx-auto max-w-4xl px-6 py-10">

        <h1 className="mb-10 text-center text-4xl font-bold">
          Checkout
        </h1>


        {/* Order Summary */}

        <div className="mb-10 rounded-xl border p-6">

          <h2 className="mb-6 text-2xl font-bold">
            Order Summary
          </h2>


          {cart.items.map((item) => (
            <div
              key={`${item.productId}-${item.color}-${item.size}`}
              className="mb-4 flex justify-between"
            >
              <span>
                {item.name} × {item.quantity}
              </span>

              <span>
                ${(item.price * item.quantity).toFixed(2)}
              </span>

            </div>
          ))}


          <hr className="my-4" />


          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${cart.subtotal.toFixed(2)}</span>
          </div>


          <div className="flex justify-between">
            <span>Tax</span>
            <span>${cart.tax.toFixed(2)}</span>
          </div>


          <div className="mt-4 flex justify-between text-2xl font-bold">
            <span>Total</span>
            <span>${cart.total.toFixed(2)}</span>
          </div>

        </div>



        {/* Review */}

        {state.matches("review") && (
          <>
            <p className="mb-6 text-center text-lg">
              Please review your order before placing it.
            </p>

            <button
              onClick={() => send({ type: "PLACE_ORDER" })}
              className="w-full rounded-xl bg-green-600 py-4 text-lg font-bold text-white"
            >
              Place Order
            </button>
          </>
        )}




        {/* Checkout */}

        {state.matches("checkout") && (
          <div>

            <p className="mb-6 text-center text-lg">
              Ready to place your order?
            </p>


            <button
              onClick={() => send({ type: "PLACE_ORDER" })}
              className="w-full rounded-xl bg-green-600 py-4 text-lg font-bold text-white"
            >
              Place Order
            </button>


            <button
              onClick={() => send({ type: "BACK" })}
              className="mt-4 w-full rounded-xl border py-4 text-lg font-bold"
            >
              Back
            </button>

          </div>
        )}




        {/* Processing */}

        {state.matches("processing") && (
          <div className="text-center">

            <div className="mb-5 text-6xl">
              ⏳
            </div>

            <h2 className="text-3xl font-bold">
              Processing Order...
            </h2>

            <p className="mt-3 text-gray-500">
              Please wait...
            </p>

          </div>
        )}




        {/* Success */}

        {state.matches("success") && (
          <div className="text-center">

            <div className="text-7xl">
              ✅
            </div>

            <h2 className="mt-5 text-4xl font-bold text-green-600">
              Order Successful!
            </h2>

            <p className="mt-3 text-gray-500">
              Thank you for shopping with us.
            </p>

          </div>
        )}




        {/* Failed */}

        {state.matches("failed") && (
          <div className="text-center">

            <div className="text-7xl">
              ❌
            </div>

            <h2 className="mt-5 text-4xl font-bold text-red-500">
              Payment Failed
            </h2>


            <button
              onClick={() => send({ type: "RETRY" })}
              className="mt-8 rounded-xl bg-black px-8 py-4 text-white"
            >
              Retry
            </button>

          </div>
        )}

      </div>
    </section>
  );
};

export default Checkout;