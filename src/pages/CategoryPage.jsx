import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import ProductCard from "../components/ui/productCard";
import categoryDataMap from "../config/categoryDataMap";
import CustomQuoteForm from "../components/quote";
import SideImage from "../assets/images/pic.png";

const CategoryPage = () => {
  const { type, category } = useParams();
  const navigate = useNavigate();

  // Get category data from the map
  const categoryData = categoryDataMap[type]?.[category];

  const products = categoryData?.products || [];
  const backgroundImage = categoryData?.image || categoryData?.backgroundImage;

  const formatCategoryName = (name) => {
    return name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div>
      <section
        className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-12 min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="text-white max-w-xl pl-6 md:pl-16 py-6">
          <h1 className="text-4xl md:text-4xl font-bold leading-tight drop-shadow-xl mb-5">
            {categoryData?.heading || "Category Title"}
          </h1>
          <p className="text-yellow-100 text-lg md:text-xl mb-8 leading-relaxed">
            {categoryData?.description || "Category description goes here."}
          </p>
          <Link
            to="/custom-quote"
            className="inline-block bg-white text-accent font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Submit a Custom Quote
          </Link>
        </div>
      </section>

      <h2 className="text-2xl font-bold mt-12 mb-4 text-center">
        {formatCategoryName(category)}
      </h2>

      {products.length > 0 ? (
        <div className="px-8 md:px-24 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item, idx) => (
            <ProductCard
              key={idx}
              title={item.title}
              description={item.description}
              imageSrc={item.imageSrc}
              onClick={() =>
                navigate(`/product/${encodeURIComponent(item.title)}`, {
                  state: { product: item },
                })
              }
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">
          No products found for this category.
        </p>
      )}

      {/* Quote Form Section */}
      <div className="w-full bg-[#f9f9e5] min-h-screen px-6 py-10">
        <div className="flex flex-row gap-8 max-w-screen-xl mx-auto ">
          <div className="bg-white p-6 rounded-lg shadow-md w-[70%] space-y-4">
            <CustomQuoteForm />
          </div>
          <div className="w-[30%] flex justify-center items-start">
            <img
              src={SideImage}
              alt="Custom Quote"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
