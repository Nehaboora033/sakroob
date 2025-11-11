import React from 'react'
import Container from '../common/Container'
import SubHeading from '../common/SubHeading'
import Description from '../common/Description'
import Link from 'next/link'
import { Product_Arrow } from '@/Utils/icons'
import motherboard from '../../assets/png/motherboard.png'
import controller from '../../assets/png/controller.png'
import Image, { StaticImageData } from 'next/image'
import tools from '../../assets/png/five tools.png'
import nas from '../../assets/png/miniNAS.png'
import Button from '../common/Button'

interface blogsProps {
  title: string;
  description: string;
  linktext: string;
  link: string;
  img: StaticImageData;

}

export const Blogs_Data: blogsProps[] = [
  {
    title: 'How to Build a Mini NAS',
    description: 'Learn to build your own network storage system with simple components.',
    linktext: 'Read Guide',
    link: '/',
    img: nas,

  },

  {
    title: '5 Tools Every Maker Should Own',
    description: 'The essential toolkit for every DIY electronics enthusiast.',
    linktext: 'Read Article',
    link: '/',
    img: tools,
  },
]
const Blogs: React.FC = () => {
  return (
    <div className='my-[132px]'>
      <Container className='max-w-[1396px]!'>
        <SubHeading className='text-center max-w-[618px] mx-auto mb-16'>
          Blog, Guides, Build Logs & More
        </SubHeading>
        <div className='grid gap-6 mb-14'>
          <div className='grid grid-cols-2 gap-6 '>
            {Blogs_Data.map((item, index) => (
              <div className={`grey-bg rounded-lg h-[335px] overflow-hidden p-8 relative ${index === 0 ? 'grey-bg ' : 'light-blue-bg'}`} key={index}>
                <div className={`${index === 0 ? 'max-w-[407px] w-full' : 'max-w-[360px] w-full flex justify-center flex-col'}`} >
                  <SubHeading className='text-[32px]! mb-3 '>
                    {item.title}
                  </SubHeading>
                  <Description className='mb-7'>
                    {item.description}
                  </Description>
                  <Link href='/blog/raspberry-pi-retro-console' className='flex items-center gap-2 '>
                    <Description className='text-center '>
                      {item.linktext}
                    </Description>
                    <Product_Arrow />
                  </Link>
                </div>
                <Image src={item.img} alt='item.img' width={300} height={300} className={`rounded-md mx-auto absolute ${index === 0 ? 'bottom-2.5 right-0' : 'top-[18px] -rotate-90 right-2.5 scale-[1.1]'}`} />
              </div>
            ))}
          </div>
          <div className='blue-bg h-[388px] relative rounded-lg'>
            <Image src={motherboard} alt='motherboard' className='absolute left-0 top-[13%]' />
            <Image src={controller} alt='' className='absolute right-0 top-[18%]' />
            <div className='max-w-[408px] flex flex-col mx-auto justify-center h-full'>
              <SubHeading className='mb-3 text-center text-[32px]!'>
                Inside a Raspberry Pi Retro Console
              </SubHeading>
              <Description className='text-center mb-7'>
                Step-by-step log of building a retro game machine.
              </Description>
              <Link href='/blog/raspberry-pi-retro-console' className='flex items-center gap-2 mx-auto'>
                <Description className='text-center'>
                  View Build Log
                </Description>
                <Product_Arrow />
              </Link>
            </div>
          </div>
          <Button className='dark-blue max-w-[196px] text-white text-[16px] font-medium mx-auto'>
            View All Blog Posts
          </Button>
        </div>
      </Container >

    </div >
  )
}

export default Blogs