import Image from 'next/image';
import React from 'react'
import ceo from '../../../public/ceo.png'

const LeadersCard = () => {
  return (
    <div className="w-fit my-6 border rounded-full border-gray-400 shadow-lg">
      <div>
        <Image
          src={ceo}
          alt="leaders images"
          height={500}
          width={300}
          className="object-cover  h-56 w-56 "
        />
      </div>
      <div className="py-4 text-center bg-white border border-gray-400 rounded-2xl">
        <h1 className="text-sm font-bold ">
          Lorem ipsum dolor sit{" "}
        </h1>
      </div>
    </div>
  );
}

export default LeadersCard