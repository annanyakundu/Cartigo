import React from 'react'
import NavBar from '../Components/NavBar'
import Features from '../Components/Features'
import Products from '../Components/Products'
import Banner from '../Components/Banner'
import NewArrivals from '../Components/NewArrivals'
import Smbanner from '../Components/Smbanner'
import Footer1 from '../Components/Footer1'
import Hero from '../Components/Hero'
import Newsletter1 from '../Components/Newsletter1'
import HomeProducts from '../Components/HomeProducts'


function Home() {
  return (
  <>
  <NavBar/>
  <Hero/>
  <Features/>
  <HomeProducts/>
  <Banner/>
  <NewArrivals/>
  <Smbanner/>
 <Newsletter1/>
  <Footer1/>
  </>
  )
}

export default Home