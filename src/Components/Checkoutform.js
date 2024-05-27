import React from 'react'
import { useSelector } from 'react-redux';
import { getTotalCartValue } from '../BLL/utility';
import axios from 'axios';

function Checkoutform() {
    var cart=useSelector((state)=>state.cart);
    const submitHandler=(event)=>{
      event.preventDefault();
      const fname=event.target.fname.value;
      const lname=event.target.lname.value;
      const email=event.target.email.value;
      const mobileNo=event.target.mobileNo.value;
      const address1=event.target.address1.value;
      const address2=event.target.address2.value;
      const country=event.target.country.value;
      const city=event.target.city.value;
      const state=event.target.state.value;
      const pincode=event.target.pincode.value;
      const data={fname,lname,email, mobileNo,address1, address2, country, city,state,pincode};
      axios
      .post("https://jsonplaceholder.typicode.com/posts",data)
      .then((response)=>{
        console.log(response);
        event.target.reset();
      })
      .catch((error)=>{
        console.log(error);
      });
    };
  return (
   <>
  
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n    #left  td {\n        padding: 5px;\n         }\n      fieldset {\n        display: inline;\n      width: 100%;\n      border: none;\n    margin-left: 77px;\n      }\n .button1 Navlink {\ntext-decoration:none;\ncolor:white;\n }\n     #subtotal{\n        margin-bottom: 25px;\n        border:none !important;\n      }\n      h3 {\n        color: #880606;\n        padding: 0px 0px 15px;\n      }\n      #left table {\n        border: hidden;\n        border-collapse: collapse;\n        width: 100%;\n      }\n      body{\n        background-color:#F5F7F8 ;\n      }\n    .grey{\nbackground-color:white ;\n\n      }\n      #subtotal, #payment{\n        width:500px;\n        padding:30px;\n      }\n      #left th, td {\n        padding: 10px;\n        text-align: left;\n      }\n      #left input[type="text"],\n      #left input[type="email"],\n      #left input[type="tel"] {\n        width: 75%;\n        padding: 5px;\n        margin: 5px 0;\n      }\n      #left input[type="reset"],\n      #left input[type="submit"] {\n        background-color: #241e1e;\n        color: white;\n        padding: 10px 20px;\n      margin-bottom: 15px;\n      border: none;\n        cursor: pointer;\n      }\n      #left input[type="reset"]:hover,\n      #left input[type="submit"]:hover {\n        background-color: #880606;\n      }\n  \n      #left label {\n        display: block; \n        font-weight: bold;\n        margin-bottom: 5px;\n      }\n    .button-row {\n        text-align: center; \n      }\n       .button-row input {\n        margin: 10px; \n      }\n      #container {\n    width: 100%;\n}\n\n/* Positioning the left and right divs within the container */\n#left {\n    float: left;\n    width: 50%;\n}\n\n#right {\n    float: right;\n    width: 40%;\n}\n     .clear {\n    clear: both;\n}\n   #subtotal table,td,tr{\n        border: none !important;\n      }\n        .button1 {\n            display: block;\n            margin: 0 auto; \n            background-color: #000; \n            color: #fff; \n            padding: 10px 20px;\n            border: none;\n            cursor: pointer;\n            margin-bottom:10px;\n        }\n\n        .button1:hover {\n            background-color: #880606; /* Red background color on hover */\n        }\n\n        .payment{\n          padding:30px;\n        }\n    '
    }}
  />
  <br></br>
  
  <br></br>
 <center><h2>Checkout</h2></center>
 <br></br>
  <div id="container">
    <div id="left">
      <fieldset>
        <legend>
            <br></br>
            
         <pre><h3> Billing Details</h3></pre> 
          
        </legend>
        <div className="grey">
          <form method="post" action="" autoComplete="on" onSubmit={submitHandler}>
            <table>
              <tbody>
                <tr>
                  <td>
                    <label htmlFor="fname">First Name:</label>
                    <input
                      type="text"
                      placeholder="John"
                      id="fname"
                      name="fname"
                    />
                  </td>
                  <td>
                    <label htmlFor="lname">Last Name:</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      id="lname"
                      name="lname"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="email">E-mail:</label>
                    <input
                      type="email"
                      placeholder="example@gmail.com"
                      name="email"
                      id="email"
                    />
                  </td>
                  <td>
                    <label htmlFor="mobileNo">Mobile No:</label>
                    <input
                      type="tel"
                      placeholder="+123 456 789"
                      name="mobileNo"
                      id="mobileNo"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="address1">Address 1:</label>
                    <input
                      type="text"
                      placeholder="123 Street"
                      name="address1"
                      id="address1"
                    />
                  </td>
                  <td>
                    <label htmlFor="address2">Address 2:</label>
                    <input
                      type="text"
                      placeholder="123 Street"
                      name="address2"
                      id="address2"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="country">Country:</label>
                    <input
                      type="text"
                      placeholder="Country"
                      name="country"
                      id="country"
                    />
                  </td>
                  <td>
                    <label htmlFor="city">City:</label>
                    <input
                      type="text"
                      placeholder="City"
                      name="city"
                      id="city"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="state">State:</label>
                    <input
                      type="text"
                      placeholder="State"
                      name="state"
                      id="state"
                    />
                  </td>
                  <td>
                    <label htmlFor="pincode">Pin Code:</label>
                    <input
                      type="text"
                      placeholder={123456}
                      name="pincode"
                      id="pincode"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="button-row ok">
              <input type="reset" defaultValue="RESET" />
              <input type="submit" defaultValue="PLACE ORDER" />
            </div>
          </form>
        </div>
      </fieldset>
    </div>

    <div id="right">
      <div id="subtotal">
        <h3>Cart Total</h3>
        <div className="grey">
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
        </div>
      </div>
      <div id="payment">
        
        <h3>Payment</h3>
        <div className="grey">
          <table>
            <tbody>
              <tr>
                <td>
                  {" "}
                  <input type="radio" name="payment" id="paypal" />
                </td>
                <td>
                  {" "}
                  <label htmlFor="paypal">Paypal</label>
                </td>
                
              </tr>
              <tr>
                <td>
                  {" "}
                  <input type="radio" name="payment" id="directcheck" />
                </td>
               
                <td>
                  {" "}
                  <label htmlFor="directcheck">Direct Check</label>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <input type="radio" name="payment" id="banktransfer" />
                </td>
                <td>
                  {" "}
                  <label htmlFor="banktransfer">Bank Transfer</label>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="ok">
          <button className="button1">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="clear"></div>

   </>
  )
}

export default Checkoutform