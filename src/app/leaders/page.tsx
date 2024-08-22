import React from "react";
import LeadersCard from "../component/LeadersCard";
import Link from "next/link";

const page = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50  to-white">
      <div className="max-w-6xl m-auto py-10 mb-10 px-6 lg:px-0">
        <h1 className="text-2xl font-black text-center my-4">Our Team</h1>
        <p className="text-sm font-thin text-center montserrat-font">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione fuga
          modi perspiciatis voluptatum quaerat sed, accusamus numquam voluptas,
          minus vel, ullam odit aliquam facere esse. , amet consectetur
          adipisicing elit. Ratione fuga modi perspiciatis voluptatum quaerat
          sed, accusamus numquam voluptas, minus vel, ullam odit aliquam facere
          esse.
        </p>
      </div>
      <div className="flex lg:flex-row flex-col-reverse items-start justify-center  gap-10 px-6 lg:px-20 py-20 bg-blue-950 text-gray-200">
        <div>
          <h2 className="text-2xl font-bold mb-4">Alino-Devic , ceo</h2>
          <p className="montserrat-font">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem a aut
            ex dolore error, sint saepe ut cum, nostrum nihil harum rerum! Non
            quas minima illo cum perspiciatis eos asperiores, aliquid alias
            nulla exercitationem sequi tempora cupiditate sint, et eum. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ullam
            ea, laboriosam reprehenderit assumenda nostrum quibusdam explicabo
            corrupti unde, voluptatibus dolore fuga, placeat optio veniam
            consequatur laborum qui debitis maxime!.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Autem a aut ex dolore error, sint
            saepe ut cum, nostrum nihil harum rerum! Non quas minima illo cum
            perspiciatis eos asperiores, aliquid alias nulla exercitationem
            sequi tempora cupiditate sint, et eum. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Aspernatur ullam ea, laboriosam
            reprehenderit assumenda nostrum quibusdam explicabo corrupti unde,
            voluptatibus dolore fuga, placeat optio veniam consequatur laborum
            qui debitis maxime!
          </p>
        </div>
        <img
          src="https://www.investpr.org/wp-content/uploads/2023/07/ELLA-WEBSITE-EDITED-m.jpg"
          alt="ceo"
          className="h-80 object-cover rounded-tl-[120px] border-t-2 border-l-2 border-blue-300"
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
