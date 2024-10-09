import Image from 'next/image'
import React from 'react'
import ourTeam from '../../../public/images/aboutsecond.jpg'
import Button from './Button'

const SecondAbout = () => {
  return (
    <div>
        <h2 className="mt-12 mx-4 mb-4 lg:hidden block bg-blue-200 rounded-full py-1 px-4 w-fit text-XL font-semibold">
           About <span className=" font-bold">PBS</span>
        </h2>
          <div className=" lg:py-16 px-4 md:px-16 lg:px-32 flex md:gap-8 flex-col-reverse md:flex-row justify-between items-center">
      {/* Left side content */}
      <div className="max-w-lg flex  flex-col gap-3 mb-8 md:mb-0">
        <h2 className="hidden lg:block bg-blue-200 rounded-full py-1 px-4 w-fit text-XL font-semibold">
           About <span className=" font-bold">PBS</span>
        </h2>
        <h1 className="md:text-[45px] text-3xl mt-6 lg:mt-0 helvetic-sub-title-font font-bold leading-none button-color-text mb-4">
        Transforming the way we do business for over 15 years
        </h1>
        <p className="text-gray-700  ">
        Founded by a team of seasoned entrepreneurs with a combined 40 years of industry experience, we are committed to offering bespoke strategies meticulously designed to foster growth and ensure long-term success. With a wide-ranging suite of services encompassing IT, Corporate, Finance Solutions and beyond, we provide comprehensive support to address every facet of your business needs. Our mission is to empower businesses to navigate challenges, thrive, and flourish.
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
          className="rounded-3xl lg:shadow-2xl"
        />
      </div>
    </div>
    </div>
  )
}

export default SecondAbout