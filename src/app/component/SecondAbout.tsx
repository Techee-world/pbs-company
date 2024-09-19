import Image from 'next/image'
import React from 'react'
import ourTeam from '../../../public/images/aboutsecond.jpg'
import Button from './Button'

const SecondAbout = () => {
  return (
    <div>
          <div className=" py-16 px-4 md:px-16 lg:px-32 flex flex-col md:flex-row justify-between items-center">
      {/* Left side content */}
      <div className="max-w-lg mb-8 md:mb-0">
        <h2 className=" text-XL font-semibold mb-4">
           About <span className=" font-bold">PBS</span>
        </h2>
        <h1 className="md:text-[45px] helvetic-sub-title-font font-bold leading-none button-color-text mb-4">
        Transforming the way we do Business from the last 15+ years
        </h1>
        <p className="text-gray-700 mb-6">
          Tegain improves workflows, drives real-world solutions, and creates growth for IT talents. Through planned collaborations, Tegain guides projects from concept to completion. This creates skilled experts and visionary tech solutions set for global success. Tegain pushes professionals towards tackling challenges more innovatively, leading to a vibrant and dynamic IT ecosystem where success is attainable to one and all.
        </p>
<Button title='Know More' />
      </div>

      {/* Right side image */}
      <div className="relative w-full max-w-md md:max-w-2xl">
        <Image
          src={ourTeam.src} // Add the correct path of your image
          alt="Tegain Team"
          width={600}
          height={800}
          className="rounded-3xl shadow-2xl"
        />
      </div>
    </div>
    </div>
  )
}

export default SecondAbout