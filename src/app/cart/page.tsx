'use client';
import React from 'react'
import Link from 'next/link'
import Container from '@/components/common/Container'
import Description from '@/components/common/Description'
import { Decrease, Delete, Increase } from '@/Utils/icons';
import Image from 'next/image';
import { useCart } from './CartContext';
import { ShoppingCart } from 'lucide-react';
import Button from '@/components/common/Button';


const CartPage: React.FC = () => {
    const { cart, removeFromCart, addToCart, decreaseQuantity } = useCart();

    // calculate total dynamically
    const estimatedTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className='pb-[132px]'>
            <Container>

                {/* ---- PAGE HEADER ---- */}
                <div className='flex items-center justify-between mb-[52px] pt-[94px] '>
                    <h3 className='font-bold text-[34px] '>
                        Your cart
                    </h3>
                    <Link href={'/'} >
                        <Description className='underline-offset-2 underline text-[#41576D]!'>
                            Continue Shopping
                        </Description>
                    </Link>
                </div>

                {/* ---- EMPTY CART ---- */}
                {cart.length === 0 ? (
                    <div className='flex flex-col gap-4 items-center'>
                        <p className='text-center text-[20px] flex gap-3 '>
                            <ShoppingCart />
                            Your cart is empty...
                        </p>
                        <Link href={'/'}>
                            <Button className='bg-dark-blue text-white px-12! w-fit!'>
                                Explore Products
                            </Button>
                        </Link>
                    </div>
                ) : (
                    <>
                        {/* ---- TOP HEADER ROW ---- */}
                        <div className='flex bg-[#F5F5F5] border-b border-[#112D491A] p-5 rounded-tl-lg rounded-tr-lg gap-2'>
                            <div className='w-[40%] text-[18px] font-medium text-dark-blue'>
                                Product
                            </div>

                            <div className='w-[60%] flex'>
                                <div className='w-1/2 text-[18px] font-medium text-dark-blue'>
                                    Quantity
                                </div>
                                <div className='w-1/2 text-[18px] font-medium text-dark-blue'>
                                    Total
                                </div>
                            </div>
                        </div>

                        {/* ---- CART ITEMS ---- */}
                        {cart.map((item) => (
                            <div key={item.id} className='flex items-center bg-[#F4F8F7] p-5 gap-2 '>

                                {/* Product Section */}
                                <div className='flex items-center gap-6 w-[40%]'>
                                    <div className='bg-[#E9E9E9] py-[7px] px-5 size-[85px] relative border border-[#00000033] rounded-tl-lg rounded-br-lg flex items-center justify-center'>
                                        <Image src={item.image} alt={item.title} width={85} height={85} />
                                        <div className='rounded-full bg-[#C7C7C7] absolute size-[34px] -top-3 -right-5 text-dark-blue flex items-center justify-center'>
                                            {item.quantity}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className='font-medium text-[20px]'>{item.title}</h4>
                                        <p className='text-[#8292A0]'>{item.price} AED</p>
                                    </div>
                                </div>

                                {/* Quantity + Total */}
                                <div className='flex items-center w-[60%]'>
                                    <div className='flex items-center gap-2 w-1/2'>
                                        <div className='h-11 flex'>
                                            {/* Decrease */}
                                            <button
                                                className='bg-sky-blue rounded-tl-lg rounded-bl-lg px-[19px] flex items-center cursor-pointer'
                                                onClick={() => {
                                                    if (item.quantity > 1) {
                                                        decreaseQuantity(item.id);
                                                    } else {
                                                        removeFromCart(item.id);
                                                    }
                                                }}>
                                                <Decrease />
                                            </button>

                                            <div className='border-y px-[31px] text-[20px] flex items-center'>{item.quantity}</div>

                                            {/* Increase */}
                                            <button
                                                className='bg-dark-blue rounded-tr-lg rounded-br-lg px-[19px] flex items-center cursor-pointer'
                                                onClick={() =>
                                                    addToCart({ ...item, quantity: 1 })
                                                }>
                                                <Increase />
                                            </button>
                                        </div>

                                        {/* Delete */}
                                        <button
                                            type="button"
                                            className='ml-3'
                                            onClick={() => removeFromCart(item.id)}>
                                            <Delete className='cursor-pointer' />
                                        </button>
                                    </div>

                                    {/* Item Total */}
                                    <div className='w-1/2 text-[#3E566C]'>
                                        Dhs {(item.price * item.quantity).toFixed(2)}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* ---- BOTTOM TOTAL SUMMARY ---- */}
                        <div className='flex items-center bg-[#F4F8F7] p-5 rounded-bl-lg rounded-br-lg' style={{
                            borderTop: '1px solid',
                            borderImageSource:
                                'linear-gradient(90deg, rgba(17, 45, 73, 0) 0%, #112D49 52.88%, rgba(17, 45, 73, 0) 100%)',
                            borderImageSlice: 1,
                        }} >
                            <div className='w-[40%]'></div>
                            <div className='w-[60%] flex items-center'>
                                <div className='w-1/2'></div>

                                <div className='w-1/2'>
                                    <div className='flex justify-between items-center mb-2'>
                                        <Description>Estimated total</Description>
                                        <Description className='font-semibold!'>
                                            Dhs {estimatedTotal.toFixed(2)} AED
                                        </Description>
                                    </div>

                                    <Description className='mb-6 text-[#3E566C]!'>
                                        Taxes, discounts and shipping calculated at checkout.
                                    </Description>

                                    <Button className='bg-dark-blue text-white w-full max-w-[330px]'>
                                        Check out
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </Container>
        </div>
    )
}

export default CartPage