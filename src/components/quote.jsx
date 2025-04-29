import React from "react";
import Input from "./ui/input";
import Button from "./ui/button";
import CustomSelect from "./ui/customSelect";
import CustomTextarea from "./ui/customTextArea";
import SideImage from "../assets/images/pic.png";

const CustomQuoteForm = () => {
  return (
    <div className="w-full bg-[#f9f9e5] min-h-screen px-6 py-10">
      <h1 className="text-2xl font-bold mb-6 text-center">
        GET CUSTOM QUOTE
         {/* <span className="text-sm">🚚 Free Shipping</span> */}
      </h1>

      {/* Flex row layout with 70/30 split */}
      <div className="flex flex-row gap-8 max-w-screen-xl mx-auto">
        {/* Form - 70% */}
        <form className="bg-white p-6 rounded-lg shadow-md w-[70%] space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input placeholder="Name" required />
            <Input placeholder="Phone No" type="tel" required />
            <Input placeholder="Email Address" type="email" required />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">QTY</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input placeholder="Quantity" required />
              <CustomSelect options={["Select Color", "Red", "Blue", "Green"]} required />
              <Input placeholder="Product Name" required />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Size</label>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Input placeholder="L" required />
              <Input placeholder="W" required />
              <Input placeholder="D" required />
              <CustomSelect options={["inch", "cm"]} required />
            </div>
          </div>

          <div>
            <CustomTextarea placeholder="write short message" rows={4} />
          </div>

          <div>
            <label className="flex items-start gap-2">
              <input type="checkbox" />
              <span className="text-sm">
                I consent to receive SMS messages from xxx Packaging related to Packages at the phone number provided above. The SMS frequency may vary. Data rates may apply. For assistance reply HELP. Reply STOP to opt out of receiving text message.
                <br />
                <a href="#" className="underline">Privacy and Policy</a>.
              </span>
            </label>
          </div>

          <Button type="submit">Submit</Button>
        </form>

        {/* Image - 30% */}
        <div className="w-[30%] flex justify-center items-start">
          <img
            src={SideImage}
            alt="Custom Quote"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomQuoteForm;
