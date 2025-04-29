import React, { useState } from "react";
import { motion } from "framer-motion";
import { cardAnimations } from "../config.js/motion"; // Adjust the path if needed

const categories = [
  {
    image: "/images/carton.png",
    title: "CARTON",
    items: [
      "Anticollision paper pallet",
      "Folded color box",
      "Aircraft box",
      "Handheld color box",
    ],
  },
  {
    image: "/images/paper-box.png",
    title: "PAPER BOX",
    items: [
      "Hanging paper box",
      "Bottom cross paper box",
      "Visible paper box",
      "Double Insert paper Box",
    ],
  },
  {
    image: "/images/paper-bag.png",
    title: "PAPER BAG",
    items: ["Color paper bag", "Kraft paper bag"],
  },
  {
    image: "/images/gift-box.png",
    title: "GIFT BOX",
    items: [
      "Drawer precision mounting box",
      "Split precision mounting box",
      "Multi layer display precision box",
    ],
  },
  {
    image: "/images/anticollision.png",
    title: "ANTICOLLISION PRODUCT",
    items: [
      "Anticollision paperboard",
      "Anticollision paper corners",
      "Anticollision transit box",
      "Anticollision paper pallet",
    ],
  },
  {
    image: "/images/custom.png",
    title: "CUSTOMIZED SERVICES",
    items: [
      "Special process customization",
      "Small batch customer orders",
    ],
  },
];

const ProductCategories = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="bg-gradient-to-br from-gray-100 via-white to-purple-50 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Custom Packaging Solutions for Every Product and Purpose
        </h2>
        <p className="text-gray-700 mb-3">
          Every product is unique—and its packaging should reflect that.
          Whether you need durable protection, premium presentation, or
          eco-friendly appeal, our custom boxes are tailored to meet every
          design, shape, and industry requirement.
        </p>
        {/* <p className="text-gray-700">
          From minimalist kraft options to upscale rigid boxes and standout
          die-cut designs, we create packaging that does more than hold your
          product—it protects, enhances, and amplifies your brand.
        </p> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {categories.map((category, index) => {
          const animation =
            hoveredIndex === index
              ? cardAnimations.flipCorners
              : cardAnimations.flipCornersBack;

          return (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative flex items-start bg-white/60 backdrop-blur-lg p-6 shadow-xl border border-gray-200 w-full h-[200px]"
              variants={animation}
              initial="0%"
              animate="100%"
              transition={{ duration: 0.4 }}
            >
              <div className="absolute top-[-25px] left-6">
                <div className="w-24 h-24 bg-white rounded-2xl shadow-md flex items-center justify-center border-2 border-gray-100">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </div>

              <div className="pl-32">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {category.title}
                </h3>
                <div className="text-gray-700 space-y-1 text-sm">
                  {category.items.map((item, idx) => (
                    <div key={idx}>{item}</div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCategories;
