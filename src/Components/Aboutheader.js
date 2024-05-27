import React from 'react'

function Aboutheader() {
  return (
   <> 
   <>
  <section id="page-header" className="about-header">
    <h2>#KnowUs</h2>
    <p>get to know us better.. !</p>
  </section>
  <section id="about-head" className="section-p1">
    <img src="./static/img/about/a6.jpg" alt="" />
    <div>
      <h2> Who Are We?</h2>
      <p className="para2">
        At CARTIGO, we take pride in offering a wide range of high-quality
        products that cater to your every need. Our commitment to excellence,
        exceptional customer service, and user-friendly online shopping
        experience set us apart from the rest. Whether you're searching for the
        latest fashion trends, cutting-edge electronics, home essentials, or
        unique gifts, you'll find it all right here.
      </p>
      <abbr title="">
        Join Our Community Become a part of the CARTIGO community by subscribing
        to our newsletter and following us on social media. Stay updated on new
        arrivals, exclusive offers, and exciting promotions.
      </abbr>
      <br />
      <br />
      <marquee bgcolor="#ccc" loop="'-1" scrollamount={5} width="100%">
        Thank you for choosing CARTIGO as your trusted online shopping
        destination. We look forward to serving you and making your shopping
        experience delightful and convenient. Happy shopping!
      </marquee>
    </div>
  </section>
  <section id="about-app" className="section-p1">
    <h1>
      Download Our <a href="#">App</a>
    </h1>
    <div className="video">
      <video autoPlay={true} muted={true} loop={true} src="./static/img/about/1.mp4" />
    </div>
  </section>
</>

   </>
  )
}

export default Aboutheader