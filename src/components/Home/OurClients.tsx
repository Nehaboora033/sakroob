'use client'
import React from 'react'
import Container from '../common/Container'
import Description from '../common/Description'
import SubHeading from '../common/SubHeading'
import Image, { StaticImageData } from 'next/image'
import maleprofile from '../../assets/png/profileman.png'
import womenprofile from '../../assets/png/profilewomen.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import stars from '../../assets/png/star-rating.png'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import quotationmarks from '../../assets/png/quotation marks.png'
import { SwiperArrow } from '@/Utils/icons'
import { Navigation, Pagination } from 'swiper/modules'

interface ClientsDetailsProps {
  data: string;
  name: string;
  role: string;
  img: StaticImageData;
}

export const Clients_Data: ClientsDetailsProps[] = [
  {
    data: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,',
    name: 'William gate',
    role: 'CEO',
    img: maleprofile,
  },
  {
    data: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,',
    name: 'Darrell Steward',
    role: 'Manager',
    img: womenprofile,
  },
  {
    data: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,',
    name: 'William gate',
    role: 'CEO',
    img: maleprofile,
  },
  {
    data: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,',
    name: 'Darrell Steward',
    role: 'Manager',
    img: womenprofile,
  },
]
const OurClients: React.FC = () => {
  return (
    <div >
      <Container className='relative'>
        <Description className='text-[20px]! text-center mb-2'>
          Testimonials
        </Description>
        <SubHeading className='text-center mb-[59px]'>
          What our client’s says
        </SubHeading>
        <button
          className="prevbtn min-[1230px]:flex hidden absolute top-[63%] -left-[30px] rounded-full border cursor-pointer border-dark-blue size-[38px] items-center justify-center
             text-dark-blue hover:bg-dark-blue hover:text-white transition-colors duration-150 ease-in-out">
          <SwiperArrow />
        </button>
        <button className='nextbtn min-[1230px]:flex hidden  absolute -right-[30px] group top-[63%] hover:bg-dark-blue  rotate-180 rounded-full border cursor-pointer text-dark-blue hover:text-white border-dark-blue size-[38px] items-center  transition-colors duration-150 ease-in-out justify-center'>
          <SwiperArrow />
        </button>
        <Swiper
          spaceBetween={20}
          modules={[Navigation, Pagination]}
          pagination={{
            el: ".client-pagination",
            clickable: true,
          }}
          navigation={{
            prevEl: '.prevbtn',
            nextEl: '.nextbtn',
          }}
          breakpoints={{
            640: { slidesPerView: 1 },      // tablet portrait
            768: { slidesPerView: 2 },      // tablet landscape
          }}
        >
          {Clients_Data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='rounded-lg hover:shadow-swipercard transition-shadow ease-linear duration-200 xl:p-5 p-3' >
                <Image src={item.img} alt='imageprofile' className='rounded-full mx-auto' width={93} height={93} />

                <Description className='mb-[11.9px] text-center mt-4  relative'>
                  {item.data}
                  <Image src={quotationmarks} alt='img' className='absolute top-0  left-0' />
                  <Image src={quotationmarks} alt='img' className='absolute bottom-0 rotate-180 right-[50px]' />
                </Description>
                <div>
                  <Image src={stars} alt='stars' className='mx-auto ' />
                  <h4 className='font-semibold text-[20px] text-center text-dark-blue mt-2.5'>
                    {item.name}
                  </h4>
                  <Description className='text-center'>
                    {item.role}
                  </Description>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="client-pagination flex justify-center mt-6 md:hidden"></div>
      </Container>
    </div>
  )
}

export default OurClients