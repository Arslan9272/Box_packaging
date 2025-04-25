import React from 'react';
import Layout from '../reusableLayouts/layout';
import Slider from '../components/slider';
import CustomQuoteForm from '../components/quote';
import ProductCategories from '../components/productCategories';
import ParallaxSection from '../components/parallexSection';
import newParallaxBg from '../assets/images/back1.jpeg';
import newParallaxBg1 from '../assets/images/image.png';

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
      <CustomQuoteForm/>
      </>
  );
};

export default Home;