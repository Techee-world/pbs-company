import React from "react";
import LeadersCard from "../component/LeadersCard";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50  to-white">
      <div className="max-w-6xl m-auto py-10 mb-10 px-6 lg:px-0">
        <h1 className="text-2xl font-black text-center my-4">Our Team</h1>
        <p className="text-sm font-thin text-center montserrat-font">
          Our strength lies in our experienced directors and technical team, who
          bring a wealth of knowledge and innovation to every project.
        </p>
      </div>
      <div className="flex lg:flex-row flex-col-reverse items-start justify-center  gap-10 px-6 lg:px-20 py-20 bg-blue-950 text-gray-200">
        <div>
          <h2 className="text-2xl font-bold mb-4">Habeebu Rahiman , MD</h2>
          <p className="montserrat-font">
            I am thrilled to announce the launch of our new business
            consultancy, dedicated to empowering businesses and professionals to
            reach their full potential. In today's rapidly evolving landscape,
            success requires not only strategic insight but also the continuous
            development of essential skills. That's why we are not just a
            consultancy—we are your partner in growth.
            <br />
            Our services go beyond traditional consulting. We offer
            comprehensive training programs designed to enhance both soft skills
            and technical expertise, ensuring that your team is equipped to meet
            the challenges of tomorrow. Whether you're looking to sharpen your
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
          className="h-80 object-cover rounded-lg border-t-2 border-l-2 border-blue-300"
          width={250}
          height={100}
        />
      </div>
      <div className="max-w-6xl m-auto my-10">
        <div className="my-6">
          <h1 className="text-xl font-bold mt-4 text-center lg:text-start ">
            LEADERSHIP
          </h1>
          <div className="grid grid-cols-1 place-items-center lg:place-items-start md:grid-cols-2 lg:grid-cols-3 gap-4">
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
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center lg:place-items-start  lg:grid-cols-3 gap-4">
            <LeadersCard />
            <LeadersCard />
            <LeadersCard />
          </div>
        </div>
        <div className="my-6">
          <h1 className="text-xl font-bold mt-4  text-center lg:text-start ">
            MARKETING
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center lg:place-items-start  lg:grid-cols-3 gap-4">
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
