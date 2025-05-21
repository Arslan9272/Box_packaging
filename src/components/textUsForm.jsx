import React, { useState } from "react";
import Button from "./ui/button";
import Input from "./ui/input";

const TextUsForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) newErrors[key] = "This field is required";
      if (key === "email" && value && !/\S+@\S+\.\S+/.test(value)) {
        newErrors[key] = "Please enter a valid email address";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit();
  };

  return (
    <div className="fixed bottom-24 right-6 w-96 z-50 w-[22rem] bg-white rounded-xl shadow-2xl border border-gray-200 p-6">
      <h3 className="text-sm text-gray-500">Step 1 of 2</h3>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Text Us</h2>

      <p className="mb-4 text-sm text-gray-700">
        Please enter your name, number, and message for our team!
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-4">
          {/* First Name */}
          <div className="w-1/2">
            <Input
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full px-3 py-2 text-sm border ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
            )}
          </div>

          {/* Last Name */}
          <div className="w-1/2">
            <Input
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className={`w-full px-3 py-2 text-sm border ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>

        {/* Phone Number */}
        <div>
          <Input
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-3 py-2 text-sm border ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-3 py-2 text-sm border ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-between mt-6">
          <Button
            type="button"
            onClick={() =>
              setFormData({
                firstName: "",
                lastName: "",
                phone: "",
                email: "",
              })
            }
            className="text-sm text-gray-500 hover:text-gray-800"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded-full  focus:outline-none border-none hover:bg-accent transition"
          >
            Send Text
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TextUsForm;
