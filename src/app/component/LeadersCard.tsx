import Image from 'next/image';
import React from 'react'
import ceo from '../../../public/ceo.png'

const LeadersCard = () => {
  return (
      <div>
    <div className="w-fit my-4 border rounded-full borde-gray-400">
        <Image
          src={ceo}
          alt="leaders images"
          height={500}
          width={300}
          className="object-cover rounded-lg border border-gray-400 h-64 w-64 "
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