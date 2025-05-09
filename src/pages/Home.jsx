import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Slider from "../components/slider";
import CustomQuoteForm from "../components/quote";
import ProductCategories from "../components/productCategories";
import ParallaxSection from "../components/parallexSection";
import newParallaxBg from "../assets/images/1.jpg";
import bgImage from "../assets/images/slider/slider_img4.jpg";
// import newParallaxBg1 from "../assets/images/image.png";
// import CardSlider from "../components/cardSlider";
import SideImage from "../assets/images/side_image.jpg";
import free from "../assets/images/free.jpg";
import home1 from "../assets/images/home/home1.jpg";
import home2 from "../assets/images/home/home2.jpg";
import home3 from "../assets/images/home/home3.jpg";
import home4 from "../assets/images/home/home4.jpg";
const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // ensure DOM is rendered
      }
    }
  }, [location.hash]);

  const packagingData = [
    {
      title: "Personalized unboxing experience",
      description:
        "Interested in elevating your unboxing journey? Our proficient engineers and designers are ready to partner with you in developing the ultimate personalized shipping experience. Let's work together to achieve greatness!",
      image: home1,
      button: "Browse packaging",
    },
    {
      title: "Luxury clothing gift boxes",
      description:
        "Ensuring your packaging is a reflection of the quality of your clothing products is an integral component of making an impact in the apparel market. Choose from hand-crafted luxury and premium packaging options built to let you achieve the look and feel of your brand.",
      image: home2,
    },
    {
      title: "Eco-friendly clothing packaging",
      description:
        "Put your sustainable fashion products with eco-friendly packaging for clothing to market your brand's green value with every purchase. A multitude of sustainable packaging styles help further support industry leaders paving the way to a more sustainable world.",
      image: home3,
    },
    {
      title: "Smart clothing shipping solutions",
      description:
        "Get all the shipping solutions you need to manage your apparel efficiently. All our packaging is custom tailored and right-sized to meet your specifications. Combine them with optimized label strategies at your station or clothing line to keep your shipping costs low.",
      image: home4,
    },
  ];

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
  // const PackagingSection = ({ title, description, image, button, reverse }) => {
  //   return (
  //     <div
  //       className={`flex flex-col md:flex-row ${
  //         reverse ? "md:flex-row-reverse" : ""
  //       } items-center gap-8 mb-16`}
  //     >
  //       <div className="w-full md:w-1/4">
  //         <img
  //           src={image}
  //           alt={title}
  //           className="w-full h-auto object-cover rounded-md shadow-lg"
  //         />
  //       </div>

  //       <div className="w-full md:w-1/2">
  //         <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
  //         <p className="text-gray-700 mb-4">{description}</p>
  //         {button && (
  //           <button className="mt-2 px-5 py-2 bg-primary-dark text-white rounded hover:bg-primary DEFAULT transition">
  //             {button}
  //           </button>
  //         )}
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <div key={location.hash}>
      {/* <Slider /> */}

      <div className="relative h-[90vh] w-full overflow-hidden">
        {/* Background Image with Blur */}
        <img
          src={bgImage}
          alt="Warehouse Background"
          className="absolute inset-0 h-full w-full object-cover filter brightness-75 blur-sm"
        />

        {/* Overlay Text */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="text-center px-4">
            <h2 className="text-10xl md:text-8xl font-light text-white">
              From Die Cut to Delivery.
            </h2>
            <h1 className="text-10xl md:text-8xl font-bold text-white mt-2">
              The Full Package.
            </h1>
          </div>
        </div>
      </div>

      <ProductCategories />
      <div className="bg-primary-light text-gray-800">
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

      <div id="custom-quote-section" className="bg-primary-light w-full py-10 ">
        {/* className="scroll-mt-20 w-full bg-[#f9f9e5] min-h-screen px-6 py-10" */}
        {/* Flex row layout with 70/30 split */}
        <div className="flex flex-row gap-8 max-w-screen-xl mx-auto ">
          <div className=" p-6 w-[70%] ">
            {/* Form - 70% */}
            <CustomQuoteForm />
          </div>

          {/* Image - 30% */}
          <div className="w-[30%]  h-[50%] flex justify-center items-start">
            <img
              src={SideImage}
              alt="Custom Quote"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      <section className=" pt-12 px-4">
        <div className="max-w-7xl mx-auto ">
          <h1 className="text-4xl font-extrabold mb-4 text-center">
            Let’s create a sustainable future together
          </h1>
          <p className="text-lg text-gray-600 mb-10 text-center">
            Explore our comprehensive range of packaging solutions, providing
            shipping alternatives for all your e-commerce needs. No matter if
            you're dealing with small, large, flexible, or delicate items, we
            have an option.
          </p>

          {packagingData.map((section, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-20 mb-16 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="w-full md:w-[70%]">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-auto object-cover rounded-md shadow-md"
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {section.title}
                </h3>
                <p className="text-gray-700 mb-4">{section.description}</p>
                {section.buttonText && (
                  <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
                    {section.buttonText}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Slider */}
      <div className="overflow-hidden w-full">
        <h1 className="text-4xl font-extrabold mb-16 text-center">
          Sustainability. Be part of the solution
        </h1>
        {/* <CardSlider /> */}
      </div>
    </div>
  );
};

export default Home;
