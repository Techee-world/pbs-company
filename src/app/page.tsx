'use client'
// import Banner from "./component/Banner";
// import {useEffect} from 'react'
import HomeTraining from "./component/HomeTraining";
import HomeFunding from "./component/HomeFunding";
import HomeMeetRoom from "./component/HomeMeetRoom";
import HomeAbout from "./component/HomeAbout";
import Seo from "./seo/Seo";
import Image from "next/image";
// import mdBackground from '../../public/images/bca-bg-1.png'
import md from '../../public/images/ceo.jpg'
import SecondBanner from "./component/SecondBanner";
import ShortBriefBanner from "./component/ShortBriefBanner";
import ThreePoints from "./component/ThreePoints";
import SecondAbout from "./component/SecondAbout";
import SecondWhoNeedUs from "./component/SecodWhoNeedUs";
// import SmoothScroll from 'smooth-scroll';

export default function Home() {

  return (
    <>
      <Seo
        title="home"
        description="pbs over all providing serivces"
        url="https://pbsgroup.in/about"
        image="/images/og-image-about.jpg"
      />
      {/* <Banner /> */}
      <div style={{backgroundImage:`url('https://tegain-website-static-media-bucket.s3.ap-south-1.amazonaws.com/assets/images/21-05-2024/landing-gradient.svg')`,
      backgroundRepeat: 'no-repeat',
     }} className="">

      <SecondBanner />
      <ShortBriefBanner />
      <SecondAbout />
      <ThreePoints />
      </div>

      <HomeAbout />
 
 <SecondWhoNeedUs />


      <div className="h-fit pb-6 lg:pb-0  lg:h-fit  lg:w-full bg-gradient-to-l from-blue-500 to-blue-950  text-gray-300 "
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
              <h3 className="lg:ml-6   text-white font-black helvetic-Head-font text-start text-3xl lg:text-4xl pb-6">Chairman's Message</h3>
            <p className="text-base font-normal text-gray-300 lg:ml-6  ">
              I am thrilled to announce the launch of our new business
              consultancy, dedicated to empowering businesses and professionals
              to reach their full potential. In today s rapidly evolving
              landscape, success requires not only strategic insight but also
              the continuous development of essential skills. That s why we are
              not just a consultancy—we are your partner in growth.
              <br />
              Our services go beyond traditional consulting. We offer
              comprehensive training programs designed to enhance both soft
              skills and technical expertise, ensuring that your team is
              equipped to meet the challenges of tomorrow. Whether you re
              looking to sharpen your leadership capabilities, improve
              communication within your organization, or master the latest
              technologies, our tailored solutions are here to guide you every
              step of the way.
              <br />
              At the heart of our mission is a commitment to excellence and a
              deep understanding of the unique needs of each client. We believe
              that by investing in people, we create the foundation for lasting
              success. I invite you to explore how we can collaborate to drive
              your business forward and achieve remarkable results.
              <br />
              Thank you for your trust, and I look forward to embarking on this
              journey with you.
              <br />
              <br />
              Warm regards,
            </p>
            <p className="mt-4 text-right text-base md:text-lg font-bold text-white"  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="800">
              - Habeebu Rahiman <br />
              <span className="text-sm md:text-base font-normal">MD - PBS</span>
            </p>
          </div>
        </div>
      </div>
      <HomeTraining />
      <HomeFunding />
      <HomeMeetRoom />
    </>
  );
}


// leader ship background image is change 
// 672 image in leader page md massage 