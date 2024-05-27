import React from 'react'
import NavBar from '../Components/NavBar'
import Shopheader from '../Components/Shopheader'
import Pagination from '../Components/Pagination'
import Newsletter1 from '../Components/Newsletter1'
import Footer1 from '../Components/Footer1'
import ShopNavBar from '../Components/ShopNavbar'
import Products from '../Components/Products'

function Shop() {
  return (
    <>
      <ShopNavBar />
      <Shopheader />
      <Products />
      <Pagination />
      <Newsletter1 />
      <Footer1 />
    </>


  )
}

export default Shop