import Image from 'next/image'
import React from 'react'
import ourTeam from '../../../public/images/aboutsecond.jpg'
import Button from './Button'

const SecondAbout = () => {
  return (
    <div>
          <div className=" py-16 px-4 md:px-16 lg:px-32 flex flex-col md:flex-row justify-between items-center">
      {/* Left side content */}
      <div className="max-w-lg flex  flex-col gap-3 mb-8 md:mb-0">
        <h2 className=" text-XL font-semibold mb-4">
           About <span className=" font-bold">PBS</span>
        </h2>
        <h1 className="md:text-[45px] helvetic-sub-title-font font-bold leading-none button-color-text mb-4">
        Transforming the way we do business for over 15 years
        </h1>
        <p className="text-gray-700 mb-6">
        Founded by a team of seasoned entrepreneurs with a combined 30 years of industry experience, is committed to offering bespoke strategies that are meticulously designed to foster growth and ensure long-term success. With a wide-ranging suite of services encompassing IT solutions, branding, legal advisory, and beyond, we provide comprehensive support to address every facet of your business needs. Our unwavering mission is to empower businesses to not only navigate challenges but to thrive and flourish in an ever-evolving and competitive market landscape.
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