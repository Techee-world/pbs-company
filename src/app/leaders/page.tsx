import React from "react";
import LeadersCard from "../component/LeadersCard";
import Link from "next/link";
import Image from "next/image";
import { RiDoubleQuotesL } from "react-icons/ri";
import Button from "../component/Button";

const page = () => {
  return (
    <div className=" ">
      <div className="max-w-7xl m-auto h-screen  px-6   grid place-items-center ">
        <div className="">
          <h1 className="text-4xl font-black text-center helvetic-Head-font text-slate-900 mb-4 animated-box-fade animated-box-fade-2s ">
            Our Team
          </h1>
          <p className="text-lg font-thin text-center  lg:w-3/4 m-auto w-full animated-box-fade animated-box-fade-4s ">
            Our strength lies in our experienced directors and technical team,
            who bring a wealth of knowledge and innovation to every project.
          </p>
        </div>
      </div>
      <div className="h-[195vh] lg:h-[100vh] lg:w-full lg:mt-[10rem]"
        style={{
          backgroundImage: `url("https://www.thechennaiangels.com/wp-content/uploads/2023/03/bca-bg-1.png")`,
          // height: "100vh",
          // width: "100%",
          // marginTop: "10rem",
        }}
      >
        <div className="max-w-7xl m-auto relative mt- flex flex-col md:flex-row gap-6 pt-28  items-center  text-white  md:space-x-6 px-4">
          <div
            className=" border-8 z-10 -rotate-[9deg] absolute w-[25rem]  lg:w-80 h-[58vh] lg:h-[60vh] top-28 lg:top-32 left-4 lg:left-5 border-white p-1 mb-4 md:mb-0"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            {" "}
          </div>
          <Image
            src="https://th.bing.com/th?id=OIP.MkDe0JAMDwUZ78yqJaWUIAHaKX&w=211&h=295&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
            alt="Sridhar Vembu"
            width={300}
            height={500}
            className="z-40 rounded-sm w-full md:w-80 lg:w-96 p-4"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="500"
          />
          <RiDoubleQuotesL
            className="w-16 h-16 text-white lg:absolute  top-16 left-80"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="700"
          />
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

      <div className="max-w-7xl m-auto my-20">
        <div className="my-6 ">
          <h1 className="text-xl font-bold mt-4 text-center lg:text-start helvetic-sub-title-sub-font">
            LEADERSHIP
          </h1>
          <div className="grid grid-cols-1 place-items-center lg:place-items-start md:grid-cols-2 lg:grid-cols-4 gap-4">
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
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center lg:place-items-start  lg:grid-cols-4 gap-4">
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
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center lg:place-items-start  lg:grid-cols-4 gap-4">
            <LeadersCard />
            <LeadersCard />
            <LeadersCard />
            <LeadersCard />
          </div>
        </div>
      </div>
      <div className="max-w-7xl m-auto py-16 flex px-6 lg:px-0 flex-col items-center">
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

export default page;
