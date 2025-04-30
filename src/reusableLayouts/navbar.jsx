import React, { useEffect, useState } from 'react';
import { FaPhone, FaEnvelope, FaWhatsapp, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from '../components/ui/button';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="w-full relative z-50">
      {/* ✅ Top Contact Bar: Desktop */}
      <div className="hidden md:flex bg-white w-full border-b py-2 px-4 justify-between items-center z-40">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="h-10" />
          <span className="font-bold text-xl">PACKAGING</span>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2 text-black">
            <FaPhone className="text-yellow-400" />
            <span>(510) 500-9533</span>
          </div>
          <div className="flex items-center gap-2 text-black">
            <FaEnvelope className="text-yellow-400" />
            <span>sales@oxopackaging.com</span>
          </div>
          <FaWhatsapp className="text-green-500 text-xl" />
          <Button className="bg-red-600 text-white px-4 py-1 rounded-md font-semibold">Get Quote</Button>
        </div>
      </div>

      {/* ✅ Top Contact Bar: Mobile only */}
      <div className="md:hidden bg-beige w-full py-2 px-4 flex justify-between items-center text-sm text-darkgrey">
        <div className="flex items-center gap-2">
          <FaPhone className="text-yellow-400" />
          <span>(510) 500-9533</span>
        </div>
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-yellow-400" />
          <span>sales@oxopackaging.com</span>
        </div>
      </div>

      {/* ✅ Sticky Navbar */}
      <div className={`w-full ${isSticky ? 'fixed top-0 left-0 shadow-md bg-beige' : 'relative bg-beige'} transition-all duration-300`}>
        <div className="px-4 py-2 flex items-center justify-between text-darkgrey">
          
          {/* Left: Logo (desktop) / Menu button (mobile) */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              
              {/* Hamburger for mobile only */}
              <button className="text-2xl text-black md:hidden" onClick={toggleMenu}>
                <FaBars />
              </button>

              {/* Logo & text - only visible on small screens */}
              <div className="flex items-center gap-2 md:hidden">
                <img src="/logo.png" alt="Logo" className="h-8" />
                <span className="font-bold text-lg">PACKAGING</span>
              </div>
            </div>
          </div>

          {/* Nav Items: Desktop */}
          <nav className="hidden md:flex gap-6 font-semibold text-sm ml-[2vw] sm:ml-[4vw] md:ml-[6vw] lg:ml-[8vw]">
            <Link to="/" className="hover:text-yellow-400">Home</Link>
            <Link to="/industry" className="hover:text-yellow-400">
              Boxes by Industry <span className="text-yellow-400">▼</span>
            </Link>
            <Link to="/material" className="hover:text-yellow-400">
              Boxes By Material <span className="text-yellow-400">▼</span>
            </Link>
            <Link to="/style" className="hover:text-yellow-400">
              Boxes By Style <span className="text-yellow-400">▼</span>
            </Link>
            <Link to="/blog" className="hover:text-yellow-400">Blog</Link>
          </nav>

          {/* Right Side: Search & Portfolio with dynamic margin */}
          <div className="hidden md:flex items-center gap-4 ml-auto mr-[2vw] sm:mr-[4vw] md:mr-[6vw] lg:mr-[8vw]">
            <FaSearch className="text-white cursor-pointer" />
            <Link to="/portfolio" className="bg-yellow-400 text-black font-bold px-4 py-1 rounded">
              Portfolio
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer to offset sticky navbar */}
      {isSticky && <div className="h-[56px] md:h-0"></div>}

      {/* ✅ Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/70 backdrop-blur-md z-[999] flex flex-col items-center justify-center text-white text-xl space-y-6">
          <button onClick={toggleMenu} className="absolute top-6 right-6 text-2xl">
            <FaTimes />
          </button>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/industry" onClick={toggleMenu}>Boxes by Industry</Link>
          <Link to="/material" onClick={toggleMenu}>Boxes By Material</Link>
          <Link to="/style" onClick={toggleMenu}>Boxes By Style</Link>
          <Link to="/blog" onClick={toggleMenu}>Blog</Link>
          <Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
