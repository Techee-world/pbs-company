import React, { useEffect } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS

const ContactUs: React.FC = () => {
  useEffect(() => {
    AOS.init({
      once: true, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
    });

    // Refresh AOS when the component is re-rendered
    AOS.refresh();
  }, []);
  return (
    <section className=" h-screen   flex items-center justify-center mt-40 lg:mt-40 mb-28 lg:mb-0 py-40 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3   gap-8">
        <div className="lg:col-span-2">
          <button className="bg-blue-200 text-blue-600 py-1 px-4  rounded-full text-sm mb-4"  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="100">
            Contact Us
          </button>
          <h2 className="text-3xl sm:text-3xl font-bold text-gray-800 mb-6 helvetic-sub-title-font "  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="200">
            Do you have any question?
          </h2>
          {/* <p className="text-gray-500 mb-8 montserrat-font">
            For your car we will do everything advice, repairs and maintenance.
            We are the preferred choice by many car owners because...
          </p> */}
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
             data-aos="fade-up"
             data-aos-anchor-placement="top-bottom"
             data-aos-duration="800"
             data-aos-delay="300"
              type="text"
              placeholder="Your Name"
              className="border text-sm bg-transparent montserrat-font border-gray-400 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
             data-aos="fade-up"
             data-aos-anchor-placement="top-bottom"
             data-aos-duration="800"
             data-aos-delay="400"
              type="email"
              placeholder="Your E-mail"
              className="border text-sm bg-transparent border-gray-400 montserrat-font rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
             data-aos="fade-up"
             data-aos-anchor-placement="top-bottom"
             data-aos-duration="800"
             data-aos-delay="500"
              type="text"
              placeholder="Phone Number"
              className="border text-sm bg-transparent border-gray-400 montserrat-font rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
             data-aos="fade-up"
             data-aos-anchor-placement="top-bottom"
             data-aos-duration="800"
             data-aos-delay="600"
              type="text"
              placeholder="Subject"
              className="border text-sm bg-transparent border-gray-400 montserrat-font rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
             data-aos="fade-up"
             data-aos-anchor-placement="top-bottom"
             data-aos-duration="800"
             data-aos-delay="700"
              placeholder="Your Message"
              className="border bg-transparent border-gray-400 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:col-span-2 h-24"
            ></textarea>
            <button
             data-aos="fade-up"
             data-aos-anchor-placement="top-bottom"
             data-aos-duration="800"
             data-aos-delay="800"
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg text-base font-medium sm:col-span-2 hover:bg-blue-700"
            >
              Submit Now
            </button>
          </form>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className="flex items-center p-6 rounded-lg border border-gray-400"  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="400">
            <FaEnvelope className="text-blue-500 text-3xl mr-4" />
            <div className="montserrat-font">
              <h4 className="text-lg font-semibold text-gray-700 helvetic-sub-title-sub-font">Email</h4>
              <p className="text-gray-500">michelle.rivera@example.com</p>
              <p className="text-gray-500">willie.jennings@example.com</p>
            </div>
          </div>
          <div className="flex items-center p-6 rounded-lg border border-gray-400"  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="600">
            <FaPhone className="text-blue-500 text-3xl mr-4" />
            <div className="montserrat-font">
              <h4 className="text-lg font-semibold text-gray-700 helvetic-sub-title-sub-font">Contacts</h4>
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
          <div className="flex items-center p-6  rounded-lg border border-gray-400"  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="800">
            <FaMapMarkerAlt className="text-blue-500 text-3xl mr-4" />
            <div className="montserrat-font">
              <h4 className="text-lg font-semibold text-gray-700 helvetic-sub-title-sub-font">Location</h4>
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
