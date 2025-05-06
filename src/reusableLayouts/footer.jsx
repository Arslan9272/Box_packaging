import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Input from "../components/ui/input";
import Button from "../components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-darkgrey py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and Subscription */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo.png" alt="Logo" className="h-10" />
            <span className="text-2xl font-bold">Packaging</span>
          </div>
          <p className="font-semibold mb-2">
            We partner with individuals and brands to create exceptional
            experiences.
          </p>
          <p className="text-sm mb-4">
            Let’s achieve something remarkable together.
          </p>
          <p className="text-sm mb-2">
            Sign up for exclusive offers and updates!
          </p>
          <div className="flex items-center">
            <Input
              placeholder="Your Email Address..."
              className="text-black px-4 py-2
               border border-[rgb(110,87,87)] 
               rounded-l-md rounded-r-none 
               shadow-inner
               focus:outline-none 
               focus:shadow-md focus:shadow-[rgb(110,87,87)]
               focus:border-[rgb(94,84,84)]"
            />
            <Button
              className="bg-[rgb(110,87,87)] text-black px-4 py-2 font-semibold 
               border border-[rgb(110,87,87)] 
               rounded-r-md rounded-l-none 
               focus:outline-none 
               hover:border-[rgb(94,84,84)]"
            >
              Submit
            </Button>
          </div>
        </div>

        {/* Info Links */}
        <div>
          <h4 className="font-bold text-lg mb-4">Need Help?</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/contactus">Contact Us</Link>
            </li>
            <li>
              <Link to="/sitemap">Request a Quote</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy and Policy</Link>
            </li>
            <li>
              <Link to="/terms-and-conditions">Terms and Conditions</Link>
            </li>
          </ul>
        </div>

        {/* Product Links */}
        <div>
          <h4 className="font-bold text-lg mb-4">Our Products</h4>
          <ul className="space-y-2 text-sm">
            <li>Soap Boxes</li>
            <li>Pillow Boxes</li>
            <li>Rigid Boxes</li>
            <li>Kraft Boxes</li>
            <li>Mylar Bags</li>
            <li>Gable Boxes</li>
          </ul>
          {/* <p className="font-semibold mb-2">PakFactory is committed to delivering
          manufacturing excellence.</p> */}
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold text-lg mb-4">CONTACT US</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-accent" /> (510) 500-9533
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-accent" /> sales@oxopackaging.com
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-accent" />
              39899 Balentine Drive Suite 200, Newark, CA 94560
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-accent" />
              3400 N Central Expy Ste #110-227, Richardson, TX 75080
            </li>
          </ul>
        </div>
      </div>

      {/* Social & Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-sm">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <span>Connect with Us:</span>
          <FaFacebook className="hover:text-accent cursor-pointer" />
          <FaTwitter className="hover:text-accent cursor-pointer" />
          <FaYoutube className="hover:text-accent cursor-pointer" />
          <FaPinterest className="hover:text-accent cursor-pointer" />
          <FaInstagram className="hover:text-accent cursor-pointer" />
        </div>
        <div className="flex items-center gap-6">
          <div className="text-xs">SSL 100% Secure Transactions:</div>
          <img src="/visa.png" alt="Visa" className="h-5" />
          <img src="/amex.png" alt="Amex" className="h-5" />
          <img src="/discover.png" alt="Discover" className="h-5" />
          <img src="/paypal.png" alt="PayPal" className="h-5" />
          <img src="/bank.png" alt="Bank" className="h-5" />
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-4 text-center text-xs text-gray-400">
        Copyright 2025. www.oxopackaging.com Project By Just Hub LLC. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
