import Image from 'next/image';
import React from 'react'
import ceo from '../../../public/ceo.png'

const LeadersCard = () => {
  return (
      <div>
    <div className="lg:w-fit w-full my-4 border rounded-full borde-gray-400">
        <Image
          src={ceo}
          alt="leaders images"
          height={500}
          width={300}
          className="object-cover rounded-lg border bg-blue-400 border-gray-400  h-64 lg:w-64 w-full  "
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