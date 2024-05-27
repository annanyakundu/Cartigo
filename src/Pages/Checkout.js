import React from 'react'
import { useSelector } from 'react-redux';
import { getTotalCartValue } from '../BLL/utility';
import Newsletter1 from '../Components/Newsletter1';
import Footer1 from '../Components/Footer1';
import NavBar from '../Components/NavBar';
import Checkoutform from '../Components/Checkoutform';

function Checkout() {
    
  return (
   <>


  <NavBar/>
  <Checkoutform/>
  <Newsletter1/>
  <Footer1/>

</>



  )
}

export default Checkout