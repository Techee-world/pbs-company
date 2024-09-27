"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
// import line from '../../../public/line.png'
import overview from "../../../public/images/overview.jpg";
import vission from "../../../public/images/mission.jpg";
import value from "../../../public/images/value.jpg";
import Seo from "../seo/Seo";
import ourTeam from '../../../public/images/10.jpg'

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
        keywords="pbs, pbsgroup , pbs about"
        image="/images/og-image-about.jpg"
      />
      {/* <div className="h-auto w-full bg-no-repeat bg-cover center " style={{backgroundImage:`url(${line.src})`}}> */}
      <div
        style={{
          backgroundImage: `url('https://tegain-website-static-media-bucket.s3.ap-south-1.amazonaws.com/assets/images/21-05-2024/landing-gradient.svg')`,
          backgroundRepeat: "no-repeat",
        }}
        className="relative min-h-screen pb-40"
      >
        {/* Background Image */}
        {/* <div  
        className=""
        style={{backgroundImage: `url(${line.src})`}}
      ></div> */}

        {/* Content */}
            <div
      className="relative h-screen px-6 "
      style={{
        backgroundImage: `url(${ourTeam.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div> {/* Black overlay with low opacity */}
      <div className="relative z-10 text-center pt-40">
        <h1 className="text-4xl helvetic-sub-title-font font-black text-white mb-4 animated-box-fade animated-box-fade-2s">
        Who we are
        </h1>
        <p className="text-lg font-thin text-white lg:w-3/4 mx-auto w-full animated-box-fade animated-box-fade-4s">
        We pride ourselves on staying ahead with the latest technology
                  and maintaining the highest standards of compliance and quality
                  in all our ventures. Join us at PBS, where your business
                  ambitions meet our comprehensive solutions, paving the way for
                  mutual growth and success.
        </p>
      </div>
    </div>
        <div className="relative z-10 2xl:max-w-7xl max-w-6xl mx-auto p-4 py-[2rem] mb-28 lg:mb-0">
          <div className="flex md:flex-row flex-col items-center justify-between">
            <div className="mb-10 w-full">

              {/* <div 
        className="h-auto w-full"
        style={{backgroundImage: `url(${line.src})`}}
      ></div> */}

              <div className="flex justify-between items-center  border-b border-gray-400 pb-4  lg:flex-row mb-6 flex-col-reverse lg:justify-between gap-8 lg:gap-0">
                <div
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay="400"
                >
                  <Image
                    src={value}
                    alt="Person giving thumbs up"
                    className="w-full h-96 object-cover shadow-xl rounded-2xl"
                    width={500}
                    height={300}
                  />
                </div>

                <div className="lg:w-1/2 w-full">
                  <div className="my-6">
                    <h1
                      className="text-3xl lg:text-5xl font-bold my-4 helvetic-sub-title-font "
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
                      Our vision is to become the leading support hub for
                      budding entrepreneurs across India, we catalyze innovative
                      ideas into successful enterprises through expert guidance,
                      resources, and training.
                    </p>
                  </div>
                  <div className="my-6">
                    <h1
                      className="text-3xl font-bold lg:text-5xl my-4 helvetic-sub-title-font "
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-duration="800"
                      data-aos-delay="600"
                    >
                      Mission
                    </h1>
                    <p
                      className="text-lg font-light montserrat-font md:w-[90%] w-full"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-duration="800"
                      data-aos-delay="800"
                    >
                      At PBS, our mission is clear: empower, support, and grow.
                      We offer personalized training, expert consulting, and
                      dedicated support services to help businesses navigate
                      challenges and scale new heights ensuring sustainable
                      success
                    </p>
                  </div>
                  {/* <div className="my-6">
                  <h1
                    className="text-3xl font-bold lg:text-5xl my-4 helvetic-sub-title-font "
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
                </div> */}
                </div>
              </div>

                  <h1
                    className="text-3xl font-bold lg:text-5xl my-4 helvetic-sub-title-font "
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="800"
                    data-aos-delay="600"
                  >
                    Core Values
                  </h1>
              <div className="flex gap-10">
                <div className="my-6 w-full">
                  <div className="grid  grid-cols-1 gap-6">
                    {["Integrity ","  Quality "," Accountability "," Trust"," Innovation "," Competitive Collaboration"].map((item, i) => (
                          <ul key={i} className="flex items-center mt-3 gap-2">
                            <li
                              className="text-lg list-disc font-semibold montserrat-font md:w-[90%] w-full"
                              data-aos="fade-up"
                              data-aos-anchor-placement="top-bottom"
                              data-aos-duration="800"
                              data-aos-delay="800"
                            >
                              {item}
                            </li>
                          </ul>
                        ))
                    }
                  </div>
                </div>
                <Image
                  src={vission}
                  alt="Person giving thumbs up"
                  className="w-full h-96 object-cover shadow-xl rounded-2xl"
                  width={500}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
