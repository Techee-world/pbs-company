import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactUs: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <button className="bg-blue-100 text-blue-600 py-1 px-4 rounded-full text-sm mb-4">
            Contact Us
          </button>
          <h2 className="text-3xl sm:text-3xl font-bold text-gray-800 mb-4">
            Do you have any question?
          </h2>
          <p className="text-gray-500 mb-8 montserrat-font">
            For your car we will do everything advice, repairs and maintenance.
            We are the preferred choice by many car owners because...
          </p>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border text-sm bg-transparent montserrat-font border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your E-mail"
              className="border text-sm bg-transparent border-gray-300 montserrat-font rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="border text-sm bg-transparent border-gray-300 montserrat-font rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="border text-sm bg-transparent border-gray-300 montserrat-font rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              className="border bg-transparent border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:col-span-2 h-24"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg text-base font-medium sm:col-span-2 hover:bg-blue-700"
            >
              Submit Now
            </button>
          </form>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className="flex items-center p-6 rounded-lg border">
            <FaEnvelope className="text-blue-500 text-3xl mr-4" />
            <div className="montserrat-font">
              <h4 className="text-lg font-semibold text-gray-700">Email</h4>
              <p className="text-gray-500">michelle.rivera@example.com</p>
              <p className="text-gray-500">willie.jennings@example.com</p>
            </div>
          </div>
          <div className="flex items-center p-6 rounded-lg border">
            <FaPhone className="text-blue-500 text-3xl mr-4" />
            <div className="montserrat-font">
              <h4 className="text-lg font-semibold text-gray-700">Contacts</h4>
              <p className="text-gray-500">(270) 555-0117</p>
              <p className="text-gray-500">(704) 555-0127</p>
            </div>
          </div>
          {/* <div className="flex items-center p-6 bg-white rounded-lg shadow-lg">
            <FaCalendarAlt className="text-blue-500 text-3xl mr-4" />
            <div>
              <h4 className="text-lg font-semibold text-gray-700">Date</h4>
              <p className="text-gray-500">Saturday 10.Am To 2.Pm</p>
              <p className="text-gray-500">Sunday 2.Pm To 7.Pm</p>
            </div>
          </div> */}
          <div className="flex items-center p-6  rounded-lg border">
            <FaMapMarkerAlt className="text-blue-500 text-3xl mr-4" />
            <div className="montserrat-font">
              <h4 className="text-lg font-semibold text-gray-700">Location</h4>
              <p className="text-gray-500">
                8502 Preston Rd. Inglewood, Maine 98380
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
