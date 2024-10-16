import React from "react";
import { useRouter } from "next/navigation";
import union from "../../../public/images/union-started.svg"; // Ensure the correct import
import Link from "next/link";

const MainServiceCard = () => {
  return (
    <div className="grid max-w-6xl lg:px-4 px-4 m-auto 2xl:max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      <Card
        color="radial-gradient(circle, rgba(11,44,107,1) 0%, rgba(79,130,227,1) 100%)"
        some="PBS Consult"
        des="Strategic Consulting Services"
        path="pbs"
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
        pathRoot="/pbstech"
        path=""
      />
      <Card
        color="radial-gradient(circle, rgba(95,15,23,1) 0%, rgba(208,83,96,1) 100%)"
        some="PBS Trainings"
        des="Tailored Training Sessions"
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
  pathRoot?: string ;
}

const Card: React.FC<CardProps> = ({ path, color, some, des, pathRoot }) => {
  const router = useRouter();

  const handleClick = (sectionId: string) => {
    console.log(sectionId,'---path new')
    if(sectionId !== ''){
      router.push(`/services#${sectionId}`);
    }else if (pathRoot) { // Check if pathRoot is defined
      router.push(pathRoot);
    }
  };

  return (
    <div
      style={{
        background: `${color}`, // Use 'background' instead of 'backgroundImage' for gradients
        // boxShadow: "0 6px 15px 0px rgb(0 0 0 / 68%)",
      }}
      className="transform scale-100 hover:scale-105 hover:shadow-custom-hover transition duration-300 ease-out cursor-pointer rounded-lg"
    >
      <div
        style={{
          backgroundImage: `url(${union.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          zIndex: "999",
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={() => handleClick(path)}
        className="w-full rounded-lg p-4 sm:p-3 flex flex-col items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto sm:max-w-lg lg:max-w-xl"
      >
        {/* Badge Section */}
        <div className="mb-8 bg-blue-950 rounded-lg shadow-md px-6 py-1 flex items-center justify-center space-x-2">
          <span className="text-white font-normal text-base">{some}</span>
        </div>

        {/* Text Section */}
        <div className="flex-grow sm:text-left">
          {des === "Complete Digital Transformation" ? (
            <>
              <h2 className="text-lg text-center helvetic-sub-title-sub-font font-semibold text-gray-300">
                Complete
              </h2>
              <h2 className="text-lg text-center helvetic-sub-title-sub-font font-semibold text-gray-300">
                Digital Transformation
              </h2>
            </>
          ) : (
            <Link href={pathRoot || ""}>
                <h2 className="text-lg text-center helvetic-sub-title-sub-font font-semibold text-gray-300">
                  {des.split(" ").slice(0, 2).join(" ")}
                </h2>
                <h2 className="text-lg text-center helvetic-sub-title-sub-font font-semibold text-gray-300">
                  {des.split(" ").slice(2).join(" ")}
                </h2>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainServiceCard;
