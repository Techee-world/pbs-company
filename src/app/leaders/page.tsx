'use client'
import React, { useEffect } from "react";
import LeadersCard from "../component/LeadersCard";
import Link from "next/link";
import Image from "next/image";
import { RiDoubleQuotesL } from "react-icons/ri";
import Button from "../component/Button";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS
import ourTeam from '../../../public/images/10.jpg'
import mdBackground from '../../../public/images/bca-bg-1.png'
import md from '../../../public/images/md.jpeg'

const Page = () => {  // Changed 'page' to 'Page'
  useEffect(() => {
    AOS.init({
      once: true, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
    });

    // Refresh AOS when the component is re-rendered
    AOS.refresh();
  }, []);

  return (
    <div className=" ">
      <div
      className="relative h-screen px-6 "
      style={{
        backgroundImage: `url(${ourTeam.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div> {/* Black overlay with low opacity */}
      <div className="relative z-10 text-center pt-40">
        <h1 className="text-4xl helvetic-sub-title-font font-black text-white mb-4 animated-box-fade animated-box-fade-2s">
          Our Team
        </h1>
        <p className="text-lg font-thin text-white lg:w-3/4 mx-auto w-full animated-box-fade animated-box-fade-4s">
          Our strength lies in our experienced directors and technical team,
          who bring a wealth of knowledge and innovation to every project.
        </p>
      </div>
    </div>


      <div className="h-fit pb-6 lg:pb-0  lg:h-fit  lg:w-full lg:mt-[10rem] "
        style={{
          backgroundImage: `url(${mdBackground.src})`,
        }}
      >
        <h3 className="text-center  text-white font-black helvetic-Head-font text-3xl lg:text-4xl pt-10">CEO</h3>
        <div className="2xl:max-w-7xl pb-8 max-w-6xl m-auto relativ  flex flex-col md:flex-row gap-6 pt-6 items-start  text-white  md:space-x-6 px-4">
          {/* <div
            className=" border-8 z-10 -rotate-[9deg] absolute sm:w-[25rem] w-[21rem]  lg:w-80 h-[60vh] lg:h-[60vh] top-28 lg:top-32 left-4 lg:left-5 border-white p-1 mb-4 md:mb-0"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            {" "}
          </div> */}
          <Image
            src={md.src}
            alt="Sridhar Vembu"
            width={300}
            height={500}
            className="z-40 rounded-sm w-full border-[8px] border-white  md:w-80 lg:w-80 p-2"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="500"
          />
          {/* <RiDoubleQuotesL
            className="w-16 h-16 text-white lg:absolute  top-16 left-80"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="700"
          /> */}
          <div
            className="max-w-4xl  "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="700"
          >
            <p className="text-lg md:text-lg lg:ml-6  leading-relaxed">
              I am thrilled to announce the launch of our new business
              consultancy, dedicated to empowering businesses and professionals
              to reach their full potential. In today s rapidly evolving
              landscape, success requires not only strategic insight but also
              the continuous development of essential skills. That s why we are
              not just a consultancy—we are your partner in growth.
              <br />
              Our services go beyond traditional consulting. We offer
              comprehensive training programs designed to enhance both soft
              skills and technical expertise, ensuring that your team is
              equipped to meet the challenges of tomorrow. Whether you re
              looking to sharpen your leadership capabilities, improve
              communication within your organization, or master the latest
              technologies, our tailored solutions are here to guide you every
              step of the way.
              <br />
              At the heart of our mission is a commitment to excellence and a
              deep understanding of the unique needs of each client. We believe
              that by investing in people, we create the foundation for lasting
              success. I invite you to explore how we can collaborate to drive
              your business forward and achieve remarkable results.
              <br />
              Thank you for your trust, and I look forward to embarking on this
              journey with you.
              <br />
              <br />
              Warm regards,
            </p>
            <p className="mt-4 text-right text-base md:text-lg font-bold text-white"  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="1000">
              - Habeebu Rahiman <br />
              <span className="text-sm md:text-base font-normal">MD - PBS</span>
            </p>
          </div>
        </div>
      </div>

      <div className="2xl:max-w-7xl max-w-6xl m-auto my-20">
        <div className="my-6 ">
          <h1 className="text-xl font-bold mt-4 text-center lg:text-start helvetic-sub-title-sub-font">
            LEADERSHIP
          </h1>
          <div className="grid grid-cols-2 place-items-center lg:place-items-start md:grid-cols-2 lg:grid-cols-4 gap-4">
            <LeadersCard />
            <LeadersCard />
            <LeadersCard />
            <LeadersCard />
          </div>
        </div>
        <div className="my-6">
          <h1 className="text-xl font-bold mt-4  text-center  lg:text-start helvetic-sub-title-sub-font">
            ADMINISTRATION
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center lg:place-items-start  lg:grid-cols-3 gap-4">
            <LeadersCard />
          </div>
        </div>
        <div className="my-6">
          <h1 className="text-xl font-bold mt-4  text-center lg:text-start helvetic-sub-title-sub-font ">
            BUSINESS DEVELOPMENT
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-2 place-items-center lg:place-items-start  lg:grid-cols-4 gap-4">
            <LeadersCard />
            <LeadersCard />
            <LeadersCard />
            <LeadersCard />
          </div>
        </div>
        <div className="my-6">
          <h1 className="text-xl font-bold mt-4  text-center lg:text-start  helvetic-sub-title-sub-font">
            MARKETING
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-2 place-items-center lg:place-items-start  lg:grid-cols-4 gap-4">
            <LeadersCard />
            <LeadersCard />
            <LeadersCard />
            <LeadersCard />
          </div>
        </div>
      </div>
      <div className="2xl:max-w-7xl max-w-6xl m-auto lg:py-16 pb-12 lg:pb-0 flex px-6 lg:px-0 flex-col items-center">
        <h1 className="text-2xl font-bold text-center my-4 helvetic-Head-font">
          Ask Questions
        </h1>
        <p className="text-lg font-thin text-center ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione fuga
          modi perspiciatis voluptatum quaerat sed, accusamus numquam voluptas,
          minus vel, ullam odit aliquam facere esse.Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Ratione fuga modi perspiciatis
          voluptatum quaerat sed, accusamus numquam voluptas, minus vel, ullam
          odit aliquam facere esse.
        </p>
        <Link href="/contact">
          <Button title="Contact" />
        </Link>
      </div>
    </div>
  );
};

export default Page;  // Also make sure to export 'Page' with uppercase