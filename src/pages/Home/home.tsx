import { FaArrowRight, FaTruck, FaShieldAlt, FaExchangeAlt, FaHeadset, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import FeaturedProducts from "../../components/common/home/FeaturedProducts"
import heroImage from "../../assets/images/hero.png";
import runningImg from "../../assets/images/runningImg.jpg";
import sneakersImg from "../../assets/images/sneakersImg.jpg";
import formalImg from "../../assets/images/formalImg.jpg";
import bootsImg from "../../assets/images/bootImg.jpg";

const Home = () => {
  return (
    <>
    

      {/* Hero Section */}
      <section className="overflow-hidden bg-gradient-to-r from-gray-100 via-white to-gray-200">
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between px-6 py-16 lg:flex-row">

          {/* Left Content */}
          <div className="max-w-xl">

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 text-lg font-semibold uppercase tracking-[6px] text-red-500"
            >
              New Collection 2026
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, x: -70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 text-5xl font-black leading-tight text-gray-900 md:text-7xl"
            >
              FIND YOUR
              <br />
              <span className="text-red-500">PERFECT</span>
              <br />
              SNEAKERS
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-8 text-lg leading-8 text-gray-600"
            >
              Discover premium sneakers crafted for comfort,
              performance, and everyday style.
              Elevate your walk with the newest KHIZEX collection.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-5"
            >
              <Link
                to="/"
                className="flex items-center gap-3 rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:bg-red-500"
              >
                Shop Now
                <FaArrowRight />
              </Link>

              <button className="rounded-full border-2 border-black px-8 py-4 font-semibold transition hover:bg-black hover:text-white">
                Explore
              </button>
            </motion.div>

          </div>

          {/* Right Image */}
          <div className="relative mt-12 flex justify-center lg:mt-0 lg:w-1/2">

            {/* Red Glow */}
            <div className="absolute h-[420px] w-[420px] rounded-full bg-red-500/20 blur-[90px]" />

            {/* Rotating Circle */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[420px] w-[420px] rounded-full border-2 border-dashed border-red-400/40"
            />

            {/* Floating Shoe */}
            <motion.img
              src={heroImage}
              alt="Hero Shoe"
              className="relative z-10 w-full max-w-xl drop-shadow-[0_50px_50px_rgba(0,0,0,0.35)]"
              animate={{
                y: [0, -20, 0],
                rotate: [-3, 3, -3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.08,
                rotate: 5,
              }}
            />

          </div>

        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-black py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
          {[
            { value: "50K+", label: "Happy Customers" },
            { value: "1200+", label: "Shoe Styles" },
            { value: "180+", label: "Countries Shipped" },
            { value: "4.9★", label: "Average Rating" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="mb-1 text-3xl font-black text-white md:text-4xl">
                {stat.value}
              </p>
              <p className="text-sm uppercase tracking-wider text-gray-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Badges Strip */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-10 md:grid-cols-4">
          {[
            { icon: <FaTruck />, title: "Free Shipping", desc: "On orders over $50" },
            { icon: <FaExchangeAlt />, title: "Easy Returns", desc: "30-day return policy" },
            { icon: <FaShieldAlt />, title: "Secure Payment", desc: "100% protected checkout" },
            { icon: <FaHeadset />, title: "24/7 Support", desc: "Dedicated customer care" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center gap-2 text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-600 text-xl text-white shadow-lg shadow-red-500/30">
                {item.icon}
              </div>
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[4px] text-red-500">
              Browse
            </p>
            <h2 className="text-4xl font-black text-gray-900 md:text-5xl">
              Shop by Category
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { name: "Running", image: runningImg },
              { name: "Sneakers", image: sneakersImg },
              { name: "Formal", image: formalImg },
              { name: "Boots", image: bootsImg },
            ].map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group relative cursor-pointer overflow-hidden rounded-3xl shadow-md transition hover:shadow-2xl"
              >
                {/* Category Image */}
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  {/* Dark gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </div>

                {/* Text content over image */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                  <h3 className="text-xl font-bold text-white">
                    {cat.name}
                  </h3>
                  <p className="mt-1 text-sm text-white/0 transition group-hover:text-white/90">
                    Shop Collection →
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Testimonials */}
      <section id="testimonials" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[4px] text-red-500">
              Testimonials
            </p>
            <h2 className="text-4xl font-black text-gray-900 md:text-5xl">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Sarah M.",
                review:
                  "Best sneakers I've owned. Comfortable from the first wear and the delivery was super fast.",
              },
              {
                name: "James T.",
                review:
                  "Quality is unmatched. I've bought three pairs already and every one has held up perfectly.",
              },
              {
                name: "Aisha K.",
                review:
                  "Stylish, comfortable, and affordable. KHIZEX is now my go-to shoe store, hands down.",
              },
            ].map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-xl"
              >
                <div className="mb-4 flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, idx) => (
                    <FaStar key={idx} />
                  ))}
                </div>
                <p className="mb-6 leading-7 text-gray-600">"{t.review}"</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 font-bold text-white">
                    {t.name.charAt(0)}
                  </div>
                  <span className="font-semibold text-gray-900">{t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="relative overflow-hidden bg-black py-24">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-red-500/20 blur-[100px]" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
          <div className="max-w-xl text-center md:text-left">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[4px] text-red-400">
              Limited Time Offer
            </p>
            <h2 className="mb-4 text-4xl font-black text-white md:text-5xl">
              Get 20% Off Your First Order
            </h2>
            <p className="text-gray-400">
              Sign up for our newsletter and step into savings on your next pair.
            </p>
          </div>

          <form className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-full border border-gray-700 bg-white/10 px-6 py-4 text-white placeholder-gray-400 backdrop-blur focus:border-red-500 focus:outline-none"
            />
            <button
              type="submit"
              className="whitespace-nowrap rounded-full bg-red-500 px-8 py-4 font-semibold text-white shadow-lg shadow-red-500/30 transition hover:scale-105 hover:bg-red-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;