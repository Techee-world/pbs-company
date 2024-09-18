"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import logo from "../../../public/images/logo.png";

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
      if (window.scrollY > 0) {
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
      } transition-all duration-300  fixed top-0 left-0 w-full  lg:p-4 p-0 py-4 z-50 ${
        isMenuOpen ? "bg-white  sticky top-0 left-0 " : ""
      }`}
    >
      <div className="2xl:max-w-7xl max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className={`relative text-gray-900 mt-2 ${
                  pathname === item.path ? "text-blue-700" : ""
                } font-normal text-lg hover:text-blue-600 transition duration-300 group`}
              >
                {item.title}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left transition-all duration-300 ease-out ${
                    pathname === item.path ? "scale-x-100" : "scale-x-0"
                  } group-hover:scale-x-100`}
                ></span>
              </Link>
            ))}
            <Link
              href="/contact"
              className={`relative text-blue-600 border hover:bg-blue-600 hover:text-white px-4 py-2 border-blue-600 rounded-lg font-normal text-lg transition duration-300 group ${
                pathname === "/contact" ? "bg-blue-600 text-white" : ""
              }`}
            >
              Contact Us
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 transform origin-left transition-all duration-300 ease-out ${
                  pathname === "/contact"
                    ? "scale-x-100 bg-white"
                    : "scale-x-0 bg-white"
                } group-hover:scale-x-100 group-hover:bg-white`}
              ></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden  ">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-blue-600"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
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
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col fade-in absolute top-20 left-0 pl-4 py-3 z-[99999]  bg-white w-full">
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
          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className={`text-blue-600 border mb-6 hover:bg-blue-600 w-fit  hover:text-white px-4 py-2 border-blue-600 rounded-lg font-bold text-lg transition duration-300 ${
              pathname === "/contact" ? "text-blue-600" : ""
            }`}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
