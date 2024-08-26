import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="  mx-auto p-4 py-[2rem]">
      <div className="max-w-7xl m-auto px-2 md:px-8 flex md:flex-row flex-col items-center justify-between">
        <div className="mb-10">
          <div className="flex items-center justify-between h-screen">
            <div className="my-6 w-1/2 animated-box-fade">
              <h1 className="text-3xl font-bold my-4 helvetic-Head-font text-blue-600">
                Company Overview
              </h1>
              <p className="text-lg font-light md:w-[90%] w-full border-b   ">
                We pride ourselves on staying ahead with the latest technology
                and maintaining the highest standards of compliance and quality
                in all our ventures. Join us at PBS, where your business
                ambitions meet our comprehensive solutions, paving the way for
                mutual growth and success.
              </p>
            </div>
            <div className="animated-box-fade">
              <Image
                src="https://images.unsplash.com/photo-1557804483-ef3ae78eca57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcGFueSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                alt="Person giving thumbs up"
                className=" w-full h-96 object-cover shadow-sm"
                width={500}
                height={300}
              />
            </div>
          </div>
          <div className="flex justify-between items-cneter">
            <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration='800' data-aos-delay="400">
              <Image
                src="https://images.unsplash.com/photo-1557804483-ef3ae78eca57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcGFueSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                alt="Person giving thumbs up"
                className=" w-full h-96 object-cover shadow-sm"
                width={500}
                height={300}
              />
            </div>
            <div className="w-1/2">
              <div className="my-6 ">
                <h1 className="text-3xl font-bold my-4 helvetic-sub-title-font text-blue-600" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration='800' data-aos-delay="200">
                  Vision
                </h1>
                <p className="text-lg font-light  md:w-[90%] w-full border-b   montserrat-font border-gray-400 pb-4" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration='800' data-aos-delay="400">
                  Our vision is to become the leading support hub for budding
                  entrepreneurs across India, we catalyze innovative ideas into
                  successful enterprises through expert guidance, resources, and
                  training.
                </p>
              </div>
              <div className="my-6">
                <h1 className="text-3xl font-bold my-4 helvetic-sub-title-font text-blue-600" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration='800' data-aos-delay="600">
                  Mission
                </h1>
                <p className="text-lg font-light montserrat-font  md:w-[90%]   w-full" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration='800' data-aos-delay="800">
                  At PBS, our mission is clear: empower, support, and grow. We
                  offer personalized training, expert consulting, and dedicated
                  support services to help businesses navigate challenges and
                  scale new heights ensuring sustainable success
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div>
          <Image
            src="https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg?auto=compress&cs=tinysrgb&"
            alt="Person giving thumbs up"
            className=" w-[60rem]  object-cover shadow-sm"
            width={500}
            height={300}
          />
        </div> */}
      </div>
    </div>
  );
}
