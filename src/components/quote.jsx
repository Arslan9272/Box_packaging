import React from "react";
import Input from "./ui/input";
import Button from "./ui/button";
import CustomSelect from "./ui/customSelect";
import CustomTextarea from "./ui/customTextArea";
import SideImage from "../assets/images/side_image.jpg";

const CustomQuoteForm = () => {
  return (
    <div className="pl-[200px] bg-[#f9f9e5] min-h-screen ">
      {/* Top Heading */}
      <h1 className="text-3xl font-bold mb-8">
        GET CUSTOM QUOTE <span className="text-base">🚚 Free Shipping</span>
      </h1>

      {/* Flex Container for Form and Image */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Form Section */}
        <div className="flex-1">
          <form className="bg-white p-6 rounded-lg shadow-md space-y-4">
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
              <CustomTextarea placeholder="Write a short message" rows={4} />
            </div>

            <div>
              <label className="flex items-start gap-2">
                <input type="checkbox" />
                <span className="text-sm">
                  I consent to receive SMS messages from OXO Packaging related to Packages at the phone number provided above. The SMS frequency may vary. Data rates may apply. For assistance reply HELP. Reply STOP to opt out of receiving text message.
                  <br />
                  <a href="#" className="underline">Privacy and Policy</a>.
                </span>
              </label>
            </div>

            <Button type="submit">Submit</Button>
          </form>
        </div>

        {/* Image Section */}
        <div className="flex-1 w-full h-full ">
          <img
            src={SideImage}
            alt="Custom Quote"
            className="object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default CustomQuoteForm;
