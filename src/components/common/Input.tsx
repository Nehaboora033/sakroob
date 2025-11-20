import React from 'react';

interface InputProps {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  children?: React.ReactNode;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;  // 🔥 Make optional
}

const Input: React.FC<InputProps> = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  className = '',
  children,
  onKeyDown,     // ←🔥 Take the prop
}) => {
  return (
    <div className="w-full relative">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}   // ←🔥 Add here
        className={`rounded-[120px] py-3.5 px-7 w-full bg-[#F4F8F7] placeholder:text-darkblue border border-[#FAFAFA] ${className}`}
      />

      {children && (
        <div className="absolute inset-y-0 right-2 flex items-center">
          {children}
        </div>
      )}
    </div>
  );
};

export default Input;