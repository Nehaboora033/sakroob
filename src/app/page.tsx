
import React from 'react'
import PopularProducts from '@/components/Home/PopularProducts'
import Blogs from '@/components/Home/Blogs'
import OurClients from '@/components/Home/OurClients'
import Footer from '@/components/common/Footer'
import FooterCard from '@/components/FooterCard'
import Bestsellers from '@/components/Home/Bestsellers'
import Hero from '@/components/Home/Hero'
import Header from '@/components/common/Header'

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