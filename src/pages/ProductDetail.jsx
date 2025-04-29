import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { title } = useParams();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Product Details</h1>
      <p className="mt-4 text-lg">You clicked on: <strong>{decodeURIComponent(title)}</strong></p>
      {/* Add more product detail info here */}
    </div>
  );
};

export default ProductDetail;
