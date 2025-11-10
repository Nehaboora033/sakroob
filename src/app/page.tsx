
import React from 'react'
import PopularProducts from '@/components/Home/PopularProducts'
import Blogs from '@/components/Home/Blogs'
import OurClients from '@/components/Home/OurClients'
import Footer from '@/components/common/Footer'
import FooterCard from '@/components/FooterCard'
import Bestsellers from '@/components/Home/Bestsellers'

const page = () => {
  return (
    <>
      <PopularProducts />
      <Bestsellers />
      <Blogs />
      <OurClients />
      <FooterCard />
      <Footer />
    </>
  )
}

export default page