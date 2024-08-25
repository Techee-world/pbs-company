import React from "react";
import LeadersCard from "../component/LeadersCard";
import Link from "next/link";
import Image from "next/image";
import { RiDoubleQuotesL } from "react-icons/ri";

const page = () => {
  return (
    <div className="max-w-7xl m-auto py-28 ">
      <div className=" py-12 my-10 px-6 lg:px-0 bg-blue-500 text-white">
        <h1 className="text-4xl font-black text-center helvetic-Head-font text-slate-200 my-4">
          Our Team
        </h1>
        <p className="text-lg font-thin text-center  lg:w-3/4 m-auto w-full">
          Our strength lies in our experienced directors and technical team, who
          bring a wealth of knowledge and innovation to every project.
        </p>
      </div>
      <div className="relative mt-32 flex flex-col md:flex-row gap-6 items-center  md:space-x-6 px-4">
        <div className="border-8 z-10 -rotate-[9deg] absolute w-80 h-[60vh] top-12 left-8 border-orange-500 p-1 mb-4 md:mb-0">
        </div>
            <Image src="https://th.bing.com/th?id=OIP.MkDe0JAMDwUZ78yqJaWUIAHaKX&w=211&h=295&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="Sridhar Vembu" width={300} height={500} className="z-40 rounded-sm w-full md:w-80 lg:w-96"/>
                <RiDoubleQuotesL className="w-16 h-16 text-orange-500 absolute  -top-12 left-80" />
        <div className="max-w-4xl  ">
            <p className="text-base md:text-lg ml-6  text-gray-700 leading-relaxed">
                I am thrilled to announce the launch of our new business
            consultancy, dedicated to empowering businesses and professionals to
            reach their full potential. In today s rapidly evolving landscape,
            success requires not only strategic insight but also the continuous
            development of essential skills. That s why we are not just a
            consultancy—we are your partner in growth.
            <br />
            Our services go beyond traditional consulting. We offer
            comprehensive training programs designed to enhance both soft skills
            and technical expertise, ensuring that your team is equipped to meet
            the challenges of tomorrow. Whether you re looking to sharpen your
            leadership capabilities, improve communication within your
            organization, or master the latest technologies, our tailored
            solutions are here to guide you every step of the way.
            <br />
            At the heart of our mission is a commitment to excellence and a deep
            understanding of the unique needs of each client. We believe that by
            investing in people, we create the foundation for lasting success. I
            invite you to explore how we can collaborate to drive your business
            forward and achieve remarkable results.
            <br />

            Thank you for your trust, and I look forward to embarking on this
            journey with you.
            <br />
            <br />
            Warm regards,
            </p>
            <p className="mt-4 text-right text-base md:text-lg font-bold text-orange-500">
                - Habeebu Rahiman <br />
                <span className="text-sm md:text-base font-normal">MD - PBS</span>
            </p>
        </div>
    </div>
      {/* <div
        className="flex lg:flex-row flex-col-reverse items-start justify-center  gap-10 px-6 lg:px-10 py-10   max-w-6xl rounded-lg  m-auto border border-gray-300"
      >
        <div>
          <h2 className="text-2xl font-bold mb-4">Habeebu Rahiman , MD</h2>
          <p className="">
            I am thrilled to announce the launch of our new business
            consultancy, dedicated to empowering businesses and professionals to
            reach their full potential. In today s rapidly evolving landscape,
            success requires not only strategic insight but also the continuous
            development of essential skills. That s why we are not just a
            consultancy—we are your partner in growth.
            <br />
            Our services go beyond traditional consulting. We offer
            comprehensive training programs designed to enhance both soft skills
            and technical expertise, ensuring that your team is equipped to meet
            the challenges of tomorrow. Whether you re looking to sharpen your
            leadership capabilities, improve communication within your
            organization, or master the latest technologies, our tailored
            solutions are here to guide you every step of the way.
            <br />
            At the heart of our mission is a commitment to excellence and a deep
            understanding of the unique needs of each client. We believe that by
            investing in people, we create the foundation for lasting success. I
            invite you to explore how we can collaborate to drive your business
            forward and achieve remarkable results.
            <br />
            <br />
            Thank you for your trust, and I look forward to embarking on this
            journey with you.
            <br />
            <br />
            Warm regards,
          </p>
        </div>
        <Image
          src="https://th.bing.com/th?id=OIP.MkDe0JAMDwUZ78yqJaWUIAHaKX&w=211&h=295&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
          alt="ceo"
          className="h-80 object-cover rounded-lg "
          width={250}
          height={100}
        />
      </div> */}
      <div className="max-w-6xl m-auto my-20">
        <div className="my-6 ">
          <h1 className="text-xl font-bold mt-4 text-center lg:text-start ">
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
          <h1 className="text-xl font-bold mt-4  text-center  lg:text-start ">
            ADMINISTRATION
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center lg:place-items-start  lg:grid-cols-3 gap-4">
            <LeadersCard />
          </div>
        </div>
        <div className="my-6">
          <h1 className="text-xl font-bold mt-4  text-center lg:text-start ">
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
          <h1 className="text-xl font-bold mt-4  text-center lg:text-start ">
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
      <div className="max-w-6xl m-auto py-16 flex px-6 lg:px-0 flex-col items-center">
        <h1 className="text-2xl font-bold text-center my-4">Ask Questions</h1>
        <p className="text-sm font-thin text-center montserrat-font">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione fuga
          modi perspiciatis voluptatum quaerat sed, accusamus numquam voluptas,
          minus vel, ullam odit aliquam facere esse.Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Ratione fuga modi perspiciatis
          voluptatum quaerat sed, accusamus numquam voluptas, minus vel, ullam
          odit aliquam facere esse.
        </p>
        <Link href="/contact">
          <button className=" bg-blue-950 text-white px-6 py-2 text-sm font-thin my-6">
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;