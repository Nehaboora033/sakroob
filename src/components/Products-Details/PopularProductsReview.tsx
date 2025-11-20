'use client';
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import pc from '../../assets/png/elite-PC-case.png';
import GPU from '../../assets/png/GPU.png';
import fan from '../../assets/png/fan.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import ratingstars from '../../assets/png/star-rating.png';
import { ProductCart, SwiperArrow, ProductLike } from '@/Utils/icons';
import { Navigation, Pagination } from 'swiper/modules';
import Container from '@/components/common/Container';
import SubHeading from '@/components/common/SubHeading';
import Description from '@/components/common/Description';
import { useCart } from '@/app/cart/CartContext';


interface PopularProps {
    title: string;
    price: number;
    model: StaticImageData;
    id: number;
    category: string;
}

export const Popular_Data: PopularProps[] = [
    {

        title: 'NZXT H510 Elite PC Case',
        price: 249.99,
        model: pc,
        id: 7,
        category: "pc",

    },
    {
        title: 'MSI GeForce RTX 4070 GPU',
        price: 349.99,
        model: GPU,
        id: 8,
        category: "Gpu",

    },
    {
        title: 'D-Link ADSL DSL2790U',
        price: 259.99,
        model: fan,
        id: 9,
        category: "fan",

    },
    {
        title: 'H510 Elite PC Case',
        price: 249.99,
        model: pc,
        id: 10,
        category: "pc",

    },
    {
        title: 'MSI RTX 4070 GPU',
        price: 339.99,
        model: GPU,
        id: 11,
        category: "gui",

    },
    {
        title: 'D ADSL DSL2790U',
        price: 239.99,
        model: fan,
        id: 12,
        category: "fan",

    },
];

const PopularProductsReview: React.FC = () => {
    const { addToCart } = useCart();
    return (
        <div className="sm:my-[132px] mb-[100px] ">
            <Container className='relative'>
                <SubHeading className="text-center ">
                    Popular Products
                </SubHeading>
                <button
                    className="prevbtn1 absolute top-[60%] -left-[50px] rounded-full border cursor-pointer border-dark-blue size-[38px] xl:flex hidden items-center justify-center
                             text-dark-blue hover:bg-dark-blue hover:text-white transition-colors duration-150 ease-in-out">
                    <SwiperArrow />
                </button>
                <button className='nextbtn1 absolute -right-[50px] group top-[60%] hover:bg-dark-blue  rotate-180 rounded-full border cursor-pointer text-dark-blue hover:text-white border-dark-blue size-[38px] hidden xl:flex items-center  transition-colors duration-150 ease-in-out justify-center'>
                    <SwiperArrow />
                </button>
                <Swiper
                    spaceBetween={24}

                    modules={[Navigation, Pagination]}
                    navigation={{
                        prevEl: '.prevbtn1',
                        nextEl: '.nextbtn1',

                    }}
                    pagination={{
                        clickable: true,
                        el: '.bestseller-pagination' // target custom div
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}

                    className='bestseller-wraper' >
                    {Popular_Data.map((item, index) => (
                        <SwiperSlide key={index} >
                            <div className={`border  border-[#112D4914] rounded-lg h-[536px]  p-4 flex flex-col gap-5 shadow-model`}>
                                <div className={`h-1/2  rounded-lg flex justify-center relative ${index % 2 !== 0 ? ' bg-cable-bg' : 'bg-grey'}`}>
                                    <div className='bg-[#D7DCE2] absolute bottom-0 z-2 right-0 m-2.5 cursor-pointer flex items-center justify-center rounded-full size-8'>
                                        <ProductLike />
                                    </div>
                                    <Image src={item.model} alt='model'
                                        className=' absolute bottom-5' />
                                </div>
                                <div className='h-1/2 flex flex-col justify-between'>
                                    <div className=''>
                                        <SubHeading className='sm:text-2xl! text-[20px]! mb-2'>
                                            {item.title}
                                        </SubHeading>
                                        <Description>
                                            Commodo egestas etiam arcu curabitur aliquam volutpat a gravida.
                                        </Description>
                                    </div>
                                    <div className='flex justify-betwee flex-col gap-[25px] '>
                                        <div className='flex items-center justify-between '>
                                            <h4 className='font-semibold sm:text-[24px] text-[16px]'>
                                                {`$${item.price}`}
                                            </h4>
                                            <Image src={ratingstars} alt='rating stars' />
                                        </div>
                                        <div
                                            className=' bg-sky-blue p-3 w-full gap-3 rounded-full flex items-center  cursor-pointer justify-center'
                                            onClick={() =>
                                                addToCart({
                                                    id: item.id,
                                                    title: item.title,
                                                    price: item.price,
                                                    image: item.model.src,
                                                    quantity: 1
                                                })
                                            } >
                                            <ProductCart />
                                            <span className='text-white '>
                                                Add now
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="bestseller-pagination flex justify-center mt-6"></div>
            </Container>
        </div >
    );
};

export default PopularProductsReview;