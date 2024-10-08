'use client'
import React, { useEffect } from "react";
// import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS
import TrainingTopCart from "../TrainingTopCart";
// import service1 from '../../../../public/images/service1.jpg'
// import Link from "next/link";

const CardInService: React.FC = () => {
  useEffect(() => {
    AOS.init({
      once: true, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
    });

    // Refresh AOS when the component is re-rendered
    AOS.refresh();
  }, []);
  return (
    <div className=" lg:pt-36 pb-5">
      <div className="2xl:max-w-7xl max-w-6xl mx-auto p-4 lg:p-0">
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6  relative items-center lg:mb-2 mb-10 animated-box-fade ">
            {/* <Image
              src={service1}
              alt="Elevating Businesses Through Edge"
              className="w-full h-auto lg:w-full lg:h-[70vh] object-cover rounded-lg "
              width={400}
              height={100}
            /> */}
            <TrainingTopCart />
            <TrainingTopCart />
            <TrainingTopCart />
            <TrainingTopCart />
            <TrainingTopCart />
            <TrainingTopCart />
             {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent rounded-lg"> </div> */}
          </div>
      </div>
    </div>
  );
};

export default  CardInService
    ;
