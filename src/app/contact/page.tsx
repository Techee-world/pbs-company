'use client'
import React, { useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt ,FaWhatsapp } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

const ContactUs = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      mirror: false,
    });
    AOS.refresh();
  }, []);

  return (
    <section className="max-w-7xl mx-auto h-full lg:pt-32 flex lg:pb-40 items-center justify-center mt-0 lg:mt-2 mb-28 lg:mb-0 py-12 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
        <div className="lg:col-span-2">
          <button
            className="bg-blue-200 button-color-text py-1 px-4 rounded-full text-sm mb-4"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            Contact Us
          </button>
          <h2
            className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            Do you have any questions?
          </h2>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="800"
              data-aos-delay="300"
              type="text"
              placeholder="Your Name"
              className="border text-sm bg-transparent border-gray-400 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-950"
            />
            <input
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="800"
              data-aos-delay="400"
              type="email"
              placeholder="Your E-mail"
              className="border text-sm bg-transparent border-gray-400 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-950"
            />
            <input
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="800"
              data-aos-delay="500"
              type="text"
              placeholder="Phone Number"
              className="border text-sm bg-transparent border-gray-400 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-950"
            />
            <input
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="800"
              data-aos-delay="600"
              type="text"
              placeholder="Subject"
              className="border text-sm bg-transparent border-gray-400 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-950"
            />
            <textarea
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="800"
              data-aos-delay="700"
              placeholder="Your Message"
              className="border bg-transparent border-gray-400 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-950 sm:col-span-2 h-24"
            ></textarea>
            <button
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="800"
              data-aos-delay="800"
              type="submit"
              className="button-color text-white py-3 px-6 rounded-lg text-base font-medium sm:col-span-2 hover:bg-blue-700"
            >
              Submit Now
            </button>
          </form>
        </div>
        <div className="space-y-4 flex flex-col">
          <Link href='mailto:info@profile-bs.com'  > 
          <div 
            className="flex items-center p-3 rounded-lg border border-gray-400"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <FaEnvelope className="button-color-text text-3xl mr-4" />
            

            <div>
            <h4 className="text-lg font-semibold text-gray-700">Email</h4>

            <p className="text-gray-500">info@profile-bs.com</p>

            </div>
            

          
          </div>
            </Link>
            <Link href='https://wa.me/917902991199' >
            <div
            className="flex items-center p-3 rounded-lg border border-gray-400"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="600"
          >
            <FaWhatsapp className="button-color-text text-3xl mr-4" />
            <div>
              <h4 className="text-lg font-semibold text-gray-700">WhatsApp</h4>
              
              <p className="text-gray-500">(+91)7902991199</p>
            </div>
          </div>
          </Link>
          <div
            className="flex items-center p-3 rounded-lg border border-gray-400"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="600"
          >
            <FaPhone className="button-color-text text-3xl mr-4" />
            <div>
              <h4 className="text-lg font-semibold text-gray-700">Contact</h4>
              
              <p className="text-gray-500">(+91)7902991199</p>
            </div>
          </div>
          <div
            className="flex items-center p-3 rounded-lg border border-gray-400"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="800"
          >
            <FaMapMarkerAlt className="button-color-text text-3xl mr-4" />
            <Link href='https://maps.app.goo.gl/XUL65q1d8D6kGgeC8' > 
            <div>
              <h4 className="text-lg font-semibold text-gray-700">Location</h4>
              <p className="text-gray-500">
              Kalloor building, Bypass Rd, Mukkam, Kerala 673602
              </p>
            </div>
            </Link>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
