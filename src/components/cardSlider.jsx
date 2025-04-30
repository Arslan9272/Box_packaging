import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./ui/card";
import productData from "../data/productList"; // adjust path as needed

const CardSlider = () => {
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);
  const navigate = useNavigate();

  const handleCardClick = (title, imageSrc) => {
    navigate(`/product/${encodeURIComponent(title)}`, {
      state: { imageSrc },
    });
  };
  

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollStep = slider.offsetWidth / 5;
    let currentIndex = 0;

    intervalRef.current = setInterval(() => {
      currentIndex++;
      if (currentIndex > productData.length) {
        slider.scrollTo({ left: 0, behavior: "auto" });
        currentIndex = 1;
      }

      slider.scrollTo({
        left: scrollStep * currentIndex,
        behavior: "smooth",
      });
    }, 2500);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="w-full overflow-hidden relative pb-12">
      <div ref={sliderRef} className="flex overflow-x-hidden whitespace-nowrap">
        {[...productData, ...productData].map((product, index) => (
          <Card
            key={index}
            imageSrc={product.imageSrc}
            altText={product.title}
            title={product.title}
            onClick={() => handleCardClick(product.title, product.imageSrc)}
          />
        ))}
      </div>
    </section>
  );
};

export default CardSlider;
