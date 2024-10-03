'use client'
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS

const Growth: React.FC = () => {
  useEffect(() => {
    AOS.init({
      once: true, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <>
    <div className="py-20 px-4 sm:px-6 lg:px-8 ">
      <div className="2xl:max-w-7xl max-w-6xl mx-auto">
        <h2
          className="text-3xl font-bold mb-6  sm:text-4xl helvetic-sub-title-font lg:text-4xl"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="800"
          data-aos-delay="300"
        >
          BUSINESS GROWTH DEVELOPMENT
        </h2>
        {/* <p
          className=" mb-10 text-lg montserrat-font helvetic-font"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="800"
          data-aos-delay="400"
        >
          Step into success with our dynamic funding options tailored to your
          business needs. Lorem Ipsum has been the industry s standard dummy
          text ever since the 1500s, when an unknown printer took a galley
          type and scrambled it to make a type specimen book. It has survived
          not only five centuries into electronic typesetting remaining
          essentially unchanged.
        </p> */}
        <div className="flex mb-6 items-center lg:flex-row flex-col mt-10 lg:mt-0">
          <div id="acs" className=" w-full  sm:mb-6 lg:mb-0 mb-0  pr-0 lg:pr-6">
            {/* <div className="w-full mb-6"> */}
              <h2 
               style={{fontWeight:600}}
                className="text-2xl font-bold  mb-4 helvetic-sub-title-sub-font"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="800"
                data-aos-delay="500"
              >
                Profile ACS
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 space-y-4 lg:grid-cols-3">
              <div className="w-full">
              <p
                className=" text-lg mb-2 font-semibold montserrat-font"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="800"
                data-aos-delay="600"
              >
Registration & Compliances
              </p>
              <ul className="grid grid-cols-1 ">
                {["Company/LLP Registration","Companies/LLP Annual Compliances","Firm/Proprietorship Registration","Trust/Society Registration and Renewal","12A/80G Registration","Trademark Registration","Start-up India Registration","MSME Registration"].map((item,index)=>
                <li className="list-disc " key={index}>{item}</li>
                )}
              </ul>

              </div>
            <div className="w-full mb-6">
              <p
                className="  text-lg mb-2 font-semibold montserrat-font"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="800"
                data-aos-delay="600"
              >
Audit & Certification
              </p>
              <ul className="grid grid-cols-1 ">
                {["Statutory Audit","Tax Audit","Stock Audit & Certification","Management Audit","Other Audits"].map((item,index)=>
                <li className="list-disc " key={index}>{item}</li>
                )}
              </ul>
            </div>
            <div className="w-full mb-6">
              <p
                className="  text-lg mb-2 font-semibold montserrat-font"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="800"
                data-aos-delay="600"
              >
Drafting & Documentation

              </p>
              <ul className="grid grid-cols-1 ">
                {["Partnership/Trust Deed Drafting","Legal Agreement Drafting","Payroll Management"].map((item,index)=>
                <li className="list-disc " key={index}>{item}</li>
                )}
              </ul>
            </div>
            <div className="w-full mb-6">
              <p
                className="  text-lg mb-2 font-semibold montserrat-font"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="800"
                data-aos-delay="600"
              >
Accounting & Book Keeping


              </p>
              <ul className="grid grid-cols-1 ">
                {["Accounts and Book Keeping","Cost Accounting and Record Maintenance","Project Reports"].map((item,index)=>
                <li className="list-disc " key={index}>{item}</li>
                )}
              </ul>
            </div>
            <div className="w-full mb-6">
              <p
                className="  text-lg mb-2 font-semibold montserrat-font"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="800"
                data-aos-delay="600"
              >
Income Tax Services


              </p>
              <ul className="grid grid-cols-1 ">
                {["Income Tax/TDS/TCS Return Filing","Income Tax Audit & Certification","PAN & TAN Services (UTI/NSDL)"].map((item,index)=>
                <li className="list-disc " key={index}>{item}</li>
                )}
              </ul>
            </div>
            <div className="w-full mb-6">
              <p
                className="  text-lg mb-2 font-semibold montserrat-font"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="800"
                data-aos-delay="600"
              >
GST Services


              </p>
              <ul className="grid grid-cols-1 ">
                {["GST Registration & Return Filing","GST Certification & Audit","Other GST Compliances","Notice & Personnel Representation Services"].map((item,index)=>
                <li className="list-disc " key={index}>{item}</li>
                )}
              </ul>
            </div>
            <div className="w-full mb-6">
              <p
                className="  text-lg mb-2 font-semibold montserrat-font"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="800"
                data-aos-delay="600"
              >
Management Consultancy


              </p>
              <ul className="grid grid-cols-1 ">
                {["Business Setup Advisory","Financial Consultancy","International Taxation","Compliance Consulting","Strategy Consulting"].map((item,index)=>
                <li className="list-disc " key={index}>{item}</li>
                )}
              </ul>
            </div>
            <div className="w-full mb-6">
              <p
                className="  text-lg mb-2 font-semibold montserrat-font"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="800"
                data-aos-delay="600"
              >
Human Resource Services


              </p>
              <ul className="grid grid-cols-1 ">
                {["ESI Registration & Returns","PF Registration & Return","Kerala Labour Welfare Fund","Payroll Management","HR Consultancy Services"].map((item,index)=>
                <li className="list-disc " key={index}>{item}</li>
                )}
              </ul>
            </div>
            <div className="w-full mb-6">
              <p
                className="  text-lg mb-2 font-semibold montserrat-font"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="800"
                data-aos-delay="600"
              >
Statutory & Compliances


              </p>
              <ul className="grid grid-cols-1 ">
                {["Import Export Licenses","Payroll Management","FEMA & RBI Compliances","Merger & Amalgamation"].map((item,index)=>
                <li className="list-disc " key={index}>{item}</li>
                )}
              </ul>
            </div>

              </div>
            {/* </div> */}
            {/* <div
              className="w-full h-auto rounded-lg"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="800"
              data-aos-delay="700"
            >
              <Image
                src="https://images.pexels.com/photos/2873277/pexels-photo-2873277.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Elevating Businesses Through Edge"
                className="w-full h-auto rounded-lg"
                width={100}
                height={30}
              />
            </div> */}
          </div>
          {/* <div className="flex items-center lg:flex-row flex-col gap-4 w-full mt-6 lg:mt-0 pl-0 lg:pl-6"> */}
            {/* <div className="w-full"> */}
              {/* <h2 id="ten"
                className="text-2xl font-bold  mb-4 helvetic-sub-title-sub-font"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="800"
                data-aos-delay="800"
              >
                ACS – financial and compliance Services
              </h2> */}
              {/* <div className="flex justify-between  items-center">
              <ul  data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="800"
              data-aos-delay="800" className=" ">
                <li className="list-disc">GST Services</li>
                <li className="list-disc">Income Tax Services</li>
                <li className="list-disc">Audit & Certification</li>
                <li className="list-disc">Registration & Compliances</li>
              </ul>
              <ul  data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="800"
              data-aos-delay="900" className=" ">
                <li className="list-disc">Accounting & Book Keeping</li>
                <li className="list-disc">Drafting & Documentation</li>
                <li className="list-disc">Management Consultancy</li>
                <li className="list-disc">Human Resource Services</li>
              </ul>

              </div> */}
              {/* <p
                className=" mb-6 text-lg"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="800"
                data-aos-delay="900"
              >
                Ready to scale up? Our strategic partnerships offer the
                capital infusion and expertise needed to elevate your
                business to new heights. Whether it's launching new products,
                entering new markets, or optimizing operations, we're your
                trusted ally for sustainable expansion.
              </p> */}
            {/* </div> */}
            {/* <div
              className="w-full h-auto rounded-lg"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="800"
              data-aos-delay="1000"
            >
              <Image
                src="https://images.pexels.com/photos/2422278/pexels-photo-2422278.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Elevating Businesses Through Edge"
                className="w-full h-auto rounded-lg"
                width={100}
                height={30}
              />
            </div> */}
          {/* </div> */}
        </div>
        <div className="flex items-center lg:flex-row flex-col mt-10 lg:mt-0">
          <div id="ybn" className=" w-full  sm:mb-6 lg:mb-0 mb-0  pr-0 lg:pr-6">
            {/* <div className="w-full mb-6"> */}
              <h2  
              style={{fontWeight:600}}
                className="text-2xl font-bold  mb-4 helvetic-sub-title-sub-font"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="800"
                data-aos-delay="500"
              >
                Profile YBN
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 space-y-4 lg:grid-cols-3 w-full">
              <div className="w-full">
              <p
                className=" text-lg mb-2 font-semibold montserrat-font"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="800"
                data-aos-delay="600"
              >
Management consulting
              </p>
              <ul className="grid grid-cols-1 ">
                {["Strategy for New Entrants","Strategy for Existing Businesses","Customer Strategy & Marketing"].map((item,index)=>
                <li className="list-disc " key={index}>{item}</li>
                )}
              </ul>

              </div>
            <div className="w-full mb-6">
              <p
                className="  text-lg mb-2 font-semibold montserrat-font"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="800"
                data-aos-delay="600"
              >
Startup consulting
              </p>
              <ul className="grid grid-cols-1 ">
                {["Business Idea Validation","Business Plan","Business Funding Support","Business Model Development","Setting up Operations","Market Positioning and Marketing Plan"].map((item,index)=>
                <li className="list-disc " key={index}>{item}</li>
                )}
              </ul>
            </div>
            <div className="w-full mb-6">
              <p
                className="  text-lg mb-2 font-semibold montserrat-font"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="800"
                data-aos-delay="600"
              >
Digital marketing & SEO

              </p>
              <ul className="grid grid-cols-1 ">
                {["Branding & Re-branding","Brand Building","Sales Improvement","Promotion Tactics ","Advertisement (outdoor/indoor) ","Advertisement Budget Planning"].map((item,index)=>
                <li className="list-disc " key={index}>{item}</li>
                )}
              </ul>
            </div>
            <div className="w-full mb-6">
              <p
                className="  text-lg mb-2 font-semibold montserrat-font"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="800"
                data-aos-delay="600"
              >
Franchise Development Program


              </p>
              <ul className="grid grid-cols-1 ">
                {["Franchise Development Program","Franchise Marketing","Franchise Audit"].map((item,index)=>
                <li className="list-disc " key={index}>{item}</li>
                )}
              </ul>
            </div>


              </div>
            {/* </div> */}
            {/* <div
              className="w-full h-auto rounded-lg"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="800"
              data-aos-delay="700"
            >
              <Image
                src="https://images.pexels.com/photos/2873277/pexels-photo-2873277.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Elevating Businesses Through Edge"
                className="w-full h-auto rounded-lg"
                width={100}
                height={30}
              />
            </div> */}
          </div>
          {/* <div className="flex items-center lg:flex-row flex-col gap-4 w-full mt-6 lg:mt-0 pl-0 lg:pl-6"> */}
            {/* <div className="w-full"> */}
              {/* <h2 id="ten"
                className="text-2xl font-bold  mb-4 helvetic-sub-title-sub-font"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="800"
                data-aos-delay="800"
              >
                ACS – financial and compliance Services
              </h2> */}
              {/* <div className="flex justify-between  items-center">
              <ul  data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="800"
              data-aos-delay="800" className=" ">
                <li className="list-disc">GST Services</li>
                <li className="list-disc">Income Tax Services</li>
                <li className="list-disc">Audit & Certification</li>
                <li className="list-disc">Registration & Compliances</li>
              </ul>
              <ul  data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="800"
              data-aos-delay="900" className=" ">
                <li className="list-disc">Accounting & Book Keeping</li>
                <li className="list-disc">Drafting & Documentation</li>
                <li className="list-disc">Management Consultancy</li>
                <li className="list-disc">Human Resource Services</li>
              </ul>

              </div> */}
              {/* <p
                className=" mb-6 text-lg"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="800"
                data-aos-delay="900"
              >
                Ready to scale up? Our strategic partnerships offer the
                capital infusion and expertise needed to elevate your
                business to new heights. Whether it's launching new products,
                entering new markets, or optimizing operations, we're your
                trusted ally for sustainable expansion.
              </p> */}
            {/* </div> */}
            {/* <div
              className="w-full h-auto rounded-lg"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="800"
              data-aos-delay="1000"
            >
              <Image
                src="https://images.pexels.com/photos/2422278/pexels-photo-2422278.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Elevating Businesses Through Edge"
                className="w-full h-auto rounded-lg"
                width={100}
                height={30}
              />
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
     
    </>
  );
};

export default Growth;
