"use client";
import Image, { StaticImageData } from "next/image";
import React, { ImgHTMLAttributes } from "react";


interface LeaderTypes {
  name:string;
  designation:string
  img?:string | StaticImageData
}

const LeadersCard = ({name,designation,img}:LeaderTypes) => {
  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="800"
        data-aos-delay="300"
        className="lg:w-fit w-full my-4 px-3 lg:px-0 border rounded-full borde-gray-400"
      >
        <Image
          src={img as string}
          alt="leaders images"
          height={500}
          width={300}
          className="object-cover rounded-lg border bg-blue-400 border-gray-400  h-40 lg:h-64 lg:w-64 w-full  "
        />
      </div>
      <div className="py-2 text-center ">
        <h1 className="text-base font-bold ">{name}</h1>
        <p className="text-sm">{designation}</p>
      </div>
    </div>
  );
};

export default LeadersCard;
