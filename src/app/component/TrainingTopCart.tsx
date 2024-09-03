import React from "react";
import { FaUserTie } from "react-icons/fa";

const TrainingTopCart: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col items-center shadow-md justify-center p-8 border-2 border-blue-600 rounded-2xl max-w-sm mx-auto">
        <FaUserTie className="text-blue-600 text-4xl mb-4" />
        <h3 className="text-blue-500 text-xl font-semibold mb-2">
          A Leading pbs Group
        </h3>
        <p className="text-gray-600 text-sm">150+ Experienced Investors</p>
      </div>
    </div>
  );
};

export default TrainingTopCart;
