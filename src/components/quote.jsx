import React, { useState } from "react";
import Input from "./ui/input";
import { Button } from "./ui/button";
import CustomSelect from "./ui/customSelect";
import CustomTextarea from "./ui/customTextArea";

const CustomQuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone_no: "",
    email_address: "",
    quantity: "",
    color: "Select Color",
    product_name: "",
    size_length: "",
    size_width: "",
    size_depth: "",
    size_unit: "inch",
    message: "",
    consent: false
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSelectChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const requiredFields = ['name', 'phone_no', 'email_address', 'quantity', 'product_name', 'size_length', 'size_width', 'size_depth'];
    
    for (const field of requiredFields) {
      if (!formData[field]) {
        return `${field.replace('_', ' ')} is required`;
      }
    }

    if (formData.color === "Select Color") {
      return "Please select a color";
    }

    if (!formData.consent) {
      return "Please consent to the terms";
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const payload = {
        name: formData.name,
        phone_no: formData.phone_no,
        email_address: formData.email_address,
        quantity: parseInt(formData.quantity),
        color: formData.color,
        product_name: formData.product_name,
        size_length: parseFloat(formData.size_length),
        size_width: parseFloat(formData.size_width),
        size_depth: parseFloat(formData.size_depth),
        message: formData.message,
        order_status: "Pending",
        id: 0,
        user_id: 0
      };

      const response = await fetch("http://localhost:8000/orders/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      console.log("Order created:", data);
      setSuccess(true);
      
      // Reset form after successful submission
      setFormData({
        name: "",
        phone_no: "",
        email_address: "",
        quantity: "",
        color: "Select Color",
        product_name: "",
        size_length: "",
        size_width: "",
        size_depth: "",
        size_unit: "inch",
        message: "",
        consent: false
      });
    } catch (err) {
      setError(err.message || "Failed to submit form");
      console.error("Error submitting form:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto space-y-8">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-gray-800">Get Custom Quote</h2>
      
      {/* Success Message */}
      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
          <span className="block sm:inline">Your quote request has been submitted successfully!</span>
          <button 
            className="absolute top-0 bottom-0 right-0 px-4"
            onClick={() => setSuccess(false)}
          >
            &times;
          </button>
        </div>
      )}
      
      {/* Error Message */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          <span className="block sm:inline">{error}</span>
          <button 
            className="absolute top-0 bottom-0 right-0 px-4"
            onClick={() => setError(null)}
          >
            &times;
          </button>
        </div>
      )}
      
      {/* Form */}
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input 
            placeholder="Name" 
            required 
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <Input 
            placeholder="Phone No" 
            type="tel" 
            required 
            name="phone_no"
            value={formData.phone_no}
            onChange={handleChange}
          />
          <Input 
            placeholder="Email Address" 
            type="email" 
            required 
            name="email_address"
            value={formData.email_address}
            onChange={handleChange}
          />
        </div>
        
        {/* Quantity + Color + Product */}
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">Quantity & Product Info</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input 
              placeholder="Quantity" 
              required 
              name="quantity"
              type="number"
              value={formData.quantity}
              onChange={handleChange}
            />
            <CustomSelect 
              options={["Select Color", "Red", "Blue", "Green"]} 
              required 
              value={formData.color}
              onChange={(e) => handleSelectChange("color", e.target.value)}
              />
            <Input 
              placeholder="Product Name" 
              required 
              name="product_name"
              value={formData.product_name}
              onChange={handleChange}
            />
          </div>
        </div>
        
        {/* Size */}
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">Size (L x W x D)</label>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input 
              placeholder="L" 
              required 
              name="size_length"
              type="number"
              step="0.01"
              value={formData.size_length}
              onChange={handleChange}
            />
            <Input 
              placeholder="W" 
              required 
              name="size_width"
              type="number"
              step="0.01"
              value={formData.size_width}
              onChange={handleChange}
            />
            <Input 
              placeholder="D" 
              required 
              name="size_depth"
              type="number"
              step="0.01"
              value={formData.size_depth}
              onChange={handleChange}
            />
            <CustomSelect 
              options={["inch", "cm"]} 
              required 
              value={formData.size_unit}
              onChange={(e) => handleSelectChange("size_unit", e.target.value)}
            />
          </div>
        </div>
        
        {/* Message */}
        <CustomTextarea 
          placeholder="Write a short message..." 
          rows={4} 
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        
        {/* Consent */}
        <label className="flex items-start gap-2 text-sm text-gray-600">
          <input 
            type="checkbox" 
            className="mt-1" 
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
          />
          <span>
            I consent to receive SMS messages from xxx Packaging regarding packages at the phone number provided above. SMS frequency may vary. Data rates may apply. Reply HELP for help or STOP to opt-out. <br />
            <a href="#" className="underline text-blue-600">Privacy Policy</a>.
          </span>
        </label>
        
        {/* Submit Button */}
        <button type="submit" 
        disabled={loading}
        className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default CustomQuoteForm;