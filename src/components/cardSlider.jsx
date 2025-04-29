import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./ui/card";

import cbdGift from "../assets/images/image.png";
import christmasBox from "../assets/images/image.png";
import medicineBox from "../assets/images/image.png";
import soapSleeve from "../assets/images/image.png";
import kraftSoapBox from "../assets/images/image.png";
import kraftSoapBox1 from "../assets/images/image.png";

const CardSlider = () => {
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);
  const navigate = useNavigate();

  const cards = [
    { imageSrc: cbdGift, altText: "CBD Gift Boxes", title: "CBD Gift Boxes" },
    { imageSrc: christmasBox, altText: "Christmas Favor Boxes", title: "Christmas Favor Boxes" },
    { imageSrc: medicineBox, altText: "Medicine Boxes", title: "Medicine Boxes" },
    { imageSrc: soapSleeve, altText: "Soap Sleeve Packaging", title: "Soap Sleeve Packaging" },
    { imageSrc: kraftSoapBox, altText: "Kraft Soap Boxes", title: "Kraft Soap Boxes" },
    { imageSrc: kraftSoapBox1, altText: "Kraft Soap Boxes", title: "Kraft Soap Boxes" },
  ];

  const handleCardClick = (title) => {
    navigate(`/product/${encodeURIComponent(title)}`);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollStep = slider.offsetWidth / 5;
    let currentIndex = 0;

    intervalRef.current = setInterval(() => {
      currentIndex++;
      if (currentIndex > cards.length) {
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
  <div
    ref={sliderRef}
    className="flex overflow-x-hidden whitespace-nowrap"
  >
    {[...cards, ...cards].map((card, index) => (
      <Card
        key={index}
        {...card}
        onClick={() => handleCardClick(card.title)}
      />
    ))}
  </div>
</section>


  );
};

export default CardSlider;
