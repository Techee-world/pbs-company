'use client'
import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt  } from 'react-icons/fa';
import { RiWhatsappFill } from "react-icons/ri";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

const ContactUs = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // New state to handle loading
  const [submitError, setSubmitError] = useState<string | null>(null); 

  useEffect(() => {
    AOS.init({
      once: true,
      mirror: false,
    });
    AOS.refresh();
  }, []);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.phone.length !== 10 && formData.phone.length < 11) {
      alert("Phone number must be exactly 10 digits.");
      return;
    }
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
   await fetch("https://script.google.com/macros/s/AKfycbzxvzglks9Qc1pTpfUf1B45vZbcjNEUxDxBwDdurIBuGsAxrCDpstNSRX3k4gi9UQLA/exec", {
      method: 'POST',
      body: JSON.stringify(formData as any),
    }).then(res => res.json())
      .then(data => {
        console.log(data , 'error');
      })
      .catch(err => console.log(err));
  };
  

  return (
    <section className="max-w-7xl mx-auto h-full pt-24 lg:pt-32 flex lg:pb-40 items-center justify-center mt-0 lg:mt-0 mb-10 lg:mb-0 py-12 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
        <div className="lg:col-span-2 flex flex-col justify-between">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-6"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="800"
              data-aos-delay="200">
            Do you have any questions?
          </h2>
          <form onSubmit={submitHandler} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="800"
              data-aos-delay="300"
              type="text"
              required
              placeholder="Your Name"
              className="border text-sm bg-transparent border-gray-400 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-950"
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="800"
              data-aos-delay="400"
              type="email"
              required
              placeholder="Your E-mail"
              className="border text-sm bg-transparent border-gray-400 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-950"
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="800"
              data-aos-delay="500"
              type="number"
              required
              maxLength={10}
              minLength={10}
              placeholder="Phone Number"
              className="border text-sm bg-transparent border-gray-400 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-950"
            />
            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="800"
              data-aos-delay="600"
              type="text"
              placeholder="Subject"
              className="border text-sm bg-transparent border-gray-400 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-950"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="800"
              data-aos-delay="700"
              required
              placeholder="Your Message"
              className="border bg-transparent border-gray-400 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-950 sm:col-span-2 h-28"
            ></textarea>
            <button
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="800"
              data-aos-delay="800"
              type="submit"
              className="button-color text-white py-3 px-6 rounded-lg text-base font-medium sm:col-span-2 hover:bg-blue-700"
            >
               {isSubmitting ? 'Submitting...' : 'Submit Now'}
            </button>
          </form>
          {submitError && <p className="text-red-500 mt-4">{submitError}</p>}
        </div>

        {/* Contact Information */}
        <div className="space-y-4 flex flex-col">
          <Link href='mailto:info@profile-bs.com'> 
            <div className="flex items-center p-3 rounded-lg border border-gray-400"
                 data-aos="fade-up"
                 data-aos-anchor-placement="top-bottom"
                 data-aos-duration="800"
                 data-aos-delay="400">
              <FaEnvelope className="button-color-text text-3xl mr-4" />
              <div>
                <h4 className="text-lg font-semibold text-gray-700">Email</h4>
                <p className="text-gray-500 text-sm">info@profile-bs.com</p>
              </div>
            </div>
          </Link>
          <Link href='https://wa.me/917902991199'>
            <div className="flex items-center p-3 rounded-lg border border-gray-400"
                 data-aos="fade-up"
                 data-aos-anchor-placement="top-bottom"
                 data-aos-duration="800"
                 data-aos-delay="600">
              <RiWhatsappFill className="button-color-text text-3xl mr-4" />
              <div>
                <h4 className="text-lg font-semibold text-gray-700">WhatsApp</h4>
                <p className="text-gray-500 text-sm">(+91)7902991199</p>
              </div>
            </div>
          </Link>
          <Link href='tel:+91 7902991199' >
          <div className="flex items-center p-3 rounded-lg border border-gray-400"
               data-aos="fade-up"
               data-aos-anchor-placement="top-bottom"
               data-aos-duration="800"
               data-aos-delay="600">
            <FaPhone className="button-color-text text-3xl mr-4" />
            <div>
              <h4 className="text-lg font-semibold text-gray-700">Contact</h4>
              <p className="text-gray-500 text-sm">(+91)7902991199</p>
            </div>
          </div>
          </Link>
          <div className="flex items-center p-3 rounded-lg border border-gray-400"
               data-aos="fade-up"
               data-aos-anchor-placement="top-bottom"
               data-aos-duration="800"
               data-aos-delay="800">
            <FaMapMarkerAlt className="button-color-text text-3xl mr-4" />
            <Link href='https://maps.app.goo.gl/XUL65q1d8D6kGgeC8'>
              <div>
                <h4 className="text-lg font-semibold text-gray-700">Location</h4>
                <p className="text-gray-500 text-sm">Kalloor building, Bypass Rd, Mukkam, Kerala 673602</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
