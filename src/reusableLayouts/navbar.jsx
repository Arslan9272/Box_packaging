import React, { useEffect, useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

import DropdownMenu from "../components/ui/dropdownMenu";
import { Button } from "../components/ui/button";
import BoxifyIcon from "../assets/images/logo/logo.png";
import { industryCategories } from "../data/uiDropdownItems/boxByIndustry";
import { boxByStyleCategories } from "../data/uiDropdownItems/boxByStyle";
import { boxByMaterialCategories } from "../data/uiDropdownItems/boxByMaterial";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="w-full relative z-50">
      {/* ✅ Top Contact Bar: Desktop */}
      <div className="hidden md:flex bg-transparent w-full px-12 justify-between items-center z-40">
        <div className="flex items-center gap-2">
          <img src={BoxifyIcon} alt="Logo" className="h-20" />
        </div>
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2 text-dark">
            <FaPhone className="text-accent" />
            <span>(510) 500-9533</span>
          </div>
          <div className="flex items-center gap-2 text-dark">
            <FaEnvelope className="text-accent" />
            <span>sales@oxopackaging.com</span>
          </div>
          {/* <FaWhatsapp className="text-green-500 text-xl" /> */}

          <Link
            to="/#custom-quote-section"
            className="bg-[#7286A0] text-nav_text px-4 py-1 rounded-md font-semibold"
          >
            Get Quote
          </Link>
        </div>
      </div>

      {/* ✅ Top Contact Bar: Mobile */}
      <div className="md:hidden w-full py-2 px-4 flex justify-between items-center text-sm text-dark bg-primary">
        <div className="flex items-center gap-2">
          <FaPhone className="text-accent" />
          <span>(510) 500-9533</span>
        </div>
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-accent" />
          <span>sales@oxopackaging.com</span>
        </div>
      </div>

      {/* ✅ Sticky Navbar */}
      <div
        className={`w-full ${
          isSticky
            ? "fixed top-0 left-0 shadow-md bg-primary"
            : "relative bg-primary"
        } transition-all duration-300`}
      >
        <div className="px-4 flex items-center justify-between text-dark">
          {/* Left: Logo / Menu */}
          <div className="flex items-center justify-between w-full md:w-auto px-4 bg-transparent">
            <div className="flex items-center gap-2 md:hidden">
              <img src={BoxifyIcon} alt="Logo" className="h-8" />
              <span className="font-bold text-lg text-dark">PACKAGING</span>
            </div>
            <button
              className="text-2xl text-dark md:hidden"
              onClick={toggleMenu}
            >
              <FaBars />
            </button>
          </div>

          {/* Nav Links: Desktop */}
          <nav className="hidden md:flex items-center gap-0 font-semibold text-sm ml-[2vw] sm:ml-[4vw] md:ml-[6vw] lg:ml-[8vw] relative z-50 text-dark h-10">
            <Link
              to="/"
              className="h-full px-4 flex items-center hover:bg-accent text-nav_text hover:text-white font-bold transition-all border-none rounded-none"
            >
              Home
            </Link>
            <DropdownMenu
              title="Boxes by Industry"
              items={industryCategories}
              className=" font-bold ml-4"
            />

            <DropdownMenu
              title="Boxes By Material"
              items={boxByMaterialCategories}
              className="font-bold ml-4"
              isVerticalList={true}
            />

            <DropdownMenu
              title="Boxes By Style"
              items={boxByStyleCategories}
              className="font-bold ml-4"
              isVerticalList={true}
            />
          </nav>

          {/* Right: Search & Portfolio */}
          <div className="hidden md:flex items-center gap-4 ml-auto mr-[2vw] sm:mr-[4vw] md:mr-[6vw] lg:mr-[8vw]">
            {/* <FaSearch className="text-dark cursor-pointer" /> */}
            <Link
              to="/portfolio"
              className="bg-accent text-nav_text font-bold px-4 py-2  hover:text-nav_text"
            >
              Portfolio
            </Link>
          </div>
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-dark/90 backdrop-blur-md z-[999] flex flex-col items-center justify-center text-primary text-xl space-y-6">
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-2xl text-primary"
          >
            <FaTimes />
          </button>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/industry" onClick={toggleMenu}>
            Boxes by Industry
          </Link>
          <Link to="/material" onClick={toggleMenu}>
            Boxes By Material
          </Link>
          <Link to="/style" onClick={toggleMenu}>
            Boxes By Style
          </Link>
          <Link to="/blog" onClick={toggleMenu}>
            Blog
          </Link>
          <Link to="/portfolio" onClick={toggleMenu}>
            Portfolio
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
