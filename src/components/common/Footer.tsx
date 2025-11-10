import React, { FC, SVGProps } from 'react'
import Image from 'next/image'
import logo from '../../assets/png/footer logo.png'
import Description from '../common/Description'
import { Facebook, Instagram, Twitter, YouTube } from '@/Utils/icons'
import Link from 'next/link'
import Container from './Container'


interface Socials {
  svg: FC<SVGProps<SVGSVGElement>>
}

interface Links {
  link: string,
}

export const Footer_Links: Links[] = [
  {
    link: 'Shipping',
  },
  {
    link: 'Warranty',
  },
  {
    link: 'FAQs',

  },
  {
    link: 'Blog',
  },
  {
    link: 'Contact',
  },
]

export const Social_Links: Socials[] = [
  {
    svg: Facebook,
  },
  {
    svg: Instagram,
  },
  {
    svg: Twitter,
  },
  {
    svg: YouTube,
  },

]
const Footer: React.FC = () => {

  const year = new Date().getFullYear();
  return (
    <div className='bg-dark-blue pt-[217px]'>
      <Container className=''>
        <div className='flex flex-col gap-6 pb-[82px] items-center'>
          <Image className='mx-auto' src={logo} alt='footer logo' width={176} height={142} />
          <Description className='text-[#CFD5DB]! text-center mx-auto max-w-[338px]'>
            Commodo egestas etiam arcu curabitur aliquam volutpat a gravida.
          </Description>
          <div className='flex gap-3'>
            {Footer_Links.map((item, index) => (
              <Link href={''} className='text-white' key={index}>
                {item.link}
              </Link>
            ))}
          </div>
          <div className='flex gap-2.5'>
            {Social_Links.map((item, index) => (
              <div className='border border-white rounded-full size-8 flex items-center justify-center hover:bg-white text-white hover:text-dark-blue transition-all duration-200 ease-in-out cursor-pointer' key={index}>
                <item.svg />
              </div>
            ))}
          </div>
        </div>
        <div className='py-[30px] flex justify-between '
          style={{
            borderTop: "1px solid transparent",
            borderImage: "linear-gradient(90deg, rgba(255, 255, 255, 0) 3.37%, rgba(255, 255, 255, 0.8) 51.44%, rgba(255, 255, 255, 0) 100%)",
            borderImageSlice: 1,
          }}>
          <div className='flex '>

            <div className='flex items-center'>
              <Link href={''}>
                <Description className='text-white! text-[14px]! '>
                  Term of Service
                </Description>
              </Link>
              <Link href={''}>
                <Description className='text-white! ml-1.5 text-[14px]!'>
                  | Privacy Policy
                </Description>
              </Link>

            </div>
          </div>
          <h4 className='text-white'>
            © {year} Skaroob. All Rights Reserved.
          </h4>
        </div>
      </Container>

    </div>
  )
}

export default Footer