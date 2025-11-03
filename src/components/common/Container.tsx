import React from 'react'
interface ContainerProps {
    className?: string;
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ className, children }) => {
    return (
        <div className={`${className} max-w-[1140px] px-3 mx-auto w-full`}>
            {children}
        </div>
    )
}

export default Container