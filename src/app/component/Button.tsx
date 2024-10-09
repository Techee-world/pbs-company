import Link from 'next/link';
import React from 'react'


interface ButtonProps {
    title: string;
    path?:string | undefined;
  }


const Button:React.FC<ButtonProps> = ({title , path}) => {
  return (
    <Link href={path || '#'} >
      <button className="mt-8 button-color text-white text-base border border-gray-400  lg:px-6 px-4 py-2 lg:py-3 rounded-lg hover:bg-blue-700 transition duration-300">{title}</button>
    </Link>
  )
}

export default Button