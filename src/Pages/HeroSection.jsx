import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center transition-colors duration-500 bg-gradient-to-r from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col-reverse lg:flex-row items-center gap-20 lg:gap-28">
        {/* LEFT SIDE - 60% WIDTH */}
        <div className="lg:w-[60%] text-center lg:text-left space-y-8 lg:pl-16">
          <motion.h1
            className="text-5xl font-extrabold text-green-600 dark:text-white leading-tight cursor-pointer"
            whileHover={{ scale: 1.03, color: "#2563eb" }} // hover = blue tint
            transition={{ type: "spring", stiffness: 200 }}
          >
            Globall Mobile Import & Export
          </motion.h1>

          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 cursor-pointer"
            whileHover={{ scale: 1.02, color: "#4f46e5" }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            We specialize in importing and exporting the latest smartphones
            worldwide. Our mission is to connect brands and customers through
            trusted global logistics and competitive pricing.
          </motion.p>

          {/* BUTTON - Below text, left aligned */}
          <Link to={"/all-products"}>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-secondary text-white px-10 py-3 rounded-full shadow-xl hover:shadow-2xl transition-transform duration-300"
            >
              All Products
            </motion.button>
          </Link>
        </div>

        {/* RIGHT SIDE - 40% WIDTH */}
        <motion.div
          className="lg:w-[40%] flex flex-col items-center justify-center space-y-8"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          <motion.img
            src="https://i.ibb.co/DmzTnFv/smartphone-nature-concept-1.jpg"
            alt="Mobile phone import export"
            className="w-[80%] rounded-3xl shadow-2xl"
            whileHover={{ rotate: 2, y: -10 }}
            transition={{ type: "spring", stiffness: 150 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
