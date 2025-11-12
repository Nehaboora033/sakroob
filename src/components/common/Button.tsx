import React from 'react'


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode,
  className?: string,
}

const Button: React.FC<ButtonProps> = ({ className = '', children, ...props }) => {

  return (
    <button
      {...props}
      className={`${className} rounded-[93px] whitespace-nowrap py-3 px-5 cursor-pointer`}>
      {children}
    </button>
  )
}

export default Button