import React from 'react'
import { NavLink } from 'react-router-dom'
function Footer1() {
  return (

<>
    <footer className="section-p1">
  <div className="col">
    <img className="logo" src="./static/img/logo.png" alt="" />
    <h4>Contact</h4>
    <p className="pcontact">
      <strong>Address:</strong> 562 Wellington Road, Street 32, San Francisco
    </p>
    <p className="pcontact">
      <strong>Phone: +01 2345 6789</strong>
    </p>
    <p className="pcontact">
      <strong>Hours:</strong>10:00-10:00, Mon-Sat
    </p>
    <div className="follow">
      <h4>Follow us:</h4>
      <div className="icon">
        <a href="https://www.facebook.com/" target="_blank">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="https://www.twitter.com/" target="_blank">
          <i className="fab fa-twitter" />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <i className="fab fa-instagram" />
        </a>
        <a href="https://www.pinterest.com/" target="_blank">
          <i className="fab fa-pinterest-p" />
        </a>
        <a href="https://www.youtube.com/" target="_blank">
          <i className="fab fa-youtube" />
        </a>
      </div>
    </div>
  </div>
  <div className="col">
    <h4>About</h4>
    <NavLink to="/about">About us</NavLink>
    <a href="#">Delivery Information</a>
    <a href="#">Privacy Policy</a>
    <a href="#">Terms &amp; Conditions</a>
    <NavLink to="/contact">Contact us</NavLink>
  </div>
  <div className="col">
    <h4>My Account</h4>
    <a href="#">Sign In</a>
    <NavLink to="/cart">View Cart</NavLink>
    <a href="#">My Wishlist</a>
    <a href="#">Track My Order</a>
    <a href="#">Help</a>
  </div>
  <div className="col install">
    <h4>Install App</h4>
    <pre>From App Store or Google Play</pre>
    <div className="row">
      <img src="./static/img/pay/app.jpg" alt="" />
      <img src="./static/img/pay/play.jpg" alt="" />
    </div>
    <pre>Secured Payment Gateways</pre>
    <img src="./static/img/pay/pay.png" alt="" />
  </div>
</footer>
</>
  )
}

export default Footer1
