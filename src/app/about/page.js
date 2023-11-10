import React from 'react'
import { Footer, Navbar } from '@/components/common';
import Banner from './components/Banner';
import Middle from './components/Middle';
import Customers from './components/Customers';
function About() {
  return (
    <>
      <Banner />
      <Middle />
      <Customers />
      {/* <Footer /> */}
    </>
  )
}

export default About
