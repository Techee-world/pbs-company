"use client";
import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import logo from "../../../public/images/darkLogo.png";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-[#0A1128]  text-gray-200  pt-48 pb-16 px-4 sm:px-6 lg:px-8 relative lg:pt-40">
        {/* <div
          className="bg-blue-600 w-full md:w-[60rem] rounded-lg z-50 -mt-60 mb-12 lg:-mt-0 lg:mb-0 lg:absolute -top-28 left-64 transform -translate-x-1/2 -translate-y-1/2 px-4 md:px-10 py-14 md:py-28"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="800"
          data-aos-delay="400"
        >
          <h3
            className="helvetic-sub-title-font text-2xl md:text-4xl text-center text-white"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="500"
          >
            Be a part of The PBS
          </h3>
        </div> */}
        <div   data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="800"
          data-aos-delay="400" className="  max-w-3xl m-auto -mt-72 mb-20 rounded-lg px-4">
          <div className="bg-blue-600 rounded-2xl  text-white w-full flex  justify-center  items-center h-28 lg:h-40 text-center">
            <Link href='/contact'><h4 className="helvetic-sub-title-font text-2xl md:text-4xl tex-white"> Contact Us</h4></Link> 
          </div>
        </div>
        <div className="2xl:max-w-7xl max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex-shrink-0">
              <Link href="/" aria-label="Home">
                <Image
                  src={logo}
                  alt="PSB Logo"
                  width={100}
                  height={100}
                  className="h-16 w-auto"
                  priority
                />
              </Link>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Navigate Business Success with Expert Consultation. Embark on your
              business journey with confidence! At PBS...
            </p>
          </div>

          <div className="w-fit">
            <h3 className="text-xl font-semibold mb-4 w-fit">Quick Links</h3>
            <ul className=" flex md:flex-col flex-row md:gap-2 gap-10 items-center w-full md:w-auto ">
              {["Home", "About", "Leaders", "Contact"].map((item) => (
                <li key={item} className="w-fit ">
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-sm hover:text-blue-400 w-fit transition duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* desktop  */}
          <div className="hidden lg:block">
            <h3 className="text-xl font-semibold mb-4 ">Our Services</h3>
            <div className="grid grid-cols-3 gap-4 -ml-40">
              <div>
                <h4 className="font-bold mb-2 h-8 text-gray-300">Training</h4>
                <ul className="space-y-2">
                  {["Individual", "Group", "Job Oriented", "Soft Skill"].map(
                    (item) => (
                      <li key={item}>
                        <Link
                          href={`/services`}
                          className="text-sm hover:text-blue-400 transition duration-300"
                        >
                          {item}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="space-y-4 -ml-8">
                <div>
                  <h4 className="font-bold mb-2 h-8 text-gray-300 w-40 ">
                    Funding Solution
                  </h4>
                  <ul className="space-y-2">
                    {["New Startups", "Seeking Expansion"].map((item) => (
                      <li key={item}>
                        <Link
                          href="/funding"
                          className="text-sm hover:text-blue-400 transition duration-300"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-2  text-gray-300 h-8">
                  Meeting Room
                </h4>
                <ul className="space-y-2">
                  {["Training Room", "Conference Hall"].map((item) => (
                    <li key={item}>
                      <Link
                        href="/meeting"
                        className="text-sm hover:text-blue-400 transition duration-300"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* desktop  */}
          {/* mobile view  */}
          <div className="lg:hidden">
            <h3 className="text-center mb-4">Our Services</h3>
            <div className="flex items-start gap-6 justify-around">
              <div>
                <h4 className="font-bold mb-2 h-8 text-sm text-gray-300">
                  Training
                </h4>
                <ul className="">
                  {["Individual", "Group", "Job Oriented", "Soft Skill"].map(
                    (item) => (
                      <li key={item}>
                        <Link
                          href="/services"
                          className="text-xs hover:text-blue-400 transition duration-300"
                        >
                          {item}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="">
                <div>
                  <h4 className="font-bold mb-2 h-8 text-gray-300 text-sm w-40 ">
                    Funding Solution
                  </h4>
                  <ul className="space-y-2">
                    {["New Startups", "Seeking Expansion"].map((item) => (
                      <li key={item}>
                        <Link
                          href="/services"
                          className="text-xs hover:text-blue-400 transition duration-300"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-2  text-sm text-gray-300 h-8">
                  Meeting Room
                </h4>
                <ul className="space-y-2">
                  {["Training Room", "Conference Hall"].map((item) => (
                    <li key={item}>
                      <Link
                        href="/services"
                        className="text-xs hover:text-blue-400 transition duration-300"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* mobile view  */}

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <p className="text-sm text-gray-300">
              The Latest News, Articles, Sent To Your Inbox Weekly.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: FaFacebookF, href: "https://facebook.com" },
                { icon: FaTwitter, href: "https://twitter.com" },
                { icon: FaLinkedinIn, href: "https://linkedin.com" },
                { icon: FaPinterestP, href: "https://pinterest.com" },
              ].map(({ icon: Icon, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
