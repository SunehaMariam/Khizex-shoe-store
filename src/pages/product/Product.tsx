import { useState } from "react";

import { products } from "../../data/products";
import { useCartWorker } from "../../hooks/useCartWorker";
import ShoeViewer from "../../components/ShoeViewer";
import airmax from "../../assets/models/airmax.glb";
import { Link, useNavigate, useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
const navigate = useNavigate();
  const product = products.find((item) => item.id === Number(id));

  const [selectedColor, setSelectedColor] = useState(
    product?.colors[0] ?? ""
  );
const { sendMessage } = useCartWorker();
  const [selectedSize, setSelectedSize] = useState<number | null>(
    product?.sizes[0] ?? null
  );

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="flex h-screen items-center justify-center text-3xl font-bold">
        Product Not Found
      </div>
    );
  }

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">

        {/* Back Button */}
        <Link
          to="/"
          className="mb-10 inline-block text-lg font-semibold hover:text-red-500"
        >
          ← Back
        </Link>

        <div className="grid gap-16 lg:grid-cols-2">

          {/* 3D Viewer */}
          <div className="h-[650px] rounded-3xl bg-white p-6 shadow-lg">
            <ShoeViewer
              model={airmax}
              
            />
          </div>

          {/* Product Details */}
          <div>
            <p className="font-semibold uppercase text-red-500">
              {product.brand}
            </p>

            <h1 className="mt-2 text-5xl font-black">
              {product.name}
            </h1>

            <p className="mt-2 text-gray-500">
              {product.category}
            </p>

            <h2 className="mt-6 text-4xl font-bold text-red-500">
              ${product.price}
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              {product.description}
            </p>

            {/* Colors */}
            <div className="mt-10">
              <h3 className="mb-3 text-lg font-semibold">
                Select Color
              </h3>

              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`rounded-full border px-5 py-2 transition ${
                      selectedColor === color
                        ? "bg-black text-white"
                        : "bg-white hover:bg-black hover:text-white"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mt-10">
              <h3 className="mb-3 text-lg font-semibold">
                Select Size
              </h3>

              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`h-12 w-12 rounded-full border transition ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "bg-white hover:bg-black hover:text-white"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-10">
              <h3 className="mb-3 text-lg font-semibold">
                Quantity
              </h3>

              <div className="flex w-40 items-center justify-between rounded-full border bg-white px-4 py-2">
                <button
                  onClick={() =>
                    quantity > 1 && setQuantity(quantity - 1)
                  }
                  className="text-2xl"
                >
                  −
                </button>

                <span className="text-xl font-bold">
                  {quantity}
                </span>

                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-2xl"
                >
                  +
                </button>
              </div>
            </div>

            {/* Stock */}
            <p className="mt-8 font-semibold text-green-600">
              In Stock: {product.stock}
            </p>

            {/* Add to Cart */}
          <button
  onClick={() => {
    sendMessage({
      type: "ADD_ITEM",
      payload: {
        productId: product.id,
        name: product.name,
        price: product.price,
        color: selectedColor,
        size: selectedSize!,
        quantity,
        image:
          product.images[
            selectedColor as keyof typeof product.images
          ],
      },
    });

    navigate("/cart");
  }}
  className="mt-10 w-full rounded-xl bg-red-500 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:bg-red-600 hover:shadow-xl active:scale-95"
>
  🛒 Add To Cart
</button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Product;