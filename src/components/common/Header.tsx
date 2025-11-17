'use client'
import React, { useEffect, useState } from 'react'
import logo from '../../assets/png/header-logo.png'
import Image from 'next/image'
import Link from 'next/link';
import { Cart, Like, Profile } from '@/Utils/icons';
import Dropdown from './Dropdown';
import profile from '../../assets/png/customerprofile.png'
import SearchBar from './SearchBar';
import { useCart } from '@/app/cart/CartContext';
import logo2 from '../../assets/png/logo-2.png'
import { Squash as Hamburger } from 'hamburger-react'
import Button from './Button';

interface NavlinksProps {
  name: string;
  link: string;
}

// DropDownData.ts
export interface DropdownOption {
  name: string;
  link: string;
}

export interface DropdownItem {
  placeholder: string;
  options: DropdownOption[];
}

export const Navlinks_Data: NavlinksProps[] = [
  {
    name: 'About',
    link: '/about',
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

export const DropDown_Data: DropdownItem[] = [
  {
    placeholder: 'PC Products',
    options: [
      { name: 'Standard PC Components', link: '/standard' },
      { name: 'Reference Earlier Examples', link: '/reference' },
    ],
  },
  {
    placeholder: 'DIY Services',
    options: [
      { name: 'Services', link: '/services' },
    ],
  },
  {
    placeholder: 'Support',
    options: [
      { name: 'FAQ’s', link: '/faqs' },
      { name: 'Returns', link: '/returns' },
      { name: 'Contact', link: '/contact' },
    ],
  },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 z-20  w-full ${isScrolled ? "fixed top-0 left-0 shadow-lg" : ""}`}>
      <div className='bg-dark-blue xl:h-20 h-[85px] '>
        <div className='max-w-[1396px] mx-auto px-3 flex justify-between items-center h-20'>
          <Link href={'/'}>
            <div className="">
              {/* Logo for small screens */}
              <Image
                src={logo}
                alt="logo"
                className="hidden xl:block translate-y-[30px] "
              />

              {/* Logo for big screens */}
              <Image
                src={logo2}
                alt="logo white"
                className="block xl:hidden  "
              />
            </div>
          </Link>
          <div className={`text-white flex items-center gap-8 max-xl:flex-col max-xl:items-center z-10 max-xl:justify-center transition-[right] max-xl:fixed max-xl:top-0 duration-800 ease-in-out max-sm:w-full max-xl:w-[75%] max-xl:h-full max-xl:bg-dark-blue ${isOpen ? 'right-0 ' : 'max-xl:-right-full'}`}>
            <Link href={'/'}>
              Categories
            </Link>
            {DropDown_Data.map((item, index) => (
              <Dropdown
                key={index}
                placeholder={item.placeholder}
                options={item.options}
              />
            ))}
            <nav className=' flex max-xl:flex-col items-center gap-8'>
              {Navlinks_Data.map((item, index) => (
                <Link href={item.link} key={index}>
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className='flex sm:gap-5  gap-3 items-center '>
            <div className='flex items-center sm:gap-3.5 gap-2'>
              <Profile className='cursor-pointer' />
              <div className='bg-[#D9D9D9] w-px h-8 '></div>
              <Like className='cursor-pointer' />
              <div className='bg-[#D9D9D9] w-px h-8'></div>
              <Link href={"/cart"} className="relative">
                <Cart className="cursor-pointer" />

                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-white text-dark-blue text-[12px] rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.reduce((total: number, item) => total + item.quantity, 0)}
                  </span>
                )}
              </Link>
            </div>
            <Button className='xl:hidden p-0! z-11'>
              <Hamburger
                toggled={isOpen}
                color="#ffffff"
                toggle={() => setIsOpen(!isOpen)}
              />
            </Button>

            <Image src={profile} alt='profile' className={`cursor-pointer xl:block hidden `} />
          </div>
        </div>
      </div>
      <div className="bg-[#F1F6FC] h-[74px] flex items-center justify-center">
        <div className="text-center ">
          <SearchBar />
        </div>
      </div>
    </div>
  )
}

export default Header