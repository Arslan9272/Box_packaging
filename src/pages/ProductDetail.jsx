import React from "react";
import { useParams, useLocation } from "react-router-dom";
import productData from "../data/productList";
import ImageGallery from "../components/ui/imageGallery";
import CustomQuoteForm from "../components/quote";

const ProductDetail = () => {
  const { productId } = useParams();
  const location = useLocation();
  const decodedTitle = decodeURIComponent(productId);

  const passedProduct = location.state?.product;
  const product =
    passedProduct || productData.find((p) => p.title === decodedTitle);

  if (!product) {
    console.warn("Product not found for title:", decodedTitle);
    return <div className="p-8 text-red-600">Product not found</div>;
  }

  const initialImageSrc = location.state?.imageSrc || product.imageSrc;

  const images = product.images.map((img, index) => ({
    id: index + 1,
    src: img,
    thumbnail: img,
  }));

  const specs = [
    { label: "Box Style", value: "Cereal Boxes" },
    { label: "Dimension", value: "All Custom Sizes & Shapes" },
    { label: "Quantities", value: "No Minimum Order Required" },
    {
      label: "Stock",
      value:
        "10pt to 28pt (60lb to 400lb) Eco-Friendly Kraft, E-flute Corrugated, Bux Board, Cardstock",
    },
    {
      label: "Printing",
      value: "No Printing, CMYK, CMYK + 1 PMS color, CMYK + 2 PMS colors",
    },
    {
      label: "Finishing",
      value:
        "Gloss Lamination, Matte Lamination, Gloss AQ, Gloss UV, Matte UV, Spot UV, Embossing, Foiling",
    },
    {
      label: "Included Options",
      value: "Die Cutting, Gluing, Scored, Perforation",
    },
    {
      label: "Additional Options",
      value: "Eco-Friendly, Recycled Boxes, Biodegradable",
    },
    {
      label: "Proof",
      value: "Flat View, 3D Mock-up, Physical Sampling (On request)",
    },
    { label: "Turnaround", value: "4 - 8 Business Days, RUSH" },
    { label: "Shipping", value: "FLAT" },
  ];

  return (
    <>
      <div className="max-w-screen-full px-20 py-8">
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Left side - Image Gallery */}
          <div className="w-full lg:w-1/2 lg:pr-4">
            <ImageGallery images={images} initialImageSrc={initialImageSrc} />
          </div>

          {/* Right side - Title, Specs, and Form */}
          <div className="w-full lg:w-1/2 space-y-6">
            {/* Title */}
            <h2 className="text-3xl font-bold text-gray-800">
              {product.title}
            </h2>

            {/* Form */}
            <div className="mt-6">
              <CustomQuoteForm />
            </div>
          </div>
        </div>
        {/* Full-Width Product Specification */}
      </div>
      <div className="w-full bg-gray-50 border-y-4 border-primary py-10 px-6 md:px-16">
        <h3 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
          Product Specifications
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 max-w-7xl mx-auto">
          {specs.map((spec, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-lg font-semibold text-gray-800">
                {spec.label}
              </span>
              <span className="text-gray-700 mt-1">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
