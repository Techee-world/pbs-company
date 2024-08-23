'use client'
import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A1128] text-gray-200 py-20 px-28">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
        <div>
          <h2 className="text-2xl font-semibold">PBS</h2>
          <p className="mt-2 font-thin text-sm">
            Financial planners help people to gain knowledge about wealth
            management and investments.
          </p>

        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul>
            <li className="mt-2">
              <Link
                href="/services"
                className="text-sm block  hover:text-blue-400"
              >
                Home
              </Link>
            </li>
            <li className="mt-2">
              <Link href="/faq" className="text-sm block hover:text-blue-400">
                About
              </Link>
            </li>
            <li className="mt-2">
              <Link
                href="/testimonials"
                className="text-sm block hover:text-blue-400"
              >
                Leaders
              </Link>
            </li>
            <li className="mt-2">
              <Link href="/about" className="text-sm block hover:text-blue-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul>
            <li className="mt-2">
              <Link
                href="/hosting"
                className="text-sm block hover:text-blue-400"
              >
                Individual
              </Link>
            </li>
            <li className="mt-2">
              <Link
                href="/cyber-security"
                className="text-sm block hover:text-blue-400"
              >
                Group 
              </Link>
            </li>
            <li className="mt-2">
              <Link
                href="/network-analysis"
                className="text-sm block hover:text-blue-400"
              >
               Job Oriented
              </Link>
            </li>
            <li className="mt-2">
              <Link
                href="/data-recovery"
                className="text-sm block hover:text-blue-400"
              >
                Soft Skill
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <p className="text-sm">
            The Latest News, Articles, Sent To Your Inbox Weekly.
          </p>
          <div className="flex mt-4 space-x-4">
            <Link
              href="https://facebook.com"
              className="p-2 bg-blue-600 rounded-full hover:bg-blue-800"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="https://twitter.com"
              className="p-2 bg-blue-600 rounded-full hover:bg-blue-800"
            >
              <FaTwitter />
            </Link>
            <Link
              href="https://linkedin.com"
              className="p-2 bg-blue-600 rounded-full hover:bg-blue-800"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href="https://pinterest.com"
              className="p-2 bg-blue-600 rounded-full hover:bg-blue-800"
            >
              <FaPinterestP />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
