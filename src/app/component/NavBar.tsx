"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import logo from "../../../public/logo.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/services", title: "Services" },
    { path: "/leaders", title: "Leaders" },
    // { path: "/contact", title: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isScrolled
          ? "bg-gradient-to-b from-white/100 to-white/60 shadow-md"
          : "bg-transparent"
      } transition-all duration-300 fixed top-0 left-0 w-full p-10 py-4 z-50 ${
        isMenuOpen ? "bg-white" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" aria-label="Home">
              <Image
                src={logo}
                alt="PSB Logo"
                width={100}
                height={100}
                className="h-28 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-gray-900 mt-2 font-bold hover:underline underline-offset-8 text-lg hover:text-blue-600 transition duration-300 ${
                  pathname === item.path
                    ? "underline underline-offset-8 text-blue-600"
                    : ""
                }`}
              >
                {item.title}
              </Link>
            ))}

            <Link
              href="/contact"
              className={`text-blue-600 border hover:bg-blue-600 hover:text-white px-4 py-2 border-blue-600 rounded-lg font-bold text-lg transition duration-300 ${
                pathname === "/contact" ? "text-blue-600" : ""
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-blue-600"
              aria-label="Toggle Menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          {menuItems.map((item) => (
            <div key={item.path}>
              <Link
                href={item.path}
                className={`block px-4 py-2 text-gray-900 hover:bg-gray-100 transition duration-300 ${
                  pathname === item.path
                    ? "underline underline-offset-8 text-blue-600"
                    : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
