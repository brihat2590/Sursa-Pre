import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  // ✅ Detect section in view
  useEffect(() => {
    const sectionIds = ["home", "features", "wishlist"];
    const sections = sectionIds.map((id) => document.getElementById(id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.6,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // ✅ Detect scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-lg border-b border-gray-800"
          : "bg-transparent"
      } py-5`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-start">
              <img src="https://sursakit.com/logo.svg" className="w-10 h-8" />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {["home", "features", "wishlist"].map((link) => (
              <motion.a
                key={link}
                href={`#${link}`}
                className={`relative px-4 py-2 text-lg font-medium ${
                  activeLink === link
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                } transition-colors`}
                onClick={() => setActiveLink(link)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
                {activeLink === link && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ad9665]"
                    layoutId="navbar-underline"
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() =>
                setActiveLink(activeLink === "menu" ? "" : "menu")
              }
              className="text-gray-300 hover:text-white focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {activeLink === "menu" ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {activeLink === "menu" && (
        <motion.div
          className="md:hidden bg-black/95 backdrop-blur-lg"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 pt-2 pb-4 space-y-2">
            {["home", "features", "wishlist"].map((link) => (
              <motion.a
                key={link}
                href={`#${link}`}
                className="block px-4 py-4 rounded-lg text-xl font-bold text-white bg-gradient-to-r from-[#ad9665]/50 to-[#ad9665]/50"
                onClick={() => setActiveLink(link)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center">
                  <div className="w-1 h-8 bg-[#ad9665] rounded-full mr-3"></div>
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
      
    </nav>
  );
};
