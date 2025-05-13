import apparelBoxData from "../data/industry/apparelBoxData";
// const categoryDataMap = {
//   industry: {
//     "apparel-boxes": apparelBoxData,
//     "auto-parts": null,
//     "bakery-boxes": null,
//     "bottle-boxes": null,
//     "candle-boxes": null,
//     "cbd-boxes": null,
//     "cereal-boxes": null,
//     "chocolate-boxes": null,
//     "christmas-boxes": null,
//     "cigarette-boxes": null,
//     "cosmetic-boxes": null,
//     "electronics-boxes": null,
//     "food-boxes": null, // e.g., foodBoxData
//     "gift-boxes": null,
//     "hardware-boxes": null,
//     "health-boxes": null,
//     "hemp-boxes": null,
//     "jewelry-boxes": null,
//     "phrma-boxes": null,
//     "pizza-boxes": null,
//     "pre-roll-boxes": null,
//     "retail-boxes": null,
//     "shipping-boxes": null,
//     "soap-boxes": null,
//     "sports-boxes": null,
//     "stationery-boxes": null,
//     "vape-boxes": null,
//   },
//   style: {
//     "custom-mylar-bags": apparelBoxData,
//     "custom-tote-bag": null,
//     "display-boxes": null,
//     "gable-boxes": null,
//     "hang-tags": null,
//     "labels-stickers": null,
//     "mailer-boxes": null,
//     "paper-bags": null,
//     "pillow-boxes": null,
//     "spouted-pouches": null,
//     "trays-and-sleeves": null,
//     "tuck-boxes": null,
//     "window-packaging-boxes": null,
//   },
//   material: {
//     "cardboard-boxes": apparelBoxData,
//     "corrugated-boxes": null,
//     "rigid-boxes": null,
//     "kraft-boxes": null,
//     "tin-packaging": null,
//     "poly-bags": null,
//   },
// };

// export default categoryDataMap;

import defaultBackground from "../assets/images/background_3.jpg";

const categoryDataMap = {
  // Industry
  industry: {
    "apparel-boxes": {
      heading: "Attractive custom apparel packaging & garment boxes",
      description:
        "Pair your apparel with one-of-a-kind custom clothing boxes — create stunning packaging for shirts, hats, shoes and more.",
      image: defaultBackground, // or whatever hero image you use
      products: apparelBoxData,
    },
    "auto-parts": {
      heading: "Protective Auto Parts Packaging",
      description: "Strong and durable boxes for automotive components.",
      image: defaultBackground,
      products: null,
    },
    "bakery-boxes": {
      heading: "Fresh Packaging for Freshly Baked Goods",
      description:
        "Showcase your bakery delights with sweet and stylish custom bakery boxes.",
      backgroundImage: defaultBackground,
      products: null,
    },
    "bottle-boxes": {
      heading: "Premium Bottle Packaging",
      description:
        "Secure and showcase your bottles with beautifully crafted custom boxes.",
      backgroundImage: defaultBackground,
      products: null,
    },
    "candle-boxes": {
      heading: "Elegant Packaging for Candles",
      description:
        "Make your candle brand shine with luxurious, custom-designed packaging.",
      backgroundImage: defaultBackground,
      products: null,
    },
    "cbd-boxes": {
      heading: "CBD Packaging that Calms and Converts",
      description:
        "Secure and compliant packaging for your CBD products with a premium look.",
      backgroundImage: defaultBackground,
      products: null,
    },
    "cereal-boxes": {
      heading: "Bright and Engaging Cereal Packaging",
      description:
        "Custom cereal boxes designed to grab attention and reflect your brand.",
      backgroundImage: defaultBackground,
      products: null,
    },
    "chocolate-boxes": {
      heading: "Irresistible Chocolate Packaging",
      description:
        "Delight your customers with luxurious chocolate boxes tailored to your brand.",
      backgroundImage: defaultBackground,
      products: null,
    },
    "christmas-boxes": {
      heading: "Festive Christmas Packaging",
      description:
        "Celebrate the season with joyful and festive custom Christmas boxes.",
      backgroundImage: defaultBackground,
      products: null,
    },
    "cigarette-boxes": {
      heading: "Modern and Compliant Cigarette Packaging",
      description:
        "Keep your brand compliant and stylish with custom cigarette boxes.",
      backgroundImage: defaultBackground,
      products: null,
    },
    "cosmetic-boxes": {
      heading: "Stunning Custom Cosmetic Boxes",
      description:
        "Boost your brand with custom boxes for beauty and skincare products.",
      backgroundImage: defaultBackground,
      products: null,
    },
    "electronics-boxes": {
      heading: "Protective Electronics Packaging",
      description:
        "Secure and display your tech products with style and safety.",
      backgroundImage: defaultBackground,
      products: null,
    },
    "food-boxes": {
      heading: "Fresh and Custom Food Boxes",
      description: "Delicious packaging for your food items that stands out.",
      backgroundImage: defaultBackground,
      products: null,
    },
    "gift-boxes": {
      heading: "Memorable Gift Packaging",
      description:
        "Create the perfect unboxing experience with custom gift boxes.",
      backgroundImage: defaultBackground,
      products: null,
    },
    "hardware-boxes": {
      heading: "Heavy-Duty Hardware Packaging",
      description:
        "Tough, practical, and branded packaging for all kinds of hardware.",
      backgroundImage: defaultBackground,
      products: null,
    },
    "health-boxes": {
      heading: "Health & Wellness Packaging",
      description: "Boost trust and appeal with clean, informative packaging.",
      backgroundImage: defaultBackground,
      products: null,
    },
    "hemp-boxes": {
      heading: "Eco-Friendly Hemp Packaging",
      description: "Sustainable packaging solutions for your hemp products.",
      backgroundImage: defaultBackground,
      products: null,
    },
    "jewelry-boxes": {
      heading: "Elegant Jewelry Boxes",
      description:
        "Highlight the sparkle of your products with luxury custom boxes.",
      backgroundImage: defaultBackground,
      products: null,
    },
    "phrma-boxes": {
      heading: "Pharmaceutical Packaging",
      description:
        "Safe, compliant, and informative packaging for medical products.",
      backgroundImage: defaultBackground,
      products: null,
    },
    "pizza-boxes": {
      heading: "Custom Pizza Boxes",
      description:
        "Serve up your pizza with piping-hot presentation and secure packaging.",
      backgroundImage: defaultBackground,
      products: null,
    },
    "pre-roll-boxes": {
      heading: "Sleek Pre-Roll Boxes",
      description:
        "Store and protect your pre-rolls with style and compliance.",
      backgroundImage: defaultBackground,
      products: null,
    },
    "retail-boxes": {
      heading: "Retail-Ready Packaging",
      description:
        "Boost shelf appeal and product protection with premium boxes.",
      backgroundImage: defaultBackground,
      products: null,
    },
    "shipping-boxes": {
      heading: "Custom Shipping Boxes",
      description:
        "Deliver your products securely with custom branded shipping boxes.",
      backgroundImage: defaultBackground,
      products: null,
    },
    "soap-boxes": {
      heading: "Natural & Attractive Soap Packaging",
      description:
        "Wrap your handmade soaps in boxes that reflect purity and care.",
      backgroundImage: defaultBackground,
      products: null,
    },
    "sports-boxes": {
      heading: "Game-Changing Sports Packaging",
      description:
        "Showcase and protect your sports gear with high-impact packaging.",
      backgroundImage: defaultBackground,
      products: null,
    },
    "stationery-boxes": {
      heading: "Stationery Packaging That Organizes and Impresses",
      description:
        "Neat, functional, and beautiful custom boxes for stationery.",
      backgroundImage: defaultBackground,
      products: null,
    },
    "vape-boxes": {
      heading: "Trendy Vape Packaging",
      description:
        "Vape cartridge and device boxes that combine compliance and cool.",
      backgroundImage: defaultBackground,
      products: null,
    },
  },
  // Style
  style: {
    "custom-mylar-bags": {
      heading: "Secure & Customizable Mylar Bags",
      description: "Perfect for food, supplements, and more.",
      image: defaultBackground,
      products: null,
    },
    "custom-tote-bag": {
      heading: "Stylish Custom Tote Bags",
      description:
        "Reusable, branded tote bags designed for function and fashion.",
      backgroundImage: defaultBackground,
      products: null,
    },
    "display-boxes": {
      heading: "Retail Display Boxes",
      description:
        "Showcase your products prominently on shelves with custom displays.",
      backgroundImage: defaultBackground,
      products: null,
    },
    "gable-boxes": {
      heading: "Practical and Stylish Gable Boxes",
      description:
        "Perfect for takeout, gifts, and more — with a convenient handle.",
      backgroundImage: defaultBackground,
      products: null,
    },
    "hang-tags": {
      heading: "Custom Hang Tags",
      description: "Add branding and info to products with stylish hang tags.",
      backgroundImage: defaultBackground,
      products: null,
    },
    "labels-stickers": {
      heading: "Labels & Stickers",
      description: "Fully customized stickers to boost your product branding.",
      backgroundImage: defaultBackground,
      products: null,
    },
    "mailer-boxes": {
      heading: "Attractive Mailer Boxes",
      description: "Secure and visually appealing mailer packaging.",
      backgroundImage: defaultBackground,
      products: null,
    },
    "paper-bags": {
      heading: "Eco Paper Bags",
      description: "Eco-friendly paper bags with your brand front and center.",
      backgroundImage: defaultBackground,
      products: null,
    },
    "pillow-boxes": {
      heading: "Pillow-Shaped Packaging",
      description: "Chic and elegant pillow boxes for small items and gifts.",
      backgroundImage: defaultBackground,
      products: null,
    },
    "spouted-pouches": {
      heading: "Spouted Pouches",
      description:
        "Flexible and resealable pouches for liquids or semi-liquids.",
      backgroundImage: defaultBackground,
      products: null,
    },
    "trays-and-sleeves": {
      heading: "Trays & Sleeves",
      description: "Minimalist packaging that still makes an impression.",
      backgroundImage: defaultBackground,
      products: null,
    },
    "tuck-boxes": {
      heading: "Tuck Boxes",
      description: "Secure and easy-to-use packaging for a range of items.",
      backgroundImage: defaultBackground,
      products: null,
    },
    "window-packaging-boxes": {
      heading: "Window Boxes",
      description: "Let your product shine through with stylish window boxes.",
      backgroundImage: defaultBackground,
      products: null,
    },
  },

  // Material
  material: {
    "cardboard-boxes": {
      heading: "Eco-Friendly Cardboard Packaging",
      description:
        "Affordable and sustainable cardboard boxes for every industry.",
      image: defaultBackground,
      products: null,
    },
    "corrugated-boxes": {
      heading: "Corrugated Packaging",
      description: "Reinforced boxes for shipping and protection.",
      image: defaultBackground,
      products: null,
    },
    "rigid-boxes": {
      heading: "Premium Rigid Boxes",
      description: "Luxury boxes perfect for high-end retail and gifting.",
      image: defaultBackground,
      products: null,
    },
    "kraft-boxes": {
      heading: "Eco Kraft Boxes",
      description: "Sustainable kraft packaging that's simple and natural.",
      image: defaultBackground,
      products: null,
    },
    "tin-packaging": {
      heading: "Stylish Tin Packaging",
      description: "Durable, reusable tins that make your products stand out.",
      image: defaultBackground,
      products: null,
    },
    "poly-bags": {
      heading: "Versatile Poly Bags",
      description: "Lightweight and flexible bags for a variety of goods.",
      image: defaultBackground,
      products: null,
    },
  },
};

export default categoryDataMap;
