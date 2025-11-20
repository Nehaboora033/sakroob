import React from 'react'
import Lottie from 'lottie-react'
import cartanimationvector from '../assets/animation/Empty cart.json'

const Cartanimation:React.FC = () => {
    return (
        <>
            <Lottie animationData={cartanimationvector} loop={false} />
        </>
    )
}

export default Cartanimation