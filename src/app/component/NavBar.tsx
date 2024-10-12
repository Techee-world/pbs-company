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
    { path: "/impact", title: "Impact initiatives" },
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
    <header className="w-full fixed top-0 left-0 z-50">
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-gradient-to-b from-white/100 to-white/60 shadow-md"
            : "bg-transparent"
        } ${isMenuOpen ? 'bg-blue-400':" "} w-full py-3 lg:py-4 fixed top-0 left-0 z-50 `}
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
                  className="h-16 lg:h-28 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`relative text-gray-900 font-medium text-lg button-color-two transition duration-300 group ${
                    pathname === item.path ? "button-color-text" : ""
                  }`}
                >
                  {item.title}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 button-color transform origin-left transition-all duration-300 ease-out ${
                      pathname === item.path ? "scale-x-100" : "scale-x-0"
                    } group-hover:scale-x-100`}
                  ></span>
                </Link>
              ))}
              <Link
                href="/contact"
                className={`relative border button-color-one hover:text-white px-4 py-2 border-blue-950 rounded-lg font-medium text-lg transition duration-300 group ${
                  pathname === "/contact" ? "button-color text-white" : ""
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
            <div className="lg:hidden fade-in  ">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-900 button-color-one"
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
          <div className="lg:hidden absolute top-16 left-0 bg-white w-full shadow-md z-50 ">
            <div className="flex flex-col p-4 space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`block px-4 py-2 text-gray-900 hover:bg-gray-100 transition duration-300 ${
                    pathname === item.path ? "underline button-color-text" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`button-color-text border button-color-one hover:text-white px-4 py-2 border-blue-950 rounded-lg font-medium text-lg transition duration-300 ${
                  pathname === "/contact" ? "button-color-text" : ""
                }`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
