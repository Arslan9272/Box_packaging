import React from "react";
import img1 from "../assets/images/image.png";
import img2 from "../assets/images/image.png";
import img3 from "../assets/images/image.png";
import img4 from "../assets/images/image.png";
import img5 from "../assets/images/image.png";
import img6 from "../assets/images/image.png";
import img7 from "../assets/images/image.png";
import img8 from "../assets/images/image.png";

const Portfolio = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
      The Home of Premier Custom Printing & Expert Packaging Solutions
      </h1>
      <p className="text-base text-gray-700 mb-10 leading-relaxed">
      XXX Packaging is proud to be home to some of the most skilled professionals in the printing and packaging industry. Below is a showcase of packaging boxes thoughtfully designed to meet the specific needs of our valued clients. With the ability to customize boxes in a wide range of sizes, shapes, and styles, we deliver high-quality printed results at the most competitive prices. Whether you need short-run or bulk orders, we’ve got you covered — all while using 100% recyclable materials including Cardboard, Kraft, and Corrugated stock to provide exceptional, eco-friendly packaging solutions.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div key={index} className="w-full overflow-hidden">
            <img
              src={image}
              alt={`Portfolio item ${index + 1}`}
              className="w-full h-64 object-cover rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
