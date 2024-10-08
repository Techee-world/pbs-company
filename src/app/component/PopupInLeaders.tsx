import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface PopupInLeadersProps {
  onClose: () => void;
  img?: string | StaticImageData;
}

const PopupInLeaders = ({ onClose , img }: PopupInLeadersProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="bg-white rounded-lg shadow-lg w-80  p-4 relative z-40">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          &#10005; {/* Close icon (X) */}
        </button>
        <Image
          src={img as string}
          alt="Leader Image"
          width={300}
          height={500}
          className="z-40 w-full object-cover mt-4  rounded-2xl  h-auto"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eos libero aspernatur harum ipsum est omnis officiis veritatis dignissimos. Praesentium ad hic ratione iusto consequuntur.
        </p>
  
      </div>
    </div>
  );
};

export default PopupInLeaders;
