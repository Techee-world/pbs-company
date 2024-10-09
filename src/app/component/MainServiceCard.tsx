import React from 'react';
import { useRouter } from 'next/navigation';
import union from '../../../public/images/union-started.svg'; // Ensure the correct import

const MainServiceCard = () => {
  return (
    <div className="grid max-w-6xl md:px-0 px-4 m-auto 2xl:max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      <Card
        color="linear-gradient(91.43deg, rgb(79, 130, 227) 100%, rgb(122, 178, 248) 100%)"
        some="PBS Corporate"
        des="Management Consulting For Startups"
        path="ybn"
      />
      <Card
        color="linear-gradient(91.43deg, rgb(94, 177, 195) 100%, rgb(157, 231, 247) 100%)"
        some="PBS Finance"
        des="Financial Consulting Solutions"
        path="acs"
      />
      <Card
        color="linear-gradient(91.43deg, rgb(85, 181, 150) 100%, rgb(170, 234, 213) 100%)"
        some="PBS Tech"
        des="Complete Digital Transformation"
        path="it"
      />
      <Card
        color="linear-gradient(91.43deg, rgb(218, 97, 97) 100%, rgb(243, 145, 145) 100%)"
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
    <div  style={{
      backgroundImage:`${color}`,
    }}
    className='transform scale-100   object-cover hover:scale-105 hover:shadow-xl transition duration-300 ease-out cursor-pointer rounded-lg'>
    <div
      style={{
        backgroundImage: ` url(${union.src})`,
        // backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat',
        backgroundSize:' 200%',
        zIndex:'999'
        
      }}
      onClick={() => handleClick(path)}
      className="w-full  object-cover rounded-lg p-4 sm:p-6 flex flex-col items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto sm:max-w-lg lg:max-w-xl"
    >
      {/* Badge Section */}
      <div className="mb-10 bg-blue-950 rounded-lg px-6 py-1 flex items-center space-x-2">
        <span className="text-white font-medium text-sm">{some}</span>
      </div>

      {/* Text Section */}
      <div className="flex-grow text-center sm:text-left">
        {des === 'Complete Digital Transformation' ? (
          <>
            <h2 className="text-lg font-semibold text-black">Complete</h2>
            <h2 className="text-lg font-semibold text-black">Digital Transformation</h2>
          </>
        ) : (
          <h2 className="text-lg font-semibold text-black">{des}</h2>
        )}
      </div>
    </div>
    </div>
  );
};

export default MainServiceCard;
