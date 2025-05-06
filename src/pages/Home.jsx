import React from "react";
import Slider from "../components/slider";
import CustomQuoteForm from "../components/quote";
import ProductCategories from "../components/productCategories";
import ParallaxSection from "../components/parallexSection";
import newParallaxBg from "../assets/images/backqa.jpg";
import newParallaxBg1 from "../assets/images/image.png";
import CardSlider from "../components/cardSlider";
import SideImage from "../assets/images/pic.png";
import free from "../assets/images/free.jpg";
const Home = () => {
  const whyChooseUsItems = [
    {
      text: "More than ten years of industry experience, in the industry has a good reputation and influence.",
    },
    {
      text: "Own factory, perfect production equipment, mature production technology, professional production team",
    },
    {
      text: "Professional design and development team to ensure high quality original works",
    },
    {
      text: "Perfect pre-sale, sale and after-sales service system, providing timely and considerate service",
    },
    {
      text: "Higher than the industry standard quality inspection, from raw materials to production layer by layer to ensure product quality",
    },
    {
      text: "Rich product line, one-stop supply to meet the different needs of customers.",
    },
  ];

  return (
    <>
      <Slider />
      <ProductCategories />
      <div className="bg-[#fafbec] text-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-extrabold mb-4">
            Get All Your Custom Packaging Needs in One Place
          </h1>
          <p className="text-lg text-gray-600 mb-10">
            xxx Packaging provides a wide range of custom packaging solutions,
            along with project support, competitive pricing, and exceptional
            service you'll appreciate.Picture two products: one packaged in a
            plain, unbranded box, and the other in a professionally designed
            Custom Printed Box. Which one would stand out to customers? Clearly,
            the latter. This is why Custom Boxes with Logo are essential—they
            don’t just protect the product, they enhance its perceived value and
            strengthen your brand identity.Many people view packaging as a
            simple means to contain a product, overlooking the broader impact of
            Custom Packaging. However, a product’s packaging plays a critical
            role the moment it's seen—it's how customers recognize the brand,
            read product details, and form their first impression.{" "}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              {
                alt: "No Die & Plate Charges",
                text: "NO DIE &\nPLATE CHARGES",
                imageSrc: free,
              },
              {
                alt: "Quick Turnaround Time",
                text: "QUICK\nTURNAROUND\nTIME",
                imageSrc: free,
              },
              {
                alt: "Free Shipping",
                text: "FREE\nSHIPPING",
                imageSrc: free,
              },
              {
                alt: "Starting from 50 Boxes",
                text: "STARTING FROM\n50 BOXES",
                imageSrc: free,
              },
              {
                alt: "Customize Size & Style",
                text: "CUSTOMIZE SIZE\n& STYLE",
                imageSrc: free,
              },
              {
                alt: "Free Graphic Designing",
                text: "FREE GRAPHIC\nDESIGNING",
                imageSrc: free,
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <img src={item.imageSrc} className="w-16 h-16" alt={item.alt} />
                <p className="mt-4 font-semibold">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ParallaxSection
        backgroundImage={newParallaxBg}
        title="WHY CHOOSE US"
        items={whyChooseUsItems}
      />
      <div className="w-full bg-[#f9f9e5] min-h-screen px-6 py-10">
        {/* Flex row layout with 70/30 split */}
        <div className="flex flex-row gap-8 max-w-screen-xl mx-auto ">
          <div className="bg-white p-6 rounded-lg shadow-md w-[70%] space-y-4">
            {/* Form - 70% */}
            <CustomQuoteForm />
          </div>

          {/* Image - 30% */}
          <div className="w-[30%] flex justify-center items-start">
            <img
              src={SideImage}
              alt="Custom Quote"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="max-w-full mx-auto px-4 py-12 text-center">
        {/* Heading and Text */}
        <h1 className="text-4xl font-extrabold mb-4">
          Let’s create a sustainable future together
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Grow your business with eco-friendly alternatives to packaging.
        </p>

        {/* Slider */}
        <div className="overflow-hidden w-full"></div>
        <CardSlider />
      </div>
    </>
  );
};

export default Home;
