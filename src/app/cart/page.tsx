'use client';
import React from 'react'
import Link from 'next/link'
import Container from '@/components/common/Container'
import Description from '@/components/common/Description'
import { Decrease, Delete, Increase } from '@/Utils/icons';
import Image from 'next/image';
import chair from '../../assets/png/gaming chair.png'
import Button from '@/components/common/Button';
import Gamingremote from '../../assets/png/gamming.png'


const CartPage: React.FC = () => {
    return (
        <div className='pb-[132px]'>
            <Container>
                <div className='flex items-center justify-between mb-[52px] pt-[94px] '>
                    <h3 className='font-bold text-[34px] '>
                        Your cart
                    </h3>
                    <Link href={'/'} >
                        <Description className='underline-offset-2 underline text-[#41576D]!'>
                            Continue Shopping
                        </Description>
                    </Link>
                </div>
                <div className='rounded-lg '>
                    <div className=' flex bg-[#F5F5F5] border-b border-[#112D491A] p-5 rounded-tl-lg rounded-tr-lg gap-2  '>
                        {/* first line heading */}
                        <div className='w-[40%] text-[18px] font-medium  text-dark-blue'>
                            Product
                        </div>
                        <div className='w-[60%] flex '>
                            <div className='w-1/2 text-[18px] font-medium  text-dark-blue'>
                                Quantity
                            </div>
                            <div className='w-1/2 text-[18px] font-medium text-dark-blue '>
                                Total
                            </div>
                        </div>
                    </div>
                    {/* middle line product 1 */}
                    <div className='flex items-center bg-[#F5F5F5]  p-5 gap-2 '>
                        <div className='flex items-center gap-[18px] w-[40%]'>
                            <div className='bg-[#E9E9E9] py-[7px] px-5 size-[85px] relative border border-[#00000033] rounded-tl-lg rounded-br-lg flex items-center justify-center'>
                                <Image src={Gamingremote} alt='chair' width={85} height={85} className='' />
                                <div className='rounded-full bg-[#C7C7C7] flex items-center justify-center absolute size-[34px] -top-3 -right-5 text-dark-blue'>
                                    1
                                </div>
                            </div>
                            <div>
                                <h4 className='font-medium text-[20px] leading-[150%] text-dark-blue'>
                                    Gaming Chair
                                </h4>
                                <Description className='text-[14px]! text-[#8292A0]!'>
                                    Dhs. 249.99
                                </Description>
                            </div>
                        </div>
                        <div className='flex items-center w-[60%]'>
                            <div className='flex items-center gap-2 w-1/2'>
                                <div className='h-11 flex '>
                                    <div className='bg-sky-blue py-[13px] px-[19px] flex items-center justify-center rounded-tl-lg rounded-bl-lg cursor-pointer'>
                                        <Increase />
                                    </div>
                                    <div className='border-y border-[#0000003D] py-1.5 px-[31px] text-[20px] text-[#586C80]'>
                                        01
                                    </div>
                                    <div className='bg-dark-blue py-[13px] px-[19px] flex items-center justify-center rounded-tr-lg rounded-br-lg cursor-pointer'>
                                        <Decrease />
                                    </div>
                                </div>
                                <Delete className='cursor-pointer' />
                            </div>
                            <div className='w-1/2 text-[#3E566C] '>Dhs. 249.99</div>
                        </div>
                    </div>


                    {/* middle line product 2 */}
                    <div className='flex items-center bg-[#F5F5F5]  p-5 gap-2 '
                        style={{
                            borderBottom: '1px solid', // defines the border thickness
                            borderImageSource:
                                'linear-gradient(90deg, rgba(17, 45, 73, 0) 0%, #112D49 52.88%, rgba(17, 45, 73, 0) 100%)',
                            borderImageSlice: 1, // required to display the full gradient
                        }}>
                        <div className='flex items-center gap-[18px] w-[40%]'>
                            <div className='bg-[#E9E9E9] py-[7px] px-5 size-[85px] relative border border-[#00000033] rounded-tl-lg rounded-br-lg flex items-center justify-center'>
                                <Image src={chair} alt='chair' width={85} height={85} className='' />
                                <div className='rounded-full bg-[#C7C7C7] flex items-center justify-center absolute size-[34px] -top-3 -right-5 text-dark-blue'>
                                    1
                                </div>
                            </div>
                            <div>
                                <h4 className='font-medium text-[20px] leading-[150%] text-dark-blue'>
                                    Gaming Chair
                                </h4>
                                <Description className='text-[14px]! text-[#8292A0]! '>
                                    Dhs. 249.99
                                </Description>
                            </div>
                        </div>
                        <div className='flex items-center w-[60%]'>
                            <div className='flex items-center gap-2 w-1/2'>
                                <div className='h-11 flex '>
                                    <div className='bg-sky-blue py-[13px] px-[19px] flex items-center justify-center rounded-tl-lg rounded-bl-lg cursor-pointer'>
                                        <Increase />
                                    </div>
                                    <div className='border-y border-[#0000003D] py-1.5 px-[31px] text-[20px] text-[#586C80]'>
                                        01
                                    </div>
                                    <div className='bg-dark-blue py-[13px] px-[19px] flex items-center justify-center rounded-tr-lg rounded-br-lg cursor-pointer'>
                                        <Decrease />
                                    </div>
                                </div>
                                <Delete className='cursor-pointer' />
                            </div>
                            <div className='w-1/2  text-[#3E566C]'>Dhs. 249.99</div>
                        </div>
                    </div>

                    {/* last line */}
                    <div className='flex items-center bg-[#F5F5F5] p-5 rounded-bl-lg rounded-br-lg'>
                        <div className='w-[40%]'></div>
                        <div className='w-[60%] flex items-center'>
                            <div className='w-1/2'></div>
                            <div className='w-1/2'>
                                <div className='flex justify-between items-center mb-2 '>
                                    <Description>
                                        Estimated total
                                    </Description>
                                    <Description className='font-semibold!'>
                                        Dhs. 249.99 AED
                                    </Description>
                                </div>
                                <Description className='mb-6  text-[#3E566C]!'>
                                    Taxes, discounts and shipping calculated at checkout.
                                </Description>
                                <Button className='bg-dark-blue text-white w-full max-w-[330px]'>
                                    Check out
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default CartPage