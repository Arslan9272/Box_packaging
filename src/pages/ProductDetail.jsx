import React from "react";
import { useParams, useLocation } from "react-router-dom";
import productData from "../data/productList";
import ImageGallery from "../components/ui/imageGallery";

import CustomQuoteForm from "../components/quote";
const ProductDetail = () => {
  const { productId } = useParams();
  const location = useLocation();
  const decodedTitle = decodeURIComponent(productId);

  // Try to get product from navigation state
  const passedProduct = location.state?.product;

  const product =
    passedProduct || productData.find((p) => p.title === decodedTitle);

  if (!product) {
    console.warn("Product not found for title:", decodedTitle);
    return <div className="p-8 text-red-600">Product not found</div>;
  }

  const initialImageSrc = location.state?.imageSrc || product.imageSrc; // Default image if no state is passed

  // Map the images to the required format
  const images = product.images.map((img, index) => ({
    id: index + 1,
    src: img,
    thumbnail: img,
  }));

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* Left side - Image Gallery */}
        <div className="w-full lg:w-1/2 lg:pr-4">
          <ImageGallery images={images} initialImageSrc={initialImageSrc} />
        </div>

        {/* Right side - Product info and form */}
        <div className="w-full lg:w-1/2">
          <CustomQuoteForm />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
