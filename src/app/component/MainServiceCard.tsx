import React from "react";
import { useRouter } from "next/navigation";
import union from "../../../public/images/union-started.svg"; // Ensure the correct import

const MainServiceCard = () => {
  return (
    <div className="grid max-w-6xl lg:px-4 px-4 m-auto 2xl:max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      <Card
        color="radial-gradient(circle, rgba(11,44,107,1) 0%, rgba(79,130,227,1) 100%)"
        some="PBS Corporate"
        des="Management Consulting For Startups"
        path="ybn"
      />
      <Card
        color="radial-gradient(circle, rgba(7,66,79,1) 0%, rgba(62,149,168,1) 100%)"
        some="PBS Finance"
        des="Financial Consulting Solutions"
        path="acs"
      />
      <Card
        color="radial-gradient(circle, rgba(9,83,23,1) 0%, rgba(73,174,92,1) 100%)"
        some="PBS Tech"
        des="Complete Digital Transformation"
        path="it"
      />
      <Card
        color="radial-gradient(circle, rgba(95,15,23,1) 0%, rgba(208,83,96,1) 100%)"
        some="PBS Trainings"
        des="Tailored Training Sessions "
        path="training"
      />
    </div>
  );
};

interface CardProps {
  some: string;
  des: string;
  path: string;
  color?: string;
}

const Card: React.FC<CardProps> = ({ path, color, some, des }) => {
  const router = useRouter();

  const handleClick = (sectionId: string) => {
    router.push(`/services#${sectionId}`);
  };

  return (
    <div
      style={{
        backgroundImage: `${color}`,
      }}
      className="transform scale-100   object-cover hover:scale-105 hover:shadow-xl transition duration-300 ease-out cursor-pointer rounded-lg"
    >
      <div
        style={{
          backgroundImage: ` url(${union.src})`,
          // backgroundPosition: 'center',
          backgroundRepeat: "no-repeat",
          backgroundSize: " 100%",
          zIndex: "999",
          marginTop: "20px",
          display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }}
        onClick={() => handleClick(path)}
        className="w-full justify-center   object-cover rounded-lg p-4 sm:p-3 flex flex-col items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto sm:max-w-lg lg:max-w-xl"
      >
        {/* Badge Section */}

        <div className="mb-8 bg-blue-950 rounded-lg shadow-md  px-6 py-1 flex items-center justify-center space-x-2">
          <span className="text-white  font-normal text-base">{some}</span>
        </div>

        {/* Text Section */}
        <div className="flex-grow  sm:text-left">
          {des === "Complete Digital Transformation" ? (
            <>
              <h2
                className="text-lg  text-center helvetic-sub-title-sub-font font-semibold text-gray-300"
              >
                Complete
              </h2>
              <h2
                className="text-lg  text-center helvetic-sub-title-sub-font font-semibold text-gray-300"
              >
                Digital Transformation
              </h2>
            </>
          ) : ( <>
            <h2
              className="text-lg text-center helvetic-sub-title-sub-font font-semibold text-gray-300"
            >
              {des.split(' ').slice(0, 2).join(' ')}
            </h2>
            <h2
              className="text-lg text-center helvetic-sub-title-sub-font font-semibold text-gray-300"
            >
              {des.split(' ').slice(2).join(' ')}
            </h2>
            </>  )}
        </div>
      </div>
    </div>
  );
};

export default MainServiceCard;
