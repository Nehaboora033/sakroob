import React from 'react'

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ children, className = '', ...props }) => {
  return (
    <h1
      {...props}
      className={`text-[60px] leading-[120%] font-bold text-darkblue ${className}`}>
      {children}
    </h1>
  )
}

export default Heading