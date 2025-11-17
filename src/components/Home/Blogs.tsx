import React from 'react'
import Container from '../common/Container'
import SubHeading from '../common/SubHeading'
import Description from '../common/Description'
import Link from 'next/link'
import { Product_Arrow } from '@/Utils/icons'
import Image, { StaticImageData } from 'next/image'

import motherboard from '../../assets/png/motherboard.png'
import controller from '../../assets/png/controller.png'
import tools from '../../assets/png/five tools.png'
import nas from '../../assets/png/miniNAS.png'
import Button from '../common/Button'

interface BlogsProps {
  title: string;
  description: string;
  linktext: string;
  link: string;
  img?: StaticImageData;
  imgleft?: StaticImageData;
  imgright?: StaticImageData;
}

export const Blogs_Data: BlogsProps[] = [
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
  {
    title: 'Inside a Raspberry Pi Retro Console',
    description: 'Step-by-step log of building a retro game machine.',
    linktext: 'View Build Log',
    link: '/',
    imgleft: motherboard,
    imgright: controller,
  },
];
const Blogs: React.FC = () => {
  return (
    <div className="my-[132px]">
      <Container className="max-w-[1396px]!">
        <SubHeading className="text-center max-w-[618px] mx-auto mb-16">
          Blog, Guides, Build Logs & More
        </SubHeading>
        <div className="grid gap-6 mb-14">

          {/* FIRST 2 BLOG BOXES */}
          <div className="grid lg:grid-cols-2 gap-6">
            {Blogs_Data.slice(0, 2).map((item, index) => (
              <div
                key={index}
                className={`rounded-lg min-[550px]:h-[335px] p-3.5  sm:p-8 min-[550px]:relative overflow-hidden 
                ${index === 0 ? 'grey-bg' : 'light-blue-bg'}`}>
                {/* IMAGE */}
                {item.img && (
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={300}
                    height={300}
                    className={`min-[550px]:absolute w-auto h-auto rounded-md mx-auto 
                     ${index === 0
                        ? 'min-[1290px]:scale-[2] min-[550px]:scale-[1.6] scale-[1.2] mb-4 min-[1290px]:right-20 min-[550px]:right-13 min-[1290px]:bottom-[70px] min-[550px]:bottom-10'
                        : 'min-[550px]:top-[18px] min-[550px]:-rotate-90 rotate-180 -translate-y-3 min-[550px]:right-2.5 scale-[1] w-[200px] '
                      }`}
                  />
                )}
                {/* TEXT BLOCK */}
                <div
                  className={
                    index === 0
                      ? 'max-w-[407px]'
                      : 'max-w-[360px] flex flex-col justify-center max-[550px]:-translate-y-[50px]'
                  } >
                  <SubHeading className="min-[550px]:text-[32px]! text-[24px]! mb-3">{item.title}</SubHeading>
                  <Description className="sm:mb-7 mb-3">{item.description}</Description>

                  <Link href={item.link} className="flex items-center gap-2">
                    <Description >{item.linktext}</Description>
                    <Product_Arrow />
                  </Link>
                </div>

              </div>
            ))}
          </div>

          {/* THIRD LARGE BOX (Gets data from Blogs_Data[2]) */}
          {Blogs_Data[2] && (
            <div className="blue-bg lg:h-[388px] lg:relative rounded-lg overflow-hidden 
            flex flex-col lg:flex-row items-center justify-center gap-4 p-3.5">

              {/* LEFT IMAGE */}
              {Blogs_Data[2].imgleft && (
                <Image
                  src={Blogs_Data[2].imgleft}
                  alt="left-image"
                  width={350}

                  className="lg:absolute left-0 top-[13%] xl:w-[350px] lg:w-[320px] sm:w-[280px] block sm:mx-auto mr-auto w-[200px]"
                />
              )}
              <div className="max-w-[408px] mx-auto flex flex-col justify-center text-center  ">
                <SubHeading className="sm:text-[32px]! text-[24px]! mb-3  mt-1">
                  {Blogs_Data[2].title}
                </SubHeading>

                <Description className="sm:mb-7 mb-4">
                  {Blogs_Data[2].description}
                </Description>

                <Link href={Blogs_Data[2].link} className="flex items-center gap-2 mx-auto">
                  <Description>{Blogs_Data[2].linktext}</Description>
                  <Product_Arrow />
                </Link>
              </div>
              {/* RIGHT IMAGE */}
              {Blogs_Data[2].imgright && (
                <Image
                  src={Blogs_Data[2].imgright}
                  alt="right-image"
                  className="lg:absolute right-0 top-[18%] xl:w-[350px] lg:w-[320px] sm:w-[280px] w-[200px] block sm:mx-auto ml-auto"
                />
              )}
            </div>
          )}

          <Button className="dark-blue max-w-[196px] text-white text-[16px] font-medium mx-auto">
            View All Blog Posts
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Blogs;