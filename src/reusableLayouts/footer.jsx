import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCcVisa,
  faCcAmex,
  faCcPaypal,
  faCcMastercard,
  faCcDiscover,
} from "@fortawesome/free-brands-svg-icons";
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
import BoxifyIcon from "../assets/images/logo/logo-transparent.png";

const Footer = () => {
  return (
    <footer className="text-nav_text font-sans">
      {/* Top Section */}
      <div className="bg-primary py-10 px-6 md:px-20 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and Subscription */}
        <div className="flex items-center gap-4 mb-6">
          <img src={BoxifyIcon} alt="Logo" className="h-19 w-auto" />
        </div>
        <div>
          <p className="font-semibold text-sm mb-2">
            We partner with individuals and brands to create exceptional
            experiences.
          </p>
          <p className="font-semibold text-sm mb-2">
            We partner with individuals and brands to create exceptional
            experiences.
          </p>
          <p className="text-sm mb-4">
            Let’s achieve something remarkable together.
          </p>
          <p className="text-sm mb-2">
            Sign up for exclusive offers and updates!
          </p>
          <div className="flex">
            <Input
              placeholder="Your Email Address..."
              className="text-dark px-4 py-2 rounded-l-md rounded-r-none shadow-inner focus:outline-none"
            />
            <Button className="bg-accent text-nav_text px-4 py-2 font-semibold rounded-r-md rounded-l-none focus:outline-none">
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
              <Link to="/#custom-quote-section">Request a Quote</Link>
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
        {/* <div>
          <h4 className="font-bold text-lg mb-4">Our Products</h4>
          <ul className="space-y-2 text-sm">
            <li>Soap Boxes</li>
            <li>Pillow Boxes</li>
            <li>Rigid Boxes</li>
            <li>Kraft Boxes</li>
            <li>Mylar Bags</li>
            <li>Gable Boxes</li>
          </ul>
        </div> */}

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

      {/* Bottom Section */}
      <div className=" text-dark py-8 px-6 md:px-20 ">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <span className="font-semibold">Connect with Us:</span>
            <FaFacebook className="hover:text-primary cursor-pointer" />
            <FaTwitter className="hover:text-primary cursor-pointer" />
            <FaYoutube className="hover:text-primary cursor-pointer" />
            <FaPinterest className="hover:text-primary cursor-pointer" />
            <FaInstagram className="hover:text-primary cursor-pointer" />
          </div>
          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
            <div className="text-xs font-semibold">
              SSL 100% Secure Transactions:
            </div>
            <div className="flex gap-4 text-xl">
              <FontAwesomeIcon icon={faCcVisa} />
              <FontAwesomeIcon icon={faCcAmex} />
              <FontAwesomeIcon icon={faCcPaypal} />
              <FontAwesomeIcon icon={faCcMastercard} />
              <FontAwesomeIcon icon={faCcDiscover} />
            </div>
          </div>
        </div>

        <div className="mt-4 text-center text-xs text-dark font-medium">
          © 2025 www.oxopackaging.com — Project By Just Hub LLC. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
