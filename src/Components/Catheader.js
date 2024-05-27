import React from 'react'
import { useSelector } from 'react-redux';
import CartSingle from './CartSingle';
import { getTotalCartValue } from '../BLL/utility';
import { NavLink } from 'react-router-dom';

function Catheader() {
  var cart=useSelector((state)=>state.cart);
  return (
    <>
    <>
  <section id="page-header" className="about-header">
    <h2>#Let's_talk</h2>
    <p>LEAVE A MESSAGE.We love to hear from you!</p>
  </section>
  <section id="cart" className="section-p1">
    <table width="100%">
      <thead>
        <tr>
          <td>Remove</td>
          <td>Image</td>
          <td>Product</td>
          <td>Price</td>
          <td>Quantity</td>
          <td>Subtotal</td>
        </tr>
      </thead>
      <tbody>
        {
           cart.map((e,index)=>(<CartSingle key={index} item={e}/>))
        }
      </tbody>
    </table>
  </section>
  <section id="cart-add" className="section-p1">
    <div id="coupon">
      <h3>Apply Coupon</h3>
      <div>
        <input type="text" placeholder="Enter Your Coupon" />
        <button className="normal">Apply</button>
      </div>
    </div>
    <div id="subtotal">
      <h3>Cart Total</h3>
      <table>
        <tbody>
          <tr>
            <td>Cart Subtotal</td>
            <td>${getTotalCartValue(cart)}</td>
          </tr>
          <tr>
            <td>Shipping</td>
            <td>$0</td>
          </tr>
          <tr>
            <td>
              <strong>Total</strong>
            </td>
            <td>
              <strong>${parseFloat(getTotalCartValue(cart))}</strong>
            </td>
          </tr>
        </tbody>
      </table>
      <button className="normal">
      <NavLink to="/checkout">
      Proceed to Checkout
                </NavLink>
        </button>
    </div>
  </section>
</>

    </>
  )
}

export default Catheader