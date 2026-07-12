import { Link } from "react-router-dom";
import type { Product } from "../../../types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-72 w-full object-contain transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <p className="text-sm text-gray-500">{product.brand}</p>

        <h3 className="mt-2 text-2xl font-bold">
          {product.name}
        </h3>

        <p className="mt-2 text-gray-500">
          {product.category}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-2xl font-bold text-red-500">
            ${product.price}
          </span>

         <Link
  to={`/product/${product.id}`}
  className="rounded-full bg-black px-5 py-2 text-white hover:bg-red-500"
>
  View
</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;