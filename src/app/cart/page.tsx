import React from 'react'
import Link from 'next/link'
import Container from '@/components/common/Container'
import Description from '@/components/common/Description'


const CartPage = () => {
    return (
        <div>
            <Container>
                <div>
                    <h3 className='font-bold text-[34px] '>
                        Your cart
                    </h3>
                    <Link href={'/'} >
                        <Description className='underline-offset-2'>
                            Continue Shopping
                        </Description>

                    </Link>
                </div>
                <div className='bg-[#F4F8F7]'>

                </div>
            </Container></div>
    )
}

export default CartPage