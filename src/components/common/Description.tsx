import React from 'react'

interface DescriptionProps {
  className?: string;
  children: React.ReactNode;
}


const Description: React.FC<DescriptionProps> = ({ className = '', children, ...props }) => {
  return (
    <h3
      {...props}
      className={`${className} font-normal text-[16px]  text-darkblue leading-[150%]`}>
      {children}
    </h3>
  )
}

export default Description