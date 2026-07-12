import ProductCard from "./ProductCard";
import { products } from "../../../data/products";

const FeaturedProducts = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold">
          Featured Collection
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-500">
          Explore our premium sneaker collection designed for comfort,
          performance, and style.
        </p>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;