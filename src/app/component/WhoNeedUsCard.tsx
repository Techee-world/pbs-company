
import React from "react";
import "../style/whoNeedUsCard.css";

interface URL {
  url:string
  title:string
  des:string
}

const WhoNeedUsCard: React.FC<URL> = ({url,title,des}) => {
  return (
    <div className="shadow-xl rounded-xl">
      <article style={{borderRadius:'14px',width:'fit-content'}} data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration='800' data-aos-delay="700" className="card">
        <div className="thumb bg-blue-100"  style={{ backgroundImage: `url(${url}) `}}></div>
        <div className="infos">
          <h2 className="title font-semibold   lg:pt-3 text-xl">
          {title}
          </h2>
          <p className="  mt-9 lg:mt-16">
         {des}
          </p>
        </div>
      </article>
    </div>
  );
};

export default WhoNeedUsCard;