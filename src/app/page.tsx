
import React from 'react'
import Blogs from '@/components/Home/Blogs'
import OurClients from '@/components/Home/OurClients'
import FooterCard from '@/components/FooterCard'
import Bestsellers from '@/components/Home/Bestsellers'
import Hero from '@/components/Home/Hero'
import ShopPopularProducts from '@/components/Home/ShopPopularProducts'



const page = () => {
  return (
    <>
      <Hero />
      <ShopPopularProducts />
      <Bestsellers />
      <Blogs />
      <OurClients />
      <FooterCard />
    </>
  )
}

export default page