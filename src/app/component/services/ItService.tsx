'use client'
import React, { useEffect } from "react";
// import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS
import TrainingTopCart from "../TrainingTopCart";
// import service1 from '../../../../public/images/service1.jpg'
// import Link from "next/link";

const ItService: React.FC = () => {
  useEffect(() => {
    AOS.init({
      once: true, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
    });

    // Refresh AOS when the component is re-rendered
    AOS.refresh();
  }, []);
  return (
    <div 
    
    className=" p-4 ">
      <div style={{background:'rgb(251, 213, 213)'}}  className="2xl:max-w-7xl shadow-2xl max-w-6xl mx-auto p-4 lg:p-6 rounded-xl">
      {/* <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6  relative items-center lg:mb-20 mb-10 animated-box-fade "> */}
            {/* <Image
              src={service1}
              alt="Elevating Businesses Through Edge"
              className="w-full h-auto lg:w-full lg:h-[70vh] object-cover rounded-lg "
              width={400}
              height={100}
            /> */}
             {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent rounded-lg"> </div> */}
          {/* </div> */}
        <h1 className="text-3xl font-bold  mb-6 sm:text-5xl helvetic-Head-font lg:text-5xl"  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="100">
          PBS Tech
        </h1>
        {/* <p className=" mb-10 text-lg  w-full helvetic-font"  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="200">
          We create dynamic websites and mobile apps tailored to your business needs, ensuring a seamless user experience across all platforms
        </p> */}
        <div className="flex lg:flex-row flex-col  gap-8">
          <div className="lg:border-r lg:border-gray-400 lg:pr-4" >

            <div className="w-full">
              <h2
              //  id="five" 
               className="text-2xl font-bold text-gray-900 mb-4 helvetic-sub-title-sub-font"  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="300">
               <span className="button-color-text">Application Development</span> 
              </h2>
    
              <p className=" mb-6 text-lg w-full"  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="400">
            We create dynamic websites and mobile apps tailored to your business needs, ensuring a seamless user experience across all platforms
              </p>
            </div>
            <div className="w-full">
              <h2
              //  id="five" 
               className="text-2xl font-bold text-gray-900 mb-4 helvetic-sub-title-sub-font"  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="300">
               <span className="button-color-text">Cloud Services and Solutions</span> 
              </h2>
    
              <p className=" mb-6 text-lg w-full"  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="400">
            Our cloud solutions provide scalable infrastructure, optimized application performance, secure storage, and seamless integration to streamline your business operations
              </p>
            </div>
            <div>
              <h2
              //  id="six" 
               className="text-2xl font-bold text-gray-900 mb-4 helvetic-sub-title-sub-font"  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="500">
               <span className="button-color-text">Cybersecurity</span>  
              </h2>
              <p className=" mb-6 text-lg w-full"  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="600">
                Protect your digital assets with our comprehensive cybersecurity services, including application security, network protection, and 24/7 threat monitoring
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 helvetic-sub-title-sub-font"  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="700">
               <span className="button-color-text">IT Infrastructure Services</span> 
              </h2>
              <p className=" mb-6 text-lg w-full"  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="800">
               From IT management to equipment installation, we provide complete infrastructure solutions that ensure smooth, secure, and efficient operations for businesses
              </p>
            </div>
          </div>

          <div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 helvetic-sub-title-sub-font"  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="700">
               <span className="button-color-text">Data Engineering and Analytics</span> 
              </h2>
              <p className=" mb-6 text-lg w-full"  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="800">
              Unlock the full potential of your data with our analytics services, from data warehousing and business intelligence to advanced data governance and security
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 helvetic-sub-title-sub-font"  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="700">
               <span className="button-color-text">IT Compliance Assurance</span> 
              </h2>
              <p className=" mb-6 text-lg w-full"  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="800">
            We help businesses meet industry security standards and regulatory frameworks, ensuring compliance with GDPR, HIPAA, and other critical requirements
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 helvetic-sub-title-sub-font"  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="700">
               <span className="button-color-text">DevOps Services</span> 
              </h2>
              <p className=" mb-6 text-lg w-full"  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="800">
              Streamline your software development and operations processes with our DevOps services, including version control, automated software delivery, and system monitoring
              </p>
            </div>

          </div>
          {/* <div className="flex items-center">
            <Image
              src="https://images.pexels.com/photos/3205570/pexels-photo-3205570.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Elevating Businesses Through Edge"
              className="w-full h-auto rounded-lg "
              width={400}
              height={100}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ItService;
