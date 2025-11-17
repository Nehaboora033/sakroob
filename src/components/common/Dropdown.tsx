'use client';
import { DropdownIcon } from '@/Utils/icons';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface DropdownOption {
  name: string;
  link: string;
}

interface DropdownProps {
  options: DropdownOption[];
  placeholder?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, placeholder = 'Select' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  // Detect screen size
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 1280);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleSelect = (option: DropdownOption) => {
    setSelected(option.name);
    setIsOpen(false);
    router.push(option.link);
  };

  return (
    <div
      className={`relative text-left ${isMobile ? "w-[300px]! text-center" : "inline-block"}`}
      {...(!isMobile && {
        onMouseEnter: () => setIsOpen(true),
        onMouseLeave: () => setIsOpen(false),
      })}
    >

      {/* BUTTON */}
      <button
        onClick={() => isMobile && setIsOpen(!isOpen)}
        className="flex items-center justify-center gap-1.5 text-white whitespace-nowrap rounded-lg cursor-pointer w-full"
      >
        <span>{selected || placeholder}</span>
        <DropdownIcon
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>

      {/* DROPDOWN MENU */}
      {isOpen && (
        <div
          className={`bg-white rounded-lg shadow-lg z-10 overflow-hidden 
            ${isMobile ? "relative mt-2 w-full" : "absolute w-[251px]"}
          `}
        >
          {options.map((option, index) => (
            <React.Fragment key={index}>
              <button
                onClick={() => handleSelect(option)}
                className="block w-full whitespace-nowrap text-left px-4 py-2 text-dark-blue cursor-pointer hover:bg-gray-100"
              >
                {option.name}
              </button>

              {index !== options.length - 1 && (
                <div
                  className="h-px w-full"
                  style={{
                    background:
                      'linear-gradient(90deg, rgba(17, 45, 73, 0) 0%, #112D49 52.88%, rgba(17, 45, 73, 0) 100%)',
                  }}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;