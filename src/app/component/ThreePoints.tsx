'use client';
import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';

const ThreePoints = () => {
  const services = [
    {
      icon: 'https://cdn-icons-png.flaticon.com/128/1848/1848755.png',
      title: 'Years of Entrepreneurship Expertise',
      description:
        "With over four decades of entrepreneurial leadership and consulting expertise, we have a deep understanding of the challenges and opportunities that businesses face today. Our rich history is built on the success of guiding businesses across industries to realize their full potential. Whether you're a start-up or an established enterprise, we have the experience to navigate you through every phase of growth and innovation.",
      some: 40,
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/128/1848/1848755.png',
      title: 'World-Class Team of Experts',
      description:
        "Our team is our greatest asset. We bring together global expertise with professionals who have pursued education in leading institutions in Australia, and have experience working at renowned organizations like Deloitte, Aramco, Titan, and Wipro. This diverse background equips us to offer fresh, innovative insights to every project. Together, we strive to deliver practical, effective, and impactful solutions tailored to your specific needs.",
      some: 25,
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/128/1848/1848755.png',
      title: 'Solutions for Every Business Challenge',
      description:
        "At our core, we provide comprehensive solutions that tackle every aspect of your business needs. From technology consulting and process optimization to software development and business strategy, our 360-degree solutions ensure that no business problem is too big or small for us to solve. We believe in providing holistic, end-to-end support, empowering you to focus on what matters most—growing your business.",
      some: 50,
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Use Intersection Observer to detect when the section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once it is in view
        }
      },
      { threshold: 0.2 } // Start counting when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-12 pb-20 px-4 lg:px-4" ref={sectionRef}>
      <div className="container mx-auto py-12 bg-gradient-to-l shadow-2xl from-blue-500 to-blue-950 rounded-2xl text-gray-300 px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {services.map((service, index) => {
            const words = service.title.split(' ');
            const firstWord = words.slice(0, 2).join(' ');
            const remainingTitle = words.slice(2).join(' ');

            return (
              <div key={index} className="text-center flex flex-col items-center">
                <div className="text-white text-4xl font-bold p-4 rounded-full">
                  {/* Use CountUp to animate numbers when visible */}
                  {isVisible && (
                    <CountUp start={0} end={service.some} duration={2} /> // Starts counting when visible
                  )} +
                </div>
                <div className="mb-4">
                  <h3 className="text-xl text-white font-semibold">
                    {firstWord}
                  </h3>
                  <h3 className="text-xl text-white font-semibold">
                    {remainingTitle}
                  </h3>
                </div>
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
