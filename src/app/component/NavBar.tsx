"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../img/logo.jpg"

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-50  to-white shadow-md  py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            {/* <h1 className="text-2xl text-blue-700  font-black mt-4">
              <span>P</span>
              <span>B</span>
              <span>S</span>
              </h1> */}
            <Link href="/">
              <Image
                src={logo}
                alt="PSB Logo"
                width={100}
                height={100}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-900 hover:text-blue-600">
              Home
            </Link>
            <Link href="/about" className="text-gray-900 hover:text-blue-600">
              About
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="text-gray-900 hover:text-blue-600">
                Services
              </button>
              {isDropdownOpen && (
                <div className="absolute z-50 left-0 mt-0 w-48 bg-white shadow-lg rounded-lg py-2">
                  <Link
                    href="/training"
                    className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
                  >
                    Training
                  </Link>
                  <Link
                    href="/funding"
                    className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
                  >
                    Funding Solution
                  </Link>
                  <Link
                    href="/meeting"
                    className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
                  >
                    Meeting Room
                  </Link>
                </div>
              )}
            </div>
            <Link href="/leaders" className="text-gray-900 hover:text-blue-600">
              Leaders
            </Link>
            <Link href="/contact" className="text-gray-900 hover:text-blue-600">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-blue-600"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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
          <Link
            href="/"
            className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
          >
            About
          </Link>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
            >
              Services
            </button>
            {isDropdownOpen && (
              <div className="pl-4">
                <Link
                  href="/training"
                  className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
                >
                  Training
                </Link>
                <Link
                  href="/funding"
                  className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
                >
                  Funding Solution
                </Link>
                <Link
                  href="/meeting"
                  className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
                >
                  Meeting Room
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/leaders"
            className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
          >
            Leaders
          </Link>

          <Link
            href="/contact"
            className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
