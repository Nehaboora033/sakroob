import React from 'react'

interface SubHeadingProps {
  className?: string;
  children: React.ReactNode;
}

const SubHeading: React.FC<SubHeadingProps> = ({ className, children, ...props }) => {
  return (
    <h1
      {...props}
      className={`sm:text-[48px] text-[34px] leading-[120%] font-bold text-darkblue ${className}`}>
      {children}
    </h1>
  )
}

export default SubHeading