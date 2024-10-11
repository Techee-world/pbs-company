'use client'
import React, { useEffect } from "react";
// import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS
import TrainingTopCart from "../TrainingTopCart";
// import service1 from '../../../../public/images/service1.jpg'
// import Link from "next/link";

const Training: React.FC = () => {
  useEffect(() => {
    AOS.init({
      once: true, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
    });

    // Refresh AOS when the component is re-rendered
    AOS.refresh();
  }, []);
  return (
    <div  className=" p-4 pb-20">
      <div style={{background:'rgb(147, 226, 202)'}}  className="2xl:max-w-7xl shadow-2xl max-w-6xl mx-auto p-6 rounded-xl lg:p-6 ">
      {/* <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6  relative items-center lg:mb-20 mb-10 animated-box-fade "> */}
            {/* <Image
              src={service1}
              alt="Elevating Businesses Through Edge"
              className="w-full h-auto lg:w-full lg:h-[70vh] object-cover rounded-lg "
              width={400}
              height={100}
            /> */}
            {/* <TrainingTopCart />
            <TrainingTopCart />
            <TrainingTopCart />
            <TrainingTopCart />
            <TrainingTopCart />
            <TrainingTopCart /> */}
             {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent rounded-lg"> </div> */}
          {/* </div> */}
        <h1 className="text-3xl font-bold  mb-6 sm:text-5xl helvetic-Head-font lg:text-5xl"  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="100">
          TRAINING
        </h1>
        <p className=" mb-10 text-lg  w-full helvetic-font"  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="200">
          Elevate Your Skills with Tailored Training Sessions Unlock your
          potential with personalised training sessions designed to meet your
          specific needs.
        </p>
        <div className="flex flex-col gap-8">
          <div >
            <div className="w-full">
              <h2 id="five" className="text-2xl font-bold text-gray-900 mb-4 helvetic-sub-title-sub-font"  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="300">
               <span className="button-color-text">Leadership Coaching</span> 
              </h2>
    
              <p className=" mb-6 text-lg w-full"  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="400">
             We empower professionals to enhance their leadership capabilities through personalized coaching sessions. Our focus is on developing essential skills for driving growth, fostering high-performance teams, and cultivating a positive organizational culture that inspires excellence
              </p>
            </div>
            <div>
              <h2 id="six" className="text-2xl font-bold text-gray-900 mb-4 helvetic-sub-title-sub-font"  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="500">
               <span className="button-color-text">Business Coaching</span>  
              </h2>
              <p className=" mb-6 text-lg w-full"  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="600">
                Our tailored business coaching service is designed to help entrepreneurs refine their strategies and optimize operations. We work closely with you to identify challenges, set actionable goals, and ensure sustainable success in a competitive landscape
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 helvetic-sub-title-sub-font"  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="700">
               <span className="button-color-text">Life Coaching</span> 
              </h2>
              <p className=" mb-6 text-lg w-full"  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="800">
               We provide supportive life coaching to help individuals navigate personal transitions and achieve a balanced, fulfilling life. Our coaches guide clients in setting meaningful goals, overcoming obstacles, and realizing their potential
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

        <div className="flex items-center lg:flex-row flex-col mt-10 lg:mt-0 ">
          <div className="flex items-center lg:flex-row flex-col gap-4 lg:border-r sm:mb-6 lg:mb-0 mb-0 border-gray-400 pr-0 lg:pr-6">
            <div  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="900">
              <h2 id="seven" className="text-2xl font-bold button-color-text mb-4 helvetic-sub-title-sub-font" >
              <span className="button-color-text">Corporate TrainingSoft Skills </span> 
              </h2>
              <p className=" mb-6 text-lg w-full">
              Our customized corporate training programs are aimed at enhancing employee skills and improving overall productivity. We assess your organization's unique needs to deliver targeted training that fosters collaboration and drives results
              </p>
            </div>
            {/* <div className="w-full h-auto rounded-lg "  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="1000">
            <Image
              src="https://images.pexels.com/photos/2873277/pexels-photo-2873277.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Elevating Businesses Through Edge"
              className="w-full h-auto rounded-lg "
              width={100}
              height={30}
            />
            </div> */}
          </div>
          <div className="flex items-center mt-6 lg:mt-0 lg:flex-row flex-col gap-4 pl-0 lg:pl-6">
            <div  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="900">
              <h2 id="eight" className="text-2xl font-bold button-color-text mb-4 helvetic-sub-title-sub-font">
               <span className="button-color-text">Placement Training</span> 
              </h2>
              <p className=" mb-6 text-lg w-full">
              We prepare job candidates for success in the competitive job market through comprehensive placement training. Our program equips individuals with essential skills, interview techniques, and confidence to excel in their careers
              </p>
            </div>
            {/* <div className="w-full h-auto rounded-lg "  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="1000">

            <Image
              src="https://images.pexels.com/photos/2422278/pexels-photo-2422278.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Elevating Businesses Through Edge"
              className="w-full h-auto rounded-lg "
              width={100}
              height={30}
            />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
