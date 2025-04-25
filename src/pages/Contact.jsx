import React, { useState } from "react";
import Layout from "../reusableLayouts/layout"; // make sure this path is correct
import Input from "../components/ui/input";
import Button from "../components/ui/button";
import Textarea from "../components/ui/textArea";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    company: "",
    website: "",
    message: "",
    captcha: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
      <div className="w-full px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* LEFT SECTION */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">GET IN TOUCH WITH US</h1>
            <p className="mb-6 text-sm text-gray-600">
              See how your business can get benefits with{" "}
              <span className="font-semibold">OXO Packaging</span> as your team.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 bg-gray-100 p-4 rounded-2xl text-center">
            <div>
              <div className="font-semibold text-lg">📞</div>
              <div>(510) 500-9533</div>
            </div>
            <div>
              <div className="font-semibold text-lg">📧</div>
              <div>sales@oxopackaging.com</div>
            </div>
            <div>
              <div className="font-semibold text-lg">📍</div>
              <div>39899 Balentine Drive Suite 200, Newark, CA 94560</div>
            </div>
          </div>

          <div>
            <iframe
              className="w-full h-80 rounded-2xl"
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.4761697262144!2d-121.97256768468073!3d37.514388634323376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc971fc781e2d%3A0xd1f7c1f3e9b0ebd5!2s39899%20Balentine%20Dr%20%23200%2C%20Newark%2C%20CA%2094560%2C%20USA!5e0!3m2!1sen!2s!4v1681434233325!5m2!1sen!2s"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="OXO Packaging Location"
            ></iframe>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="text-sm font-medium">Name*</label>
              <Input name="name" value={formData.name} onChange={handleChange} placeholder="Your name" />
              {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
            </div>
            <div>
              <label className="text-sm font-medium">E-mail*</label>
              <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your email" />
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
            </div>
            <div>
              <label className="text-sm font-medium">Phone*</label>
              <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone number" />
              {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
            </div>
            <div>
              <label className="text-sm font-medium">Location</label>
              <Input name="location" value={formData.location} onChange={handleChange} placeholder="Location" />
            </div>
            <div>
              <label className="text-sm font-medium">Company</label>
              <Input name="company" value={formData.company} onChange={handleChange} placeholder="Company" />
            </div>
            <div>
              <label className="text-sm font-medium">Website</label>
              <Input name="website" value={formData.website} onChange={handleChange} placeholder="Website" />
            </div>
            <div>
              <label className="text-sm font-medium">Message</label>
              <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Write a short message" className="resize-none" />
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" id="sms-consent" className="mt-1" />
              <label htmlFor="sms-consent" className="text-xs text-gray-600">
                I consent to receive SMS messages from OXO Packaging...
                <a href="#" className="text-blue-500 underline ml-1">Privacy and Policy.</a>
              </label>
            </div>

            <Button type="submit" className="bg-slate-700 hover:bg-slate-800 text-white font-semibold">
              Submit
            </Button>
          </form>
        </div>
      </div>
  );
}

export default ContactUs;