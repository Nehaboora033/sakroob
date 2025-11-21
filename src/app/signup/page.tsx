'use client';
import React, { useState } from 'react';
import Description from '@/components/common/Description';
import Input from '@/components/common/Input';
import { EyeOff, Eye } from 'lucide-react';
import Button from '@/components/common/Button';
import Link from 'next/link';
import { Facebooksignup, Google } from '@/Utils/icons';
import { useRouter } from 'next/navigation';
import { auth, googleProvider } from '@/firebase/firebaseConfig';
import { createUserWithEmailAndPassword, signInWithPopup, signInWithRedirect } from 'firebase/auth';

const SignPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();


  // Toggle handler
  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // alert("Account created successfully!");
      router.push("/login");
    } catch (error: unknown) {
      alert((error as Error).message);
    }
  };


  const handleGoogleSignup = async () => {
    await signInWithRedirect(auth, googleProvider);
  };
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center"
      style={{ backgroundImage: 'url(/images/Loginbg.png)' }}
    >
      <div className="border border-[#E3E3E3] rounded-[15px] w-[590px]  p-16 bg-[#FFFFFF] shadow-login">
        <div className="flex flex-col gap-2 mb-6">
          <h2 className="font-bold text-[32px] text-center text-darkblue">
            Sign up
          </h2>
          <Description className="text-center text-darkblue">
            Create your account to unlock access and stay updated with everything we offer.
          </Description>
        </div>
        <div className="flex flex-col gap-3 my-6">
          <Input placeholder="Name" name="name" type="text" />
          <Input placeholder="Email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {/* Password input with toggle */}
          <Input
            placeholder="Password"
            name="password"
            value={password} onChange={(e) => setPassword(e.target.value)}
            type={isVisible ? 'text' : 'password'} >
            <button
              type="button"
              onClick={toggleVisibility}
              className="text-gray-500 hover:text-darkblue " >
              {isVisible ? <EyeOff /> : <Eye />}
            </button>
          </Input>
        </div>
        <Button className='dark-blue text-white w-full mb-5' onClick={handleSignup}>
          Sign up
        </Button>
        <Description className="text-center">
          Already a member?{' '}
          <Link href="/login">
            <span className="text-darkblue font-semibold underline underline-offset-2 text-[16px] leading-[150%]">
              Log in
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
              <Button className='border border-[#E4EAF7] py-3! flex items-center justify-center gap-2 w-full text-darkblue bg-white' onClick={handleGoogleSignup} >
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

export default SignPage;