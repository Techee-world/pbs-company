import React from 'react';

const FlipCards: React.FC = () => {
  return (
    <section className="min-h-screen max-w-6xl 2xl:7xl m-auto  text-center py-16">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8">
        <FlipCard
          frontContent="Startups with Unique Ideas"
          backContent="Launch your venture with a solid foundation. We offer tailored advice and strategies to kickstart your success"
        />
        <FlipCard
          frontContent="Business aiming to expand Horizons"
          backContent="Ready to take your business to new heights? Our seasoned consultants provide insights and tactics to fuel your growth and expansion"
        />
        <FlipCard
          frontContent="Business facing Challenges"
          backContent="Overcome obstacles with ease. We offer practical solutions to navigate through rough patches and emerge stronger than ever. Partner with us today and let's chart a course to your business success!"
        />
        <FlipCard
          frontContent="Startups with Unique Ideas"
          backContent="Launch your venture with a solid foundation. We offer tailored advice and strategies to kickstart your success"
        />
        <FlipCard
          frontContent="Business facing Challenges"
          backContent="Overcome obstacles with ease. We offer practical solutions to navigate through rough patches and emerge stronger than ever. Partner with us today and let's chart a course to your business success!"
        />
        <FlipCard
          frontContent="Business facing Challenges"
          backContent="Overcome obstacles with ease. We offer practical solutions to navigate through rough patches and emerge stronger than ever. Partner with us today and let's chart a course to your business success!"
        />
      </div>
    </section>
  );
};

interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
}

const FlipCard: React.FC<FlipCardProps> = ({ frontContent, backContent }) => {
  return (
    <div className="flip-card w-full   h-56 perspective-150 cursor-pointer">
      <div className="flip-card-inner  relative w-full h-full transition-transform duration-600 transform-style-3d">
        <div className="flip-card-front border-2 border-blue-950 rounded-xl absolute w-full h-full backface-hidden   shadow-lg flex items-center justify-center text-lg font-bold">
          {frontContent}
        </div>
        <div className={`flip-card-back rounded-xl absolute button-color font-normal px-2 w-full h-full backface-hidden  text-white shadow-lg flex items-center justify-center`}>
          <div className="text-base">{backContent}</div>
        </div>
      </div>
    </div>
  );
};

export default FlipCards;