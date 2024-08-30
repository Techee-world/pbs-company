
import React from "react";
import "../style/whoNeedUsCard.css";

const WhoNeedUsCard: React.FC = () => {
  return (
    <div className="shadow-xl">
      <article style={{borderRadius:'12px',width:'fit-content'}} data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration='800' data-aos-delay="700" className="card">
        <div className="thumb bg-blue-600"></div>
        <div className="infos">
          <h2 className="title text-black font-bold lg:pt-3 text-lg">
          Startups with Unique Ideas: Launch your venture with a solid foundation
          </h2>
          <p className="txt text-sm mt-6">
          Startups with Unique Ideas: Launch your venture with a solid foundation. We offer tailored advice and strategies to kickstart your success.
          Business aiming to expand Horizons: Ready to take your business to new heights? 
          </p>
        </div>
      </article>
    </div>
  );
};

export default WhoNeedUsCard;