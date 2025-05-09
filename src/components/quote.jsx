import React from "react";
import Input from "./ui/input";
import Button from "./ui/button";
import CustomSelect from "./ui/customSelect";
import CustomTextarea from "./ui/customTextArea";

const CustomQuoteForm = () => {
  return (
    // <div className="w-full px-4 py-10">
      <div className="max-w-screen-lg mx-auto space-y-8">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-800">Get Custom Quote</h2>

        {/* Form */}
        <form className="space-y-6">
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input placeholder="Name" required />
            <Input placeholder="Phone No" type="tel" required />
            <Input placeholder="Email Address" type="email" required />
          </div>

          {/* Quantity + Color + Product */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">Quantity & Product Info</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input placeholder="Quantity" required />
              <CustomSelect options={["Select Color", "Red", "Blue", "Green"]} required />
              <Input placeholder="Product Name" required />
            </div>
          </div>

          {/* Size */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">Size (L x W x D)</label>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Input placeholder="L" required />
              <Input placeholder="W" required />
              <Input placeholder="D" required />
              <CustomSelect options={["inch", "cm"]} required />
            </div>
          </div>

          {/* Message */}
          <CustomTextarea placeholder="Write a short message..." rows={4} />

          {/* Consent */}
          <label className="flex items-start gap-2 text-sm text-gray-600">
            <input type="checkbox" className="mt-1" />
            <span>
              I consent to receive SMS messages from xxx Packaging regarding packages at the phone number provided above. SMS frequency may vary. Data rates may apply. Reply HELP for help or STOP to opt-out. <br />
              <a href="#" className="underline text-blue-600">Privacy Policy</a>.
            </span>
          </label>

          {/* Submit Button */}
          <Button type="submit">Submit</Button>
        </form>
      </div>
    // </div>
  );
};

export default CustomQuoteForm;
