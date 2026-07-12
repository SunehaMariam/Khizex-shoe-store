import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useCartWorker } from "../../hooks/useCartWorker";

const Navbar = () => {
  const { cart } = useCartWorker();
  const navigate = useNavigate();
  const location = useLocation();

  const cartCount = cart.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const scrollToTestimonials = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === "/") {
      // already on home — just scroll
      document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" });
    } else {
      // navigate to home first, then scroll after it renders
      navigate("/");
      setTimeout(() => {
        document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-600">
          NEXSTEP
        </h1>

        <div className="flex gap-6">
          <NavLink to="/">Home</NavLink>

          <NavLink to="/cart">Cart</NavLink>

          <NavLink to="/checkout">Checkout</NavLink>

          <a href="/#testimonials" onClick={scrollToTestimonials} className="cursor-pointer">
            Testimonials
          </a>
        </div>
        <div className="relative">
  🛒

  {cartCount > 0 && (
    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
      {cartCount}
    </span>
  )}
</div>
      </div>
    </nav>
  );
};

export default Navbar;