'use client';
import React, { useState } from 'react';
import Description from '@/components/common/Description';
import Input from '@/components/common/Input';
import { EyeOff, Eye } from 'lucide-react';
import Button from '@/components/common/Button';
import Link from 'next/link';
import { Facebooksignup, Google } from '@/Utils/icons';

const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle handler
  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center"
      style={{ backgroundImage: 'url(/images/Loginbg.png)' }}
    >
      <div className="border border-[#E3E3E3] rounded-[15px] w-[590px]  p-16 bg-[#FFFFFF] shadow-login">
        <div className="flex flex-col gap-2 mb-6">
          <h2 className="font-bold text-[32px] text-center text-darkblue">
            Welcome back!
          </h2>
          <Description className="text-center text-darkblue">
            Log in below to access your account and keep things running smoothly.
          </Description>
        </div>
        <div className="flex flex-col gap-3 my-6">
          <Input placeholder="Email address" name="email" type="email" />
          {/* Password input with toggle */}
          <Input
            placeholder="Password"
            name="password"

            type={isVisible ? 'text' : 'password'} >
            <button
              type="button"
              onClick={toggleVisibility}
              className="text-gray-500 hover:text-darkblue " >
              {isVisible ? <EyeOff /> : <Eye />}
            </button>
          </Input>
          <Link href={''}>
            <Description className='font-semibold! underline underline-offset-2 flex justify-end '>
              Forgot password?
            </Description>
          </Link>
        </div>
        <Button className='dark-blue text-white w-full mb-5'>
          Login in
        </Button>
        <Description className="text-center">
          Don’t have an account?{' '}
          <Link href="/signup">
            <span className="text-darkblue font-semibold underline underline-offset-2 text-[16px] leading-[150%]">
              Create account
            </span>
          </Link>
        </Description>
        <div>
          <div className='mt-5'>
            <div className='flex items-center mb-4'>
              <hr className='border-[#EBEBEB] flex-1' />
              <Description className={'text-[#b8b6b6]! mx-2'}>
                or continue with
              </Description>
              <hr className='border-[#EBEBEB] flex-1' />
            </div>
            <div className='flex gap-3'>
              <Button className='border border-[#E4EAF7] py-3! flex items-center justify-center gap-2 w-full text-darkblue bg-white'>
                <Google />
                Google
              </Button>
              <Button className='border border-[#E4EAF7] py-3! flex items-center justify-center gap-2 w-full text-darkblue bg-white'>
                <Facebooksignup />
                Facebook
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;