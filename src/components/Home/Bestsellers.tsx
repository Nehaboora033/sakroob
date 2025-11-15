'use client';
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import gamingpc from '../../assets/png/gammingpc.png';
import router from '../../assets/png/router.png';
import chair from '../../assets/png/gaming chair.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import ratingstars from '../../assets/png/star-rating.png';
import { ProductCart, SwiperArrow, ProductLike } from '@/Utils/icons';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import Container from '@/components/common/Container';
import SubHeading from '@/components/common/SubHeading';
import Description from '@/components/common/Description';
import Button from '@/components/common/Button';
import { useCart } from '@/app/cart/CartContext';

interface BestsellerProps {
    title: string;
    price: number;
    model: StaticImageData;
    id: number;
}

export const Bestseller_Data: BestsellerProps[] = [
    {

        title: 'Vortex Gaming PC',
        price: 249.99,
        model: gamingpc,
        id: 1,

    },
    {
        title: 'D-Link ADSL Wireless Router DSL2790U',
        price: 200.99,
        model: router,
        id: 2,

    },
    {
        title: 'Gaming Chair',
        price: 300.99,
        model: chair,
        id: 3,

    },
    {
        title: 'Vortex Gaming PC',
        price: 249.99,
        model: gamingpc,
        id: 4,

    },
    {
        title: 'D-Link ADSL Wireless Router DSL2790U',
        price: 200.99,
        model: router,
        id: 5,

    },
    {
        title: 'Gaming Chair',
        price: 300.99,
        model: chair,
        id: 6,

    },
];

const Bestsellers: React.FC = () => {
    const { addToCart } = useCart();
    return (
        <div className="my-[132px] ">
            <Container className='relative'>
                <SubHeading className="text-center ">
                    Bestsellers
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

                    modules={[Navigation]}
                    navigation={{
                        prevEl: '.prevbtn1',
                        nextEl: '.nextbtn1',

                    }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}

                    className='bestseller-wraper' >
                    {Bestseller_Data.map((item, index) => (
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
                                        <div className='flex justify-between items-center '>
                                            <Link href={`/products/${item.id}`}>
                                                <Button className='border'>
                                                    Shop Now
                                                </Button>
                                            </Link>

                                            <div
                                                className='rounded-full bg-sky-blue size-12 flex items-center justify-center cursor-pointer'
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </div >
    );
};

export default Bestsellers;