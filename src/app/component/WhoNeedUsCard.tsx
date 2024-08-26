import React from "react";
import '../style/whoNeedUsCard.css'

const WhoNeedUsCard: React.FC = () => {
  return (
    <div>
      <div className="container " data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration='800' data-aos-delay="700">
        <div className="card relative w-72 h-52 transition-transform duration-700">
          <div className="slide slide1 absolute inset-0 flex justify-center items-center z-10 transform translate-y-24 transition-transform duration-700 ">
            <div className="content">
              <div className="icon bg-blue-900  absolute text-white text-lg inset-0 flex px-6 justify-center items-center">
                {/* <i
                  className="fa fa-user-circle text-white text-8xl"
                  aria-hidden="true"
                ></i> */}
                Startups with Unique Ideas: Launch your venture with a solid foundation
              </div>
            </div>
          </div>

          <div className="slide slide2 absolute inset-0 flex justify-center items-center p-5 box-border transition-transform duration-800 transform -translate-y-24 shadow-lg bg-white">
            <div className="content text-start">
              <p className="text-black font-bold text-sm">  Startups with Unique Ideas: Launch your venture with a solid foundation. We offer tailored advice and strategies to kickstart your success.
          Business aiming to expand Horizons: Ready to take your business to new heights? 
        </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoNeedUsCard;
