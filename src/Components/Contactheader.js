import React from 'react'

function Contactheader() {
  return (
    <>
    <>
  <section id="page-header" className="about-header">
    <h2>#Let's_talk</h2>
    <p>LEAVE A MESSAGE.We love to hear from you!</p>
  </section>
  <section id="contact-detailss" className="section-p1">
    <div className="details">
      <span>GET IN TOUCH</span>
      <h2>Visit one of our agency locations or contact us today.</h2>
      <h3>Head Office</h3>
      <div>
        <li>
          <i className="fas fa-map-pin" />
          <p className="contentp">Bhagwan Parshuram Institute of Technology</p>
        </li>
        <li>
          <i className="fas fa-envelope" />
          <p className="contentp">contact@cartigo.com</p>
        </li>
        <li>
          <i className="fas fa-phone-alt" />
          <p className="contentp">contact@987654321</p>
        </li>
        <li>
          <i className="fas fa-clock" />
          <p className="contentp">Monday TO Saturday: 9:00am to 4:00pm</p>
        </li>
      </div>
    </div>
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13993.710373962787!2d77.10203425252793!3d28.73664780972503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d013045aab491%3A0xb6a504893549c54f!2sBhagwan%20Parshuram%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1696865971040!5m2!1sen!2sin"
        width={600}
        height={450}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </section>
  <section id="form-details">
    <form action="">
      <span>LEAVE A MESSAGE</span>
      <h2>We love to hear from you</h2>
      <input text="text" placeholder="Your Name" />
      <input text="text" placeholder="E-mail" />
      <input text="text" placeholder="Subject" />
      <textarea
        name=""
        id=""
        cols={30}
        rows={10}
        placeholder="Your Message"
        defaultValue={""}
      />
      <button className="normal">SUBMIT</button>
    </form>
  </section>
</>

    </>
  )
}

export default Contactheader