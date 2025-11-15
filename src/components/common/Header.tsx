'use client'
import React from 'react'
import logo from '../../assets/png/header-logo.png'
import Image from 'next/image'
import Link from 'next/link';
import { Cart, Like, Profile } from '@/Utils/icons';
import Dropdown from './Dropdown';
import profile from '../../assets/png/customerprofile.png'
import SearchBar from './SearchBar';
import { useCart } from '@/app/cart/CartContext';

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
  const { cart } = useCart();
  return (
    <div>
      <div className='bg-dark-blue h-20 '>
        <div className='max-w-[1396px] mx-auto px-3 flex justify-between items-center h-20'>
          <Link href={'/'}>
            <Image src={logo} alt='logo'
              className='flex translate-y-[30%] cursor-pointer' />
          </Link>
          <div className='text-white flex items-center gap-8'>
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
            <nav className=' flex gap-8'>
              {Navlinks_Data.map((item, index) => (
                <Link href={item.link} key={index}>
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className='flex gap-9 items-center '>
            <div className='flex items-center gap-3.5'>
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
            <Image src={profile} alt='profile' className='cursor-pointer' />
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