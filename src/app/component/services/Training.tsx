import React from "react";
import Image from "next/image";

const Training: React.FC = () => {
  return (
    <div className=" pt-40 pb-20 ">
      <div className="max-w-7xl mx-auto p-4 lg:p-0">
      <div className="flex relative items-center mb-20 animated-box-fade ">
            <Image
              src="https://images.pexels.com/photos/3205570/pexels-photo-3205570.jpeg?auto=compress&cs=tinysrgb"
              alt="Elevating Businesses Through Edge"
              className="w-full h-auto lg:w-full lg:h-[70vh] object-cover rounded-lg "
              width={400}
              height={100}
            />
             {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent rounded-lg"> </div> */}
          </div>
        <h1 className="text-3xl font-bold text-blue-600 mb-6 sm:text-5xl helvetic-Head-font lg:text-5xl"  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="100">
          TRAINING
        </h1>
        <p className="text-gray-600 mb-10 text-lg  w-full helvetic-font"  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="200">
          Elevate Your Skills with Tailored Training Sessions Unlock your
          potential with personalised training sessions designed to meet your
          specific needs.
        </p>
        <div className="flex flex-col gap-8">
          <div >
            <div className="w-full">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 helvetic-sub-title-sub-font"  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="300">
               <span className="text-blue-600">Individual</span>  Training
              </h2>
              <p className="text-gray-600 mb-6 text-lg w-full"  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="400">
                Dive deep into your chosen skill set with one-on-one sessions
                tailored to your pace and goals. Our expert trainers provide
                personalised guidance to maximise your learning experience.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 helvetic-sub-title-sub-font"  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="500">
               <span className="text-blue-600">Group</span>  Training
              </h2>
              <p className="text-gray-600 mb-6 text-lg w-full"  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="600">
                Join forces with like-minded individuals in our interactive
                group sessions. Collaborate, learn, and grow together under the
                guidance of seasoned professionals, fostering a supportive and
                dynamic learning environment.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 helvetic-sub-title-sub-font"  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="700">
               <span className="text-blue-600">Our job-oriented</span>  training programs
              </h2>
              <p className="text-gray-600 mb-6 text-lg w-full"  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="800">
                spanning 7 to 10 days, equip you with practical skills and
                industry insights to excel in your chosen field. Whether you re
                aiming for career advancement or seeking to acquire new skills,
                our training sessions are your pathway to success.
              </p>
            </div>
          </div>
          {/* <div className="flex items-center">
            <Image
              src="https://images.pexels.com/photos/3205570/pexels-photo-3205570.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Elevating Businesses Through Edge"
              className="w-full h-auto rounded-lg "
              width={400}
              height={100}
            />
          </div> */}
        </div>

        <div className="flex items-center lg:flex-row flex-col mt-10 lg:mt-0 ">
          <div className="flex items-center lg:flex-row flex-col gap-4 lg:border-r sm:mb-6 lg:mb-0 mb-0 border-gray-400 pr-0 lg:pr-6">
            <div  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="900">
              <h2 className="text-2xl font-bold text-blue-600 mb-4 helvetic-sub-title-sub-font" >
              <span className="text-blue-600">Soft Skills </span>  Development
              </h2>
              <p className="text-gray-600 mb-6 text-lg w-full">
                Training sessions focused on essential soft skills such as
                communication, teamwork, and problem-solving. Improve
                interpersonal skills to complement technical knowledge and boost
                overall performance.
              </p>
            </div>
            <div className="w-full h-auto rounded-lg "  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="1000">
            <Image
              src="https://images.pexels.com/photos/2873277/pexels-photo-2873277.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Elevating Businesses Through Edge"
              className="w-full h-auto rounded-lg "
              width={100}
              height={30}
            />
            </div>
          </div>
          <div className="flex items-center mt-6 lg:mt-0 g:flex-row flex-col gap-4 pl-0 lg:pl-6">
            <div  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="900">
              <h2 className="text-2xl font-bold text-blue-600 mb-4 helvetic-sub-title-sub-font">
               <span className="text-blue-600">Executive</span>  Coaching
              </h2>
              <p className="text-gray-600 mb-6 text-lg w-full">
                One-on-one coaching sessions for executives and managers to
                develop leadership skills and strategic thinking. Personalized
                feedback and development plans to enhance leadership
                capabilities.
              </p>
            </div>
            <div className="w-full h-auto rounded-lg "  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="1000">

            <Image
              src="https://images.pexels.com/photos/2422278/pexels-photo-2422278.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Elevating Businesses Through Edge"
              className="w-full h-auto rounded-lg "
              width={100}
              height={30}
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
