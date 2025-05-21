import React from "react";
import { Link } from "react-router-dom";
import check from "../assets/images/logo/logo.png";

const ThankYouPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-20 bg-white">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">THANK YOU!</h1>
      <p className="text-lg text-gray-600 mb-6">
        FOR SUBMITTING YOUR REQUEST TO US!
      </p>

      <img
        src={check} // Replace this with the path to your green shield icon
        alt="Success"
        className="w-24 h-24 mb-6"
      />

      <p className="text-gray-700 text-lg mb-2">
        Your message has been sent to the Sales Team. We will process your
        request and contact you shortly.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-4">
        You are Welcome to call us at
      </h2>
      <p className="text-lg text-gray-800">(510) 500 9533</p>

      <Link
        to="/"
        className="mt-10 text-blue-600 hover:underline text-sm flex items-center gap-1"
      >
        ← Back To Home
      </Link>
    </div>
  );
};

export default ThankYouPage;
