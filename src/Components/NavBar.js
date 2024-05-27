import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { fetch_category, set_category } from '../redux/actions/actions';

function NavBar() {

    return (
      <>
        <section id="header">
          <NavLink to="/">
            <img src="./static/img/logo.png" className="logo" alt="logo" />
          </NavLink>
          <div>
            <ul id="navbar">
              <li>
                <NavLink to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <NavLink id="lg-bag" to="/cart">
                <i className="fas fa-shopping-bag" style={{ color: "#000000" }} />
              </NavLink>
              <NavLink to="#" id="close">
                <i className="fas fa-times" />
              </NavLink>
            </ul>
          </div>
          <div id="mobile">
            <NavLink to="/cart">
              <i className="fas fa-shopping-bag" style={{ color: "#000000" }} />
            </NavLink>
            <i id="bar" className="fas fa-outdent" />
          </div>
        </section>

      </>
    )
    }

export default NavBar