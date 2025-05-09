import React, { useState } from "react";
import { motion } from "framer-motion";
import { cardAnimations } from "../config/motion";
import box from "../assets/images/home/bg_box.png";
import paperBox from "../assets/images/home/bg_paperbox.png";
import paperbag from "../assets/images/home/bg_paperbag.png";
import giftbox from "../assets/images/home/bg_giftbox.png";
import anticollision from "../assets/images/home/anticollisionbox.png";
import custombox from "../assets/images//home/custome.png";

const categories = [
  {
    image: box,
    title: "CARTON",
    items: [
      "Anticollision paper pallet",
      "Folded color box",
      "Handheld color box",
    ],
  },
  {
    image: paperBox,
    title: "PAPER BOX",
    items: ["Hanging paper box", "Bottom cross paper box", "Visible paper box"],
  },
  {
    image: paperbag,
    title: "PAPER BAG",
    items: ["Color paper bag", "Kraft paper bag"],
  },
  {
    image: giftbox,
    title: "GIFT BOX",
    items: [
      "Drawer-style mounting box",
      "Split-lid mounting box",
      "Multi-layer display box",
    ],
  },
  {
    image: anticollision,
    title: "ANTICOLLISION PRODUCT",
    items: [
      "Anticollision paperboard",
      "Anticollision paper corners",
      "Anticollision paper pallet",
    ],
  },
  {
    image: custombox,
    title: "CUSTOMIZED SERVICES",
    items: ["Special process customization", "Small batch customer orders"],
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
          Every product is unique—and its packaging should reflect that. Whether
          you need durable protection, premium presentation, or eco-friendly
          appeal, our custom boxes are tailored to meet every design, shape, and
          industry requirement.
        </p>
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
              className="relative flex items-start bg-white/60 backdrop-blur-lg p-4 shadow-xl border border-gray-200 rounded-xl h-auto"
              variants={animation}
              initial="0%"
              animate="100%"
              transition={{ duration: 0.4 }}
            >
              {/* Image on the left with some part overflowing top */}
              <div className="relative flex-shrink-0 w-24 h-24 mr-4">
                <div className="absolute top-[-55px] object-cover left-0 w-28 h-28">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Text content on the right */}
              <div className="flex-1">
                <h3 className="text-md font-bold text-gray-700 mb-2">
                  {category.title}
                </h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  {category.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCategories;
