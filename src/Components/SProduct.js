import React, { useEffect } from 'react'
import NavBar from './NavBar'

function SProduct() {
    useEffect(() => {
        
        const MainImg = document.getElementById('MainImg');
        let small = document.querySelectorAll('.small-img');
      
        small.forEach((item) => {
          item.addEventListener('click', () => {
          
            MainImg.setAttribute('src', item.getAttribute('src'));
          });
        });
      }, []);
  return (
    
   <>
 
  <section id="prodetails" className="section-p1">
    <div className="single-pro-image">
      <img src="./static/img/products/f1.webp" width="100%" id="MainImg" alt="" />
      <div className="small-img-group">
        <div className="small-img-col">
          <img
            src="./static/img/products/f1.webp"
            width="100%"
            className="small-img"
            alt=""
          />
        </div>
        <div className="small-img-col">
          <img
            src="./static/img/products/f9.webp"
            width="100%"
            className="small-img"
            alt=""
          />
        </div>
        <div className="small-img-col">
          <img
            src="./static/img/products/f10.webp"
            width="100%"
            className="small-img"
            alt=""
          />
        </div>
        <div className="small-img-col">
          <img
            src="./static/img/products/f12.webp"
            width="100%"
            className="small-img"
            alt=""
          />
        </div>
      </div>
    </div>
    <div className="single-pro-details">
      <h6>Home /T-shirts</h6>
      <h4>Cropped Vest Ruffle Top</h4>
      <h2>$139.00</h2>
      <select>
        <option>Select Size</option>
        <option>XL</option>
        <option>XL</option>
        <option>Small</option>
        <option>Large</option>
      </select>
      <input type="number" defaultValue={1} />
      <button className="normal">Add to Cart</button>
      <h4>Product Details:</h4>
      <span>
        Fashion is all about expressing yourself, and what better way to do that
        than by incorporating ruffle tops into your wardrobe? Ruffle tops have
        been a timeless and versatile fashion choice, capable of transforming a
        simple outfit into a statement of style and femininity. In this article,
        we will explore the charm and diversity of ruffle tops, from their
        history and evolution to styling tips for various occasions.Ruffle tops
        have a timeless and elegant quality that allows them to seamlessly
        transition from one occasion to another. Whether you're aiming for a
        casual, elegant, or professional look, there's a ruffle top to match
        your style. So, embrace the beauty of ruffles and make them a staple in
        your wardrobe, adding a touch of flair and femininity to your everyday
        fashion.
      </span>
    </div>
  </section>
  <section id="product1" className="section-p1">
    <h2>Featured Products</h2>
    <p>Summer Collection New Mordern Design</p>
    <div className="pro-container">
      <div className="pro">
        <img src="./static/img/products/n1.webp" alt="" />
        <div className="des">
          <span>littlebox</span>
          <h5>Cotton Astronaut Tshirts</h5>
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
        <img src="./static/img/products/n2.webp" alt="" />
        <div className="des">
          <span>littlebox</span>
          <h5>Cotton Astronaut Tshirts</h5>
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
        <img src="./static/img/products/n3.webp" alt="" />
        <div className="des">
          <span>littlebox</span>
          <h5>Cotton Astronaut Tshirts</h5>
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
        <img src="./static/img/products/n4.webp" alt="" />
        <div className="des">
          <span>littlebox</span>
          <h5>Cotton Astronaut Tshirts</h5>
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

export default SProduct