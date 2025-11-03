import React from 'react';

interface InputProps {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  error?: string;
  children?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  className = '',
  error,
  children,
}) => {
  return (
    <div className="w-full relative">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`rounded-[120px] py-3.5 px-7 w-full bg-[#F4F8F7] placeholder:text-darkblue ${
          error ? 'border-red-500' : 'border-[#FAFAFA]'
        } border ${className} ${children ? 'pl-10' : ''}`}
      />

      {children && (
        <div className="absolute inset-y-0 right-4 flex items-center">
          {children}
        </div>
      )}

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;