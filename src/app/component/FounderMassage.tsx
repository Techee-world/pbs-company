import Image from 'next/image'
import React from 'react';
import md from '../../../public/images/ceo.jpg'

const FounderMassage = () => {
  return (
    <div>
           <div className="h-fit pb-6 lg:pb-0 lg:mb-40  mb-20  lg:w-full bg-gradient-to-l from-blue-500 to-blue-950  text-gray-300 "
        // style={{
        //   backgroundImage: `url(${mdBackground.src})`,
        // }}
      >
      
        <div className="2xl:max-w-7xl pb-8  max-w-6xl m-auto relativ  flex flex-col md:flex-row gap-6 pt-16 items-start  text-white  md:space-x-6 px-4">
          {/* <div
            className=" border-8 z-10 -rotate-[9deg] absolute sm:w-[25rem] w-[21rem]  lg:w-80 h-[60vh] lg:h-[60vh] top-28 lg:top-32 left-4 lg:left-5 border-white p-1 mb-4 md:mb-0"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            {" "}
          </div> */}
          <Image
            src={md.src}
            alt="Sridhar Vembu"
            width={300}
            height={500}
            className="z-40 w-full object-cover  md:w-80 lg:w-96 rounded-2xl shadow-xl lg:h-[30rem] "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="500"
          />
          {/* <RiDoubleQuotesL
            className="w-16 h-16 text-white lg:absolute  top-16 left-80"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="700"
          /> */}
          <div
            className="max-w-4xl  "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="700"
          >
              <h3 className="lg:ml-6   text-white font-black helvetic-Head-font text-start text-3xl lg:text-4xl pb-6">Founder's Message</h3>
            <p className=" font-normal text-gray-300 lg:ml-6  ">
            Welcome to PBS, your trusted partner in navigating the complex landscape of business solutions. As a company dedicated to providing comprehensive 360-degree services, we are committed to empowering businesses of all sizes to achieve their goals.
              <br />
              Our unwavering focus on corporate solutions, financial services, and business consulting ensures that we offer a holistic approach to meeting your diverse needs. From the initial stages of company registration to the ongoing management of financial affairs, our expert team is equipped to provide tailored solutions that drive growth and success.

              <br />
              Whether you're a seasoned entrepreneur seeking to expand your operations or a startup embarking on a new venture, we are here to support your journey every step of the way. Our commitment to excellence, coupled with our deep understanding of the market, enables us to deliver innovative and effective solutions that exceed your expectations.
              <br />
              As you explore our website, we invite you to discover the breadth of services we offer and learn more about how we can help your business thrive. Thank you for choosing PBS as your trusted partner.
              <br />
              
            </p>
            <p className="mt-4 text-right text-base md:text-lg font-bold text-white"  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="800">
              - Habeebu Rahiman <br />
              <span className="text-sm md:text-base font-normal">Chairman & founder - PBS</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FounderMassage