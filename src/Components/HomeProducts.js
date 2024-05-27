import React from 'react'
import { NavLink } from 'react-router-dom'

function HomeProducts() {
  return (
   <>
   <section id="product1" className="section-p1">
  <h2>Featured Products</h2>
  <p>Summer Collection New Mordern Design</p>
  <div className="pro-container">
    <div className="pro"><NavLink to="/single">
      <img src="./static/img/products/f1.webp" alt="" />
      <div className="des">
        <span>littlebox</span>
        <h5>Cropped Vest Ruffle Top In Apricot</h5>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
        </div>
        <h4>$78</h4>
      </div></NavLink>
      <a href="#">
        <i className="fal fa-shopping-cart cart" />
      </a>
    </div>
    <div className="pro">
      <img src="./static/img/products/f2.webp" alt="" />
      <div className="des">
        <span>littlebox</span>
        <h5>Cocktail Style Corset Detail Bodycon </h5>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
        </div>
        <h4>$78</h4>
      </div>
      <a href="#">
        <i className="fal fa-shopping-cart cart" />
      </a>
    </div>
    <div className="pro">
      <img src="./static/img/products/f3.webp" alt="" />
      <div className="des">
        <span>littlebox</span>
        <h5>Rib Button Drawstring Midi Dress In Hot Pink</h5>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
        </div>
        <h4>$78</h4>
      </div>
      <a href="#">
        <i className="fal fa-shopping-cart cart" />
      </a>
    </div>
    <div className="pro">
      <img src="./static/img/products/f4.webp" alt="" />
      <div className="des">
        <span>littlebox</span>
        <h5>Summertime Casual Black Mini Dress</h5>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
        </div>
        <h4>$78</h4>
      </div>
      <a href="#">
        <i className="fal fa-shopping-cart cart" />
      </a>
    </div>
    <div className="pro">
      <img src="./static/img/products/f5.webp" alt="" />
      <div className="des">
        <span>littlebox</span>
        <h5>Summer Printed White Ruched Dress</h5>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
        </div>
        <h4>$78</h4>
      </div>
      <a href="#">
        <i className="fal fa-shopping-cart cart" />
      </a>
    </div>
    <div className="pro">
      <img src="./static/img/products/f6.webp" alt="" />
      <div className="des">
        <span>littlebox</span>
        <h5>Floral Printed Blue Summer Dress</h5>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
        </div>
        <h4>$78</h4>
      </div>
      <a href="#">
        <i className="fal fa-shopping-cart cart" />
      </a>
    </div>
    <div className="pro">
      <img src="./static/img/products/f7.webp" alt="" />
      <div className="des">
        <span>littlebox</span>
        <h5>Flower Printed Short Brown Dress</h5>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
        </div>
        <h4>$78</h4>
      </div>
      <a href="#">
        <i className="fal fa-shopping-cart cart" />
      </a>
    </div>
    <div className="pro">
      <img src="./static/img/products/f8.webp" alt="" />
      <div className="des">
        <span>littlebox</span>
        <h5>Wide Leg Solid Tube Jumpsuit In Black</h5>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
        </div>
        <h4>$78</h4>
      </div>
      <a href="#">
        <i className="fal fa-shopping-cart cart" />
      </a>
    </div>
  </div>
</section>

   </>
  )
}

export default HomeProducts