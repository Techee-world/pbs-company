'use client'
import Image from 'next/image';
import React from 'react'
import ceo from '../../../public/ceo.png'

const LeadersCard = () => {
  return (
      <div>
    <div data-aos="zoom-in"data-aos-delay="700" data-aos-duration="600"  className="lg:w-fit w-full my-4 px-3 lg:px-3 border rounded-full borde-gray-400">
        <Image
          src={ceo}
          alt="leaders images"
          height={500}
          width={300}
          className="object-cover rounded-lg border bg-blue-400 border-gray-400  h-40 lg:h-64 lg:w-64 w-full  "
        />
    </div>
      <div className="py-2 text-center ">
        <h1 className="text-sm font-bold ">
          Lorem ipsum dolor sit{" "}
        </h1>
      </div>
    </div>
  );
}

export default LeadersCard