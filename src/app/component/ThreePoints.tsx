'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';

const ThreePoints = () => {
  const services = [
    {
      icon: 'https://cdn-icons-png.flaticon.com/128/1848/1848755.png', // Replace with actual path to the icon
      title: 'Years of Entrepreneurship Expertise',
      description:
        "With over four decades of entrepreneurial leadership and consulting expertise, we have a deep understanding of the challenges and opportunities that businesses face today. Our rich history is built on the success of guiding businesses across industries to realize their full potential. Whether you're a start-up or an established enterprise, we have the experience to navigate you through every phase of growth and innovation.",
      some: 40
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/128/1848/1848755.png', // Replace with actual path to the icon
      title: 'World-Class Team of Experts',
      description:
        "Our team is our greatest asset. We bring together global expertise with professionals who have pursued education in leading institutions in Australia, and have experience working at renowned organizations like Deloitte, Aramco, Titan, and Wipro. This diverse background equips us to offer fresh, innovative insights to every project. Together, we strive to deliver practical, effective, and impactful solutions tailored to your specific needs.",
      some: 25
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/128/1848/1848755.png', // Replace with actual path to the icon
      title: 'Solutions for Every Business Challenge',
      description:
        "At our core, we provide comprehensive solutions that tackle every aspect of your business needs. From technology consulting and process optimization to software development and business strategy, our 360-degree solutions ensure that no business problem is too big or small for us to solve. We believe in providing holistic, end-to-end support, empowering you to focus on what matters most—growing your business.",
      some: 50
    },
  ];

  const CountUp = (target: number) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const duration = 2000; // total animation time in milliseconds
      const increment = target / (duration / 100); // number to increase every 100ms

      const interval = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(interval);
        } else {
          setCount(Math.floor(start));
        }
      }, 100); // update the number every 100ms

      return () => clearInterval(interval); // cleanup on unmount
    }, [target]);

    return count;
  };

  return (
    <section className="py-12 pb-20 px-10">
      <div className="container mx-auto py-12 bg-gradient-to-l shadow-2xl from-blue-500 to-blue-950 rounded-2xl text-gray-300 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => {
            const animatedNumber = CountUp(service.some);

            return (
              <div key={index} className="text-center flex flex-col items-center">
                <div className="text-white text-4xl font-bold p-4 rounded-full">
                  {animatedNumber} +
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="font-normal">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ThreePoints;
