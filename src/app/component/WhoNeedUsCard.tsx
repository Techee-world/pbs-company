
import React from "react";
import "../style/whoNeedUsCard.css";

interface URL {
  url:string
}

const WhoNeedUsCard: React.FC<URL> = ({url}) => {
  return (
    <div className="shadow-xl rounded-xl">
      <article style={{borderRadius:'14px',width:'fit-content'}} data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration='800' data-aos-delay="700" className="card">
        <div className="thumb bg-blue-100"  style={{ backgroundImage: `url(${url}) `}}></div>
        <div className="infos">
          <h2 className="title font-normal  lg:pt-3 text-lg">
          Startups with Unique Ideas: Launch your venture with a solid foundation
          </h2>
          <p className=" text-sm mt-9 lg:mt-6">
          Startups with Unique Ideas: Launch your venture with a solid foundation. We offer tailored advice and strategies to kickstart your success.
          Business aiming to expand Horizons: Ready to take your business to new heights? 
          </p>
        </div>
      </article>
    </div>
  );
};

export default WhoNeedUsCard;