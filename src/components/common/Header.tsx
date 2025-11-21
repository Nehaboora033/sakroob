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
import MobileMenu from './MobileMenu';
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";


interface NavlinksProps {
  name: string;
  link: string;
}

export interface DropdownOption {
  name: string;
  link: string;
}

export interface DropdownItem {
  placeholder: string;
  options: DropdownOption[];
}

export const Navlinks_Data: NavlinksProps[] = [
  { name: 'About', link: '/about' },
  { name: 'Blog', link: '/blog' },
  { name: 'Contact', link: '/contact' },
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
  const { user, loading, logout } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const router = useRouter();

  // 🚀 NEW useEffect — stop scrolling
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <div className={`fixed top-0 z-20 w-full ${isScrolled ? "shadow-lg" : ""}`}>
      <div className='bg-dark-blue xl:h-20 h-[85px]'>
        <div className='max-w-[1396px] mx-auto px-3 flex justify-between items-center h-20'>

          {/* LOGO */}
          <Link href={'/'}>
            <div>
              <Image src={logo} alt="logo" className="hidden xl:block translate-y-[30px]" />
              <Image src={logo2} alt="logo white" className="block xl:hidden" />
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden xl:flex items-center gap-8 text-white">
            <Link href="/">Categories</Link>

            {DropDown_Data.map((item, index) => (
              <Dropdown key={index} placeholder={item.placeholder} options={item.options} />
            ))}

            <nav className="flex items-center gap-8">
              {Navlinks_Data.map((item, index) => (
                <Link href={item.link} key={index}>{item.name}</Link>
              ))}
            </nav>
          </div>

          {/* RIGHT ICONS + HAMBURGER */}
          <div className='flex sm:gap-5 gap-1 items-center'>
            <div className='flex items-center sm:gap-3.5 gap-2'>
              <div className="relative group">
                <div
                  onClick={async () => {
                    await logout();
                    router.push("/signin");
                  }}
                >
                  <Profile className="cursor-pointer" />
                </div>

                {/* Tooltip */}
                <span className="
    absolute left-1/2 -translate-x-1/2 mt-2 
    text-sm bg-white text-dark-blue px-2 py-1 rounded 
    opacity-0 group-hover:opacity-100 
    transition-opacity duration-200 whitespace-nowrap
  ">
                  Logout
                </span>
              </div>
              <div className='bg-[#D9D9D9] w-px h-8'></div>
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

            {/* HAMBURGER BUTTON */}
            <div className="xl:hidden z-30">
              <Hamburger
                toggled={isOpen}
                toggle={setIsOpen}
                color="#ffffff"
                size={26}
                duration={0.4}
              />
            </div>
            {mounted && !loading && (
              user ? (
                <Image
                  src={user.photoURL ?? profile}
                  alt="user"
                  width={33}
                  height={33}
                  className=" rounded-full object-cover cursor-pointer xl:block hidden"
                />
              ) : (
                <Image
                  src={profile}
                  alt="default profile"
                  width={33}
                  height={33}
                  className=" rounded-full object-cover cursor-pointer xl:block hidden"
                />
              )
            )}
          </div>
        </div>

        {/* MOBILE MENU (OVERLAY PANEL) */}
        <MobileMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          dropDownData={DropDown_Data}
          navLinksData={Navlinks_Data}
        />
      </div>

      {/* SEARCH BAR */}
      <div className="bg-[#F1F6FC] h-[74px] flex items-center justify-center">
        <SearchBar />
      </div>
    </div>
  )
}

export default Header;