'use client'
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
// import line from '../../../public/line.png'
import logo from '../../../public/images/logo.png'
import vission from '../../../public/images/vission.png'
import Seo from "../seo/Seo";

export default function AboutPage() {
  useEffect(() => {
    AOS.init({
      once: true,
      mirror: false,
    });
    AOS.refresh();
  }, []);

  return (
    <>
     <Seo
        title="About Us"
        description="Learn about PBS Group, our mission, values, and leadership team."
        url="https://pbsgroup.in/about"
        keywords='pbs, pbsgroup , pbs about'
        image="/images/og-image-about.jpg"
      />
    {/* <div className="h-auto w-full bg-no-repeat bg-cover center " style={{backgroundImage:`url(${line.src})`}}> */}
    <div className="relative min-h-screen">
      {/* Background Image */}
      {/* <div  
        className=""
        style={{backgroundImage: `url(${line.src})`}}
      ></div> */}

      {/* Content */}
      <div className="relative z-10 2xl:max-w-7xl max-w-6xl mx-auto p-4 py-[2rem] mb-28 lg:mb-0">
        <div className="flex md:flex-row flex-col items-center justify-between">
          <div className="mb-10 w-full">
            <div className="flex items-center lg:flex-row flex-col lg:justify-center lg:items-center gap-8 lg:gap-0 lg:mt-0 lg:h-screen">
              <div className=" w-full lg:w-full text-center animated-box-fade">
                <h1 className="text-3xl lg:text-5xl font-bold mb-10 helvetic-Head-font text-blue-600">
                  Company Overview
                </h1>
                <p className="text-base font-normal  w-full ">
                  We pride ourselves on staying ahead with the latest technology
                  and maintaining the highest standards of compliance and quality
                  in all our ventures. Join us at PBS, where your business
                  ambitions meet our comprehensive solutions, paving the way for
                  mutual growth and success.
                </p>
              </div>
              {/* <div data-aos="fade-left" data-aos-duration="800"
                data-aos-delay="400" >
                <Image
                  src={logo}
                  alt="Person giving thumbs up"
                  className="w-full h-96 object-cover "
                  width={500}
                  height={300}
                />
              </div> */}
            </div>

            {/* <div 
        className="h-auto w-full"
        style={{backgroundImage: `url(${line.src})`}}
      ></div> */}

            <div className="flex justify-between items-center  lg:flex-row flex-col-reverse lg:justify-between gap-8 lg:gap-0">
              <div
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                <Image
                  src={vission}
                  alt="Person giving thumbs up"
                  className="w-full h-96 object-cover shadow-sm"
                  width={500}
                  height={300}
                />
              </div>
            
              <div className="lg:w-1/2 w-full">
                <div className="my-6">
                  <h1
                    className="text-3xl lg:text-5xl font-bold my-4 helvetic-sub-title-font text-blue-600"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="800"
                    data-aos-delay="200"
                  >
                    Vision
                  </h1>
                  <p
                    className="text-lg font-light md:w-[90%] w-full border-b montserrat-font border-gray-400 pb-4"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="800"
                    data-aos-delay="400"
                  >
                    Our vision is to become the leading support hub for budding
                    entrepreneurs across India, we catalyze innovative ideas into
                    successful enterprises through expert guidance, resources, and
                    training.
                  </p>
                </div>
                <div className="my-6">
                  <h1
                    className="text-3xl font-bold lg:text-5xl my-4 helvetic-sub-title-font text-blue-600"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="800"
                    data-aos-delay="600"
                  >
                    Mission
                  </h1>
                  <p
                    className="text-lg font-light montserrat-font md:w-[90%] w-full border-b border-gray-400 pb-4"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="800"
                    data-aos-delay="800"
                  >
                    At PBS, our mission is clear: empower, support, and grow. We
                    offer personalized training, expert consulting, and dedicated
                    support services to help businesses navigate challenges and
                    scale new heights ensuring sustainable success
                  </p>
                </div>
                <div className="my-6">
                  <h1
                    className="text-3xl font-bold lg:text-5xl my-4 helvetic-sub-title-font text-blue-600"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="800"
                    data-aos-delay="600"
                  >
                    Values
                  </h1>
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-6">

                  {[Array(6).fill(0).map((_,i)=>
                  <div key={i} className="flex items-center gap-2">
<div className="w-1  h-6 bg-blue-600">
</div>
                  <span
                    className="text-lg font-light montserrat-font md:w-[90%] w-full"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="800"
                    data-aos-delay="800"
                  >
                   Accountability
                  </span>
                  </div>
                    )]}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     {/* </div> */}
    </>
  );
}