import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current route
  const currentPath = location.pathname; // Current page path

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // Function to check if the link is active
  const isActive = (path: string) => currentPath === path ? 'font-bold text-purple-500' : 'hover:text-purple-500';

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-4 flex justify-between items-center z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/80 backdrop-blur-md"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="PROMES Logo" className="h-10" />
        <span className="text-black text-lg font-semibold">PROMES</span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8 text-black text-lg">
        <Link to="/" className={`transition ${isActive('/')}`}>
          Home
        </Link>
        <Link to="/projects" className={`transition ${isActive('/projects')}`}>
          Projects
        </Link>
        <Link to="/complaint" className={`transition ${isActive('/complaint')}`}>
          Complaint
        </Link>
      </div>

      {/* Search & Download Button */}
      <div className="hidden md:flex items-center space-x-6">
        <FiSearch className="text-black text-xl cursor-pointer hover:text-purple-500 transition" />
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2 rounded-lg shadow-md hover:scale-105 transition-transform">
          Download
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-black text-2xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Navigation (Slide-in) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full w-4/5 bg-white shadow-lg flex flex-col items-center justify-center space-y-8 text-lg z-50"
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-black text-2xl focus:outline-none"
              onClick={() => setIsOpen(false)}
            >
              <FiX />
            </button>

            <Link
              to="/"
              className={`transition ${isActive('/')}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className={`transition ${isActive('/projects')}`}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/complaint"
              className={`transition ${isActive('/complaint')}`}
              onClick={() => setIsOpen(false)}
            >
              Complaint
            </Link>

            <FiSearch className="text-black text-xl cursor-pointer hover:text-purple-500 transition" />
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2 rounded-lg shadow-md hover:scale-105 transition-transform">
              Download
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
