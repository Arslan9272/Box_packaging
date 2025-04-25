// src/components/AboutUs.js

import React from "react";
import ProductCategories from "../components/productCategories";

const AboutUs = () => {
  return (
    <div>
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Us</h1>
      <p className="text-lg text-gray-700 mb-6">
        xxx Packaging is a forward-thinking packaging company committed to
        providing a comprehensive range of custom packaging solutions designed
        to elevate your brand and enhance your business.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        With a strong industry presence and a monthly recurring revenue of $500K,
        we specialize in creating timeless, impactful packaging that highlights your
        products, reflects your brand identity, and captivates your audience.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        Our team of experienced professionals is passionate about solving packaging
        challenges through strategic, customer-focused solutions. We offer a vast array
        of customization options, allowing businesses to craft packaging perfectly
        tailored to their product dimensions and brand goals.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        Whether you require custom shapes and sizes or high-end printing options,
        we’ve got you covered. Choose from offset, screen, digital, rotogravure, and
        other advanced printing techniques to give your packaging a sophisticated,
        attention-grabbing appearance.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        To further enhance the look and feel of your packaging, we provide premium
        finishes such as gloss, matte, holographic, and foil—ensuring a distinctive,
        polished presentation that sets your products apart.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        At xxx Packaging, we prioritize your needs through a customer-centric approach,
        consistently delivering high-quality, fully customized packaging solutions that
        make a lasting impression.
      </p>
    </section>
    {/* Add the ProductCategories component here */}
    <ProductCategories />
    </div>
  );
};

export default AboutUs;
