import Image from 'next/image';
import React from 'react'

const LeadersCard = () => {
  return (
    <div className='w-fit my-6'>
      <div>
        <Image
          src="https://www.investpr.org/wp-content/uploads/2021/01/John-EDITED-m.jpg"
          alt="leaders images"
          height={500}
          width={200}
          className='object-cover h-72 '
        />
      </div>
      <div className='py-4 text-center bg-gray-500'>
      <h1 className='text-xl font-bold text-gray-100'>Lorem ipsum dolor sit .</h1>
      </div>
    </div>
  );
}

export default LeadersCard