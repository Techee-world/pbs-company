import Image from 'next/image'
import React from 'react'

// import NumberTicker from "@/components/magicui/number-ticker";


const ThreePoints = () => {
    const services = [
        {
          icon: 'https://cdn-icons-png.flaticon.com/128/1848/1848755.png', // Replace with actual path to the icon
          title: ' Years of Entrepreneurship Expertise',
          description:
            "With over four decades of entrepreneurial leadership and consulting expertise, we have a deep understanding of the challenges and opportunities that businesses face today. Our rich history is built on the success of guiding businesses across industries to realize their full potential. Whether you're a start-up or an established enterprise, we have the experience to navigate you through every phase of growth and innovation.",
            some:'40 +'
        },
        {
          icon: 'https://cdn-icons-png.flaticon.com/128/1848/1848755.png', // Replace with actual path to the icon
          title: ' World-Class Team of Experts',
          description:
           "Our team is our greatest asset. We bring together global expertise with professionals who have pursued education in leading institutions in Australia, and have experience working at renowned organizations like Deloitte, Aramco, Titan, and Wipro. This diverse background equips us to offer fresh, innovative insights to every project. Together, we strive to deliver practical, effective, and impactful solutions tailored to your specific needs.",
           some:'25 +'
        },
        {
          icon: 'https://cdn-icons-png.flaticon.com/128/1848/1848755.png', // Replace with actual path to the icon
          title: ' Solutions for Every Business Challenge',
          description:
            "At our core, we provide comprehensive solutions that tackle every aspect of your business needs. From technology consulting and process optimization to software development and business strategy, our 360-degree solutions ensure that no business problem is too big or small for us to solve. We believe in providing holistic, end-to-end support, empowering you to focus on what matters most—growing your business.",
            some:'50 +'
        },
      ]
    
      return (
        <section className="py-12 pb-20 px-10  ">
          <div className="container mx-auto py-12  bg-gradient-to-l shadow-2xl from-blue-500 to-blue-950 rounded-2xl text-gray-300 px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {services.map((service, index) => (
                <div key={index} className="text-center flex flex-col items-center">
                  <div className=" text-white text-4xl font-bold p-4 rounded-full ">
                    {/* <Image src={service.icon} alt={service.title} width={50} height={50} /> */}
                   {/* {service.some} */}
                   {/* <NumberTicker value={100} /> */}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className=" font-normal">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )
    
}

export default ThreePoints