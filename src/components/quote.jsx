import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Input from "./ui/input";
import { Button } from "./ui/button";
import CustomSelect from "./ui/customSelect";
import CustomTextarea from "./ui/customTextArea";
import { createOrder, resetSuccess, resetError } from "../store/orderSlice";

const CustomQuoteForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.orders);

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
    consent: false,
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (success) {
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
        consent: false,
      });
      setErrors({});
      navigate("/thank-you");

      // Reset Redux state after a short delay to avoid flicker or stale state
      setTimeout(() => {
        dispatch(resetSuccess());
        dispatch(resetError());
      }, 100);
    }
  }, [success, navigate, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(resetSuccess());
      dispatch(resetError());
    };
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when correcting input
    setErrors((prev) => ({
      ...prev,
      [name]: false,
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Required field checks
    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.phone_no.trim()) newErrors.phone_no = true;
    if (!formData.email_address.trim()) newErrors.email_address = true;
    if (!formData.product_name.trim()) newErrors.product_name = true;
    if (!formData.size_length) newErrors.size_length = true;
    if (!formData.size_width) newErrors.size_width = true;
    if (!formData.size_depth) newErrors.size_depth = true;
    if (!formData.consent) newErrors.consent = true;

    // Format checks
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{7,15}$/;

    if (formData.email_address && !emailRegex.test(formData.email_address)) {
      newErrors.email_address = true;
    }

    if (formData.phone_no && !phoneRegex.test(formData.phone_no)) {
      newErrors.phone_no = true;
    }

    if (formData.quantity && isNaN(formData.quantity)) {
      newErrors.quantity = true;
    }

    if (formData.size_length && isNaN(formData.size_length)) {
      newErrors.size_length = true;
    }

    if (formData.size_width && isNaN(formData.size_width)) {
      newErrors.size_width = true;
    }

    if (formData.size_depth && isNaN(formData.size_depth)) {
      newErrors.size_depth = true;
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

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
      user_id: 0,
    };

    dispatch(createOrder(payload));
  };

  const errorClass = (field) =>
    errors[field] ? "border-red-500 focus:ring-red-500" : "";

  return (
    <div className="max-w-screen-lg mx-auto space-y-8">
      <h2 className="text-2xl font-bold text-gray-800">Get Custom Quote</h2>

      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
          <span>Your quote request has been submitted successfully!</span>
        </div>
      )}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          <span>
            {typeof error === "string" ? error : JSON.stringify(error)}
          </span>
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input
            name="name"
            placeholder="Name"
            className={errorClass("name")}
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            name="phone_no"
            placeholder="Phone No"
            type="tel"
            className={errorClass("phone_no")}
            value={formData.phone_no}
            onChange={handleChange}
          />
          <Input
            name="email_address"
            placeholder="Email Address"
            type="email"
            className={errorClass("email_address")}
            value={formData.email_address}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input
            name="quantity"
            placeholder="Quantity"
            className={errorClass("quantity")}
            value={formData.quantity}
            onChange={handleChange}
          />
          <CustomSelect
            name="color"
            options={["Select Color", "Red", "Blue", "Green"]}
            className={errorClass("color")}
            value={formData.color}
            onChange={(e) => handleSelectChange("color", e.target.value)}
          />
          <Input
            name="product_name"
            placeholder="Product Name"
            className={errorClass("product_name")}
            value={formData.product_name}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Input
            name="size_length"
            placeholder="L"
            className={errorClass("size_length")}
            value={formData.size_length}
            onChange={handleChange}
          />
          <Input
            name="size_width"
            placeholder="W"
            className={errorClass("size_width")}
            value={formData.size_width}
            onChange={handleChange}
          />
          <Input
            name="size_depth"
            placeholder="D"
            className={errorClass("size_depth")}
            value={formData.size_depth}
            onChange={handleChange}
          />
          <CustomSelect
            name="size_unit"
            options={["inch", "cm"]}
            value={formData.size_unit}
            onChange={(e) => handleSelectChange("size_unit", e.target.value)}
          />
        </div>

        <CustomTextarea
          name="message"
          placeholder="Write a short message..."
          rows={4}
          value={formData.message}
          onChange={handleChange}
        />

        <label className="flex items-start gap-2 text-sm text-gray-600 rounded p-2">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1"
          />
          <span>
            I consent to receive SMS messages from Custom Boxes 360.
            <br />
            <a href="#" className="underline text-blue-600">
              Privacy Policy
            </a>
            .
          </span>
        </label>

        {errors.consent && (
          <p className="text-red-500 text-sm mt-1 ml-1">
            Please check the privacy consent
          </p>
        )}

        <Button
          className="text-sm bg-primary text-white px-3 py-2 rounded-md focus:outline-none border-none hover:bg-accent"
          type="submit"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </div>
  );
};

export default CustomQuoteForm;
