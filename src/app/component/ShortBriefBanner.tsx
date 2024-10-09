import React from 'react';
import MainServiceCard from './MainServiceCard';

const ShortBriefBanner = () => {
  return (
    <>
    <MainServiceCard/>
    <section className="lg:pt-28 pt-14 px-4 text-start lg:text-center ">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-5xl button-color-text mb-6 lg:mb-10 helvetic-sub-title-font">
        Our Services are Efficient, <br className="hidden md:block" />
        Modern, and Customer-Focused
      </h1>
      <p className="text-gray-600 lg:pb-16 pb-0  leading-relaxed ">
      At PBS, our services are efficient, modern, and tailored to meet your business needs. With a focus on IT consulting, corporate, finance consulting and more, we leverage the latest technologies and strategies to drive your growth. Our experienced team ensures top-quality solutions that are compliant and customer-centric, helping businesses thrive in a competitive landscape. Let PBS empower your business with innovative and personalized services for lasting success.
      </p>
    </div>
  </section>
    </>
  );
};

export default ShortBriefBanner