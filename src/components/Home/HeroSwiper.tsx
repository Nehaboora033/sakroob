'use client'
import React from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import Heading from '../common/Heading';
import Description from '../common/Description';
import Button from '../common/Button';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

interface SwiperHeading {
  heading: string,
  description: string,
}

export const Swiper_Details: SwiperHeading[] = [
  {
    heading: 'Where Tinkerers Bring Ideas Alive',
    description: 'Explore niche tech gear, DIY kits, and pro tools — built for creators, gamers, and engineers.',
  },
  {
    heading: 'Join the Sakroob Circle',
    description: 'Learn to build your own network storage system with simple components.',
  },
  {
    heading: 'Where Tinkerers Bring Ideas Alive',
    description: 'Explore niche tech gear, DIY kits, and pro tools — built for creators, gamers, and engineers.',
  },
  {
    heading: 'Join the Sakroob Circle',
    description: 'Learn to build your own network storage system with simple components.',
  },
]

const HeroSwiper: React.FC = () => {
  return (
    <div className='max-w-[1396px] mx-auto px-3 relative'>
      <Swiper
        modules={[Pagination]}
        loop={true}
        pagination={{
          clickable: true,
          el: '.custom-pagination' // target custom div
        }}
        className="h-[650px] hero-swiper"
      >
        {Swiper_Details.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className='bg-cover bg-center bg-no-repeat rounded-lg h-[650px] flex items-center'
              style={{ backgroundImage: 'url(/images/herobg.png)' }}
            >
              <div className='max-w-[761px] mx-auto px-3 text-center'>
                <Heading className='mx-auto mb-3'>
                  {item.heading}
                </Heading>
                <Description className='text-center mb-5 max-w-[460px] mx-auto'>
                  {item.description}
                </Description>
                <div className='flex gap-[18px] justify-center'>
                  <Button className='bg-dark-blue text-white'>
                    Browse Products
                  </Button>
                  <Button className='border border-dark-blue'>
                    Starter Kits
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination flex justify-center mt-6"></div>
    </div>
  )
}

export default HeroSwiper