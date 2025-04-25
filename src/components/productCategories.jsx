import React, { useState } from "react";
import { motion } from "framer-motion";
import { cardAnimations } from "../config.js/motion"; // Adjust the path to where your motion.js file is located

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
              className={`relative flex items-start bg-white/60 backdrop-blur-lg p-6 shadow-xl border border-gray-200 w-full h-[200px]`} // Reduced height to 200px
              variants={animation} // Apply the animation variants here
              initial="0%" // Initial state of the animation
              animate="100%" // Apply the animation state
              transition={{ duration: 0.4 }} // Add transition to smooth out the animation
            >
              {/* Floating Image */}
              <div className="absolute top-[-25px] left-6"> {/* Adjusted the image position to slightly hang out */}
                <div className="w-24 h-24 bg-white rounded-2xl shadow-md flex items-center justify-center border-2 border-gray-100">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-20 h-20 object-contain" // Adjusted size of the image
                  />
                </div>
              </div>

              {/* Text Section */}
              <div className="pl-32"> {/* Added more padding to the left for spacing */}
                <h3 className="text-xl font-bold text-gray-800 mb-4"> {/* Increased margin-bottom */}
                  {category.title}
                </h3>
                <div className="text-gray-700 space-y-1 text-sm"> {/* Smaller text size for items */}
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
