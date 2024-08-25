import React from 'react'


interface ButtonProps {
    title: string;
  }


const Button:React.FC<ButtonProps> = ({title}) => {
  return (
    <button className="mt-8 bg-blue-500 text-white border border-gray-400  px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">{title}</button>
  )
}

export default Button