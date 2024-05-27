import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetch_category, set_category } from "../redux/actions/actions";

function ShopNavBar() {
  var loading = useSelector((state) => state.loading_category);
  var arr_category = useSelector((state) => state.data_category);
  var error = useSelector((state) => state.error_category);
  var category = useSelector((state) => state.current_category);
  var cart = useSelector((state) => state.cart);
  var dispatch = useDispatch();
  useEffect(() => {
    if (category == "Select Category") dispatch(fetch_category());
  }, []);
  function category_change(e) {
    dispatch(set_category(e.target.value.toUpperCase()));
    // dispatch(set_category(e.toUpperCase()))
    // console.log(typeof(e))
  }

  if (loading) {
    return <h2>Loading...</h2>;
  } else if (arr_category.length != 0) {
    return (
      <>
        <section id="header">
          <NavLink to="/">
            <img src="./static/img/logo.png" className="logo" alt="logo" />
          </NavLink>
          <div>
            <ul id="navbar">
              <li>
                <div> Select Category</div>

                <select onChange={category_change}>
                  {arr_category.map((e, index) => (
                  
                    <option value={e} key={index}>
                      {/* {e} */}
                      {e.name.toUpperCase()}
                    </option>
                  ))}
                </select>
              </li>
              <li>
                <NavLink to="/">Home</NavLink>
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
                <i
                  className="fas fa-shopping-bag"
                  style={{ color: "#000000" }}
                />
              </NavLink>
              <span style={{ paddingBottom: 2 }}>{cart.length}</span>
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
    );
  } else {
    return <h2>There is Some Problem in Loading...</h2>;
  }
}

export default ShopNavBar;



