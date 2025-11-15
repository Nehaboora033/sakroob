import React, { FC, SVGProps } from 'react'
import Image from 'next/image'
import logo from '../../assets/png/footer logo.png'
import Description from '../common/Description'
import { Facebook, Instagram, Twitter, YouTube } from '@/Utils/icons'
import Link from 'next/link'
import Container from './Container'


interface SocialsProps {
  svg: FC<SVGProps<SVGSVGElement>>;
  link: string;
}

interface FooterLinksProps {
  name: string;
  link: string;
}

export const Footer_Links: FooterLinksProps[] = [
  {
    name: 'Shipping',
    link: '/services',
  },
  {
    name: 'Warranty',
    link: '/',
  },
  {
    name: 'FAQs',
    link: '/faqs',

  },
  {
    name: 'Blog',
    link: '/blog',
  },
  {
    name: 'Contact',
    link: '/contact',
  },
]

export const Social_Links: SocialsProps[] = [
  {
    svg: Facebook,
    link: 'https://www.facebook.com/',
  },
  {
    svg: Instagram,
    link: 'https://www.instagram.com/',
  },
  {
    svg: Twitter,
    link: 'https://x.com/',
  },
  {
    svg: YouTube,
    link: 'https://www.youtube.com/',
  },

]
const Footer: React.FC = () => {

  const year = new Date().getFullYear();
  return (
    <div className='bg-dark-blue pt-[217px]'>
      <Container className=''>
        <div className='flex flex-col gap-6 pb-[82px] items-center'>
          <Link href={'/'}>
            <Image className='mx-auto' src={logo} alt='footer logo' width={176} height={142} />
          </Link>
          <Description className='text-[#CFD5DB]! text-center mx-auto max-w-[338px]'>
            Commodo egestas etiam arcu curabitur aliquam volutpat a gravida.
          </Description>
          <div className='flex gap-6 justify-center flex-wrap'>
            {Footer_Links.map((item, index) => (
              <Link href={item.link} className='text-white ' key={index}>
                {item.name}
              </Link>
            ))}
          </div>
          <div className='flex gap-2.5'>
            {Social_Links.map((item, index) => (
              <Link href={item.link} target="_blank" className='border border-white rounded-full size-8 flex items-center justify-center hover:bg-white text-white hover:text-dark-blue transition-all duration-200 ease-in-out cursor-pointer' key={index}>
                <item.svg />
              </Link>
            ))}
          </div>
        </div>
        <div className='min-[580px]:py-[30px] py-5 flex justify-between  items-center min-[580px]:flex-row flex-col min-[580px]:gap-0 gap-4 '
          style={{
            borderTop: "1px solid transparent",
            borderImage: "linear-gradient(90deg, rgba(255, 255, 255, 0) 3.37%, rgba(255, 255, 255, 0.8) 51.44%, rgba(255, 255, 255, 0) 100%)",
            borderImageSlice: 1,
          }}>
          <div className='flex '>

            <div className='flex items-center '>
              <Link href={''}>
                <Description className='text-white! text-[14px]! whitespace-nowrap '>
                  Term of Service
                </Description>
              </Link>
              <Link href={''}>
                <Description className='text-white! ml-1.5 text-[14px]! whitespace-nowrap'>
                  | Privacy Policy
                </Description>
              </Link>

            </div>
          </div>
          <h4 className='text-white whitespace-nowrap'>
            © {year} Skaroob. All Rights Reserved.
          </h4>
        </div>
      </Container>

    </div>
  )
}

export default Footer