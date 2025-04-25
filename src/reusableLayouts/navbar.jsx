import React, { useEffect, useState } from 'react';
import { FaPhone, FaEnvelope, FaWhatsapp, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from '../components/ui/button';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full">
      {/* Top Contact Bar (scrolls away) */}
      <div className="bg-white w-full border-b py-2 px-4 flex justify-between items-center z-40">
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

      {/* Main Navigation Bar (sticks on scroll) */}
      <div className={`w-full ${isSticky ? 'fixed top-0 left-0 z-50 shadow-md' : 'relative'} transition-all duration-300`}>
        <div className="bg-gray-800 text-white px-4 py-2 flex justify-between items-center">
          {/* Nav Items Left */}
          <div className="flex gap-6 font-semibold text-sm">
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
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <FaSearch className="text-white cursor-pointer" />
            <Link to="/portfolio" className="bg-yellow-400 text-black font-bold px-4 py-1 rounded">
              Portfolio
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer for fixed nav height (only when sticky) */}
      {isSticky && <div className="h-[48px]"></div>}
    </div>
  );
};

export default Navbar;
