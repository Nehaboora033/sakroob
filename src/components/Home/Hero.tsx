'use client'
import React from 'react'
import { Delivery, Easy_Returns, Graphic_Card, Monitor, Premiunm_Quality, SmartWatch, SpecialGift, Storage, Support, Television, Video_Game } from '@/Utils/icons'
import SubHeading from '../common/SubHeading'
import Description from '../common/Description'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules'
import HeroSwiper from './HeroSwiper'



interface ServiceProps {
  title: string,
  data: string,
  svg: React.FC<React.SVGProps<SVGSVGElement>>,
}

interface ProductsProps {
  title: string,
  svg: React.FC<React.SVGProps<SVGSVGElement>>,
}

export const Products_Data: ProductsProps[] = [
  {
    title: 'Game',
    svg: Video_Game,
  },
  {
    title: 'Storage (ssd)',
    svg: Storage,
  },
  {
    title: 'Graphic Card',
    svg: Graphic_Card,
  },
  {
    title: 'Televisions',
    svg: Television,
  },
  {
    title: 'Smartwatch',
    svg: SmartWatch,
  },
  {
    title: 'Monitors',
    svg: Monitor,
  },
  {
    title: 'Storage (ssd)',
    svg: Storage,
  },
  {
    title: 'Graphic Card',
    svg: Graphic_Card,
  },
  {
    title: 'Televisions',
    svg: Television,
  },
  {
    title: 'Smartwatch',
    svg: SmartWatch,
  },
  {
    title: 'Monitors',
    svg: Monitor,
  },
]

export const Hero_Services: ServiceProps[] = [
  {
    title: 'EXPRESS Delivery',
    data: 'Order Now',
    svg: Delivery,
  },
  {
    title: 'Easy Return ',
    data: '30 days return',
    svg: Easy_Returns,
  },
  {
    title: '24/7 Support',
    data: 'Premium Services',
    svg: Support,
  },
  {
    title: 'Premium Warranty',
    data: 'Up to 2 years',
    svg: Premiunm_Quality,
  },
  {
    title: 'Best Special Gift',
    data: 'For Order',
    svg: SpecialGift,
  },
]

const Hero: React.FC = () => {
  return (
    <>
      <div >
        <Swiper
          spaceBetween={16}
          // slidesPerView={6.5}
          loop={true}
          modules={[Autoplay]}
          speed={4000} // how long one full slide transition takes (higher = slower)
          autoplay={{
            delay: 0, // no pause between transitions
            disableOnInteraction: false, // keep autoplay even after user interacts
          }}
          allowTouchMove={false}
          breakpoints={{
            0: {
              slidesPerView: 1.5,
            },
            480: {
              slidesPerView: 2.5, // mobile
            },
            768: {
              slidesPerView: 3, // small tablet
            },
            992: {
              slidesPerView: 4.5, // tablet
            },
            1280: {
              slidesPerView: 6.5, // desktop
            },
          }}

          className='my-6' >
          {Products_Data.map((item, index) => (
            <SwiperSlide className='' key={index}>
              <div className='border border-[#112D491A] p-4 flex  items-center gap-4 rounded-lg  w-full'>
                <div className='bg-dark-blue size-[59px] flex items-center justify-center rounded-full'>
                  <item.svg />
                </div>
                <h4 className='font-bold leading-[120%] text-[16px]'>
                  {item.title}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <HeroSwiper />
      {/*----------- services section ------------*/}
      <div className='md:pb-48 pb-[140px] max-w-[1380px] mx-auto px-3 pt-[67px]'>
        <div className='bg-light-blue md:py-[43px] md:px-[72px] p-[30px] grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 min-[500px]:grid-cols-2 justify-center  gap-9 mt-6 '>
          {Hero_Services.map((item, index) => (
            <div className={`w-fit  flex items-center gap-1.5`} key={index}>
              <div className='bg-sky-blue rounded-full flex items-center justify-center size-[47px] shrink-0'>
                <item.svg />
              </div>
              <div>
                <SubHeading className='text-[16px]! mb-1 whitespace-nowrap '>
                  {item.title}
                </SubHeading>
                <Description className='whitespace-nowrap'>
                  {item.data}
                </Description>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Hero