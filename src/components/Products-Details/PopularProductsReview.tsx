'use client';
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import gamingpc from '../../assets/png/gammingpc.png';
import router from '../../assets/png/router.png';
import chair from '../../assets/png/gaming chair.png';
import ratingstars from '../../assets/png/star-rating.png';
import Link from 'next/link';
import Container from '@/components/common/Container';
import SubHeading from '@/components/common/SubHeading';
import Description from '@/components/common/Description';
import Button from '@/components/common/Button';
import { ProductCart, ProductLike } from '@/Utils/icons';
import GPU from '../../assets/png/GPU.png'
import PC from '../../assets/png/elite-PC-case.png'
import fan from '../../assets/png/fan.png'


interface PopularProductsProps {
    title: string;
    price: number;
    model: StaticImageData;
    id: number;
    description: string;
}

export const Bestseller_Data: PopularProductsProps[] = [
    {

        title: 'NZXT H510 Elite PC Case',
        price: 249.99,
        model: PC,
        id: 1,
        description: 'Tempered glass case with clean cable management and optimized airflow.',

    },
    {
        title: 'MSI GeForce RTX 4070 GPU',
        price: 348.99,
        model: GPU,
        id: 2,
        description: 'Ray tracing, AI-powered DLSS, and ultra-performance — redefine how you game.',

    },
    {
        title: 'D-Link ADSL  DSL2790U',
        price: 355.99,
        model: fan,
        id: 3,
        description: 'Commodo egestas etiam arcu curabitur aliquam volutpat a gravida.',

    },


];

const PopularProductsReview:React.FC = () => {
    return (
        <div className="mb-[132px] mt-10 ">
            <Container className='relative'>
                <SubHeading className="text-center mb-5 ">
                    Popular Products
                </SubHeading>
                <div className='flex gap-4 pt-[116px]'>
                    {Bestseller_Data.map((item, index) => (
                        <div key={index} >
                            <div className={`border  border-[#112D4914] rounded-lg h-[536px] p-4 flex flex-col gap-5 shadow-model`}>
                                <div className={`h-1/2  rounded-lg flex justify-center relative ${index % 2 !== 0 ? ' bg-cable-bg' : 'bg-grey'}`}>
                                    <div className='bg-[#D7DCE2] absolute top-0 z-2 right-0 m-2.5 cursor-pointer flex items-center justify-center rounded-full size-8'>
                                        <ProductLike />
                                    </div>
                                    <Image src={item.model} alt='model'
                                        className=' absolute bottom-5' />
                                </div>
                                <div className='h-1/2 flex flex-col justify-between'>
                                    <div className=''>
                                        <SubHeading className='text-2xl! mb-2'>
                                            {item.title}
                                        </SubHeading>
                                        <Description>
                                            Commodo egestas etiam arcu curabitur aliquam volutpat a gravida.
                                        </Description>
                                    </div>
                                    <div className='flex justify-betwee flex-col gap-[25px] '>
                                        <div className='flex items-center justify-between '>
                                            <h4 className='font-semibold text-[24px]'>
                                                {`$${item.price}`}
                                            </h4>
                                            <Image src={ratingstars} alt='rating stars' />
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <Link href={`/products/${item.id}`}>
                                                <Button className='border w-[260px] '>
                                                    Shop Now
                                                </Button>
                                            </Link>
                                            <div className='rounded-full bg-sky-blue size-12 flex items-center justify-center'>
                                                <ProductCart />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </Container>
        </div >
    )
}

export default PopularProductsReview