<<<<<<< HEAD
import React from 'react'
import Layout from '../reusableLayouts/layout'
function Home() {
  return (
    <div>
      <Layout>

      <div className="bg-blue-500 text-white p-4">
  This is a Tailwind styled div.
</div>

      </Layout>
    </div>
  )
}

export default Home
=======
import React from 'react';
import Slider from '../components/slider';
import CustomQuoteForm from '../components/quote';
import ProductCategories from '../components/productCategories';
import ParallaxSection from '../components/parallexSection';
import newParallaxBg from '../assets/images/backqa.jpg';
import newParallaxBg1 from '../assets/images/image.png';
import CardSlider from '../components/cardSlider';

const Home = () => {
  const whyChooseUsItems = [
    {
      text: "More than ten years of industry experience, in the industry has a good reputation and influence."
    },
    {
      text: "Own factory, perfect production equipment, mature production technology, professional production team"
    },
    {
      text: "Professional design and development team to ensure high quality original works"
    },
    {
      text: "Perfect pre-sale, sale and after-sales service system, providing timely and considerate service"
    },
    {
      text: "Higher than the industry standard quality inspection, from raw materials to production layer by layer to ensure product quality"
    },
    {
      text: "Rich product line, one-stop supply to meet the different needs of customers."
    }
  ];

  return (
    <>
      <Slider />
      <ProductCategories />
      <ParallaxSection
        backgroundImage={newParallaxBg}
        title="WHY CHOOSE US"
        items={whyChooseUsItems}
      />
      <CustomQuoteForm />


      {/* Text Section */}
      <section className="px-4 py-12 max-w-6xl mx-auto text-gray-800">
        <h2 className="text-3xl font-extrabold mb-4">
          Get Custom Boxes with Logo for Every Product at Wholesale Prices
        </h2>
        <p className="text-lg mb-6">
          OXO Packaging, based in the USA, is a leading manufacturer specializing in a wide range of Custom Boxes crafted in unique and appealing styles. Say goodbye to dull, generic packaging—our team can create personalized subscription boxes in any size and style, tailored to your product and branding needs. With skilled printing experts and graphic designers, we ensure your Custom Boxes with Logo are designed with stunning visuals and built to impress. Best of all, we offer <strong>free design customization</strong>, making the process completely hassle-free for you.
        </p>
        <p className="text-lg mb-6">
          We proudly offer top-notch packaging solutions across the USA. Whether you need Pillow Boxes or Custom Cosmetic Boxes, we provide both plain and printed designs, all customizable with your logo using high-quality printing technologies. Our custom boxes are not only visually appealing but also known for their durability and protective features—thanks to premium raw materials like cardboard, which is both cost-effective and highly protective.
        </p>

        <h3 className="text-2xl font-semibold text-black-700 mt-10 mb-4">
          Custom Product Boxes Add Value to Your Brand
        </h3>
        <p className="text-lg mb-6">
          Many people view packaging as a simple means to contain a product, overlooking the broader impact of Custom Packaging. However, a product’s packaging plays a critical role the moment it's seen—it's how customers recognize the brand, read product details, and form their first impression.
        </p>
        <p className="text-lg">
          Picture two products: one packaged in a plain, unbranded box, and the other in a professionally designed Custom Printed Box. Which one would stand out to customers? Clearly, the latter. This is why Custom Boxes with Logo are essential—they don’t just protect the product, they enhance its perceived value and strengthen your brand identity.
        </p>
      </section>

      <div className="bg-[#fafbec] text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-extrabold mb-4">Get All Your Custom Packaging Needs in One Place</h1>
        <p className="text-lg text-gray-600 mb-10">
        xxx Packaging provides a wide range of custom packaging solutions, along with project support, competitive pricing, and exceptional service you'll appreciate.   </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {[
            { alt: 'No Die & Plate Charges', text: 'NO DIE &\nPLATE CHARGES' },
            { alt: 'Quick Turnaround Time', text: 'QUICK\nTURNAROUND\nTIME' },
            { alt: 'Free Shipping', text: 'FREE\nSHIPPING' },
            { alt: 'Starting from 50 Boxes', text: 'STARTING FROM\n50 BOXES' },
            { alt: 'Customize Size & Style', text: 'CUSTOMIZE SIZE\n& STYLE' },
            { alt: 'Free Graphic Designing', text: 'FREE GRAPHIC\nDESIGNING' },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src="/mnt/data/bed1584c-2318-4edb-b13a-25611d0ffba3.png"
                className="w-16 h-16"
                alt={item.alt}
              />
              <p className="mt-4 font-semibold">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

      <CardSlider />
    </>
  );
};

export default Home;
>>>>>>> ceb395b3cd46edc759e8969f2920ca982e4601b7
