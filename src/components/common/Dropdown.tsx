'use client';
import { DropdownIcon } from '@/Utils/icons';
import React, { useState } from 'react';
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
  const router = useRouter();

  const handleSelect = (option: DropdownOption) => {
    setSelected(option.name);
    setIsOpen(false);
    router.push(option.link);
  };

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Button */}
      <button
        className="flex items-center gap-1.5 text-white rounded-lg cursor-pointer focus:outline-none"
      >
        <span>{selected || placeholder}</span>
        <DropdownIcon
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute w-[251px] bg-white rounded-lg shadow-lg z-10 overflow-hidden">
          {options.map((option, index) => (
            <React.Fragment key={index}>
              <button
                onClick={() => handleSelect(option)}
                className="block w-full whitespace-nowrap text-left px-4 py-2 text-dark-blue cursor-pointer hover:bg-gray-100 transition-all duration-150 ease-in-out"
              >
                {option.name}
              </button>

              {/* Gradient Divider — skip after last option */}
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