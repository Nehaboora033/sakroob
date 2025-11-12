
import React from 'react'
import PopularProducts from '@/components/Home/PopularProducts'
import Blogs from '@/components/Home/Blogs'
import OurClients from '@/components/Home/OurClients'
import FooterCard from '@/components/FooterCard'
import Bestsellers from '@/components/Home/Bestsellers'
import Hero from '@/components/Home/Hero'


const page = () => {
  return (
    <>
      <Hero />
      <PopularProducts />
      <Bestsellers />
      <Blogs />
      <OurClients />
      <FooterCard />
    </>
  )
}

export default page