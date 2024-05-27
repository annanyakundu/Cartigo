import React from 'react'
import { getPriceAfterDiscount } from '../BLL/utility'
import { add_to_cart } from '../redux/actions/actions'
import { useDispatch } from 'react-redux';

function ProductSingle(props) {
  var dispatch=useDispatch();
  return (
<>
<div className="pro1">
      <img src={props.product.thumbnail} alt="" />
      <div className="des">
        <span>{props.product.brand}</span>
        <h3>{props.product.title}</h3>
       <p>{props.product.description}</p>
       
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <small> (99)</small>
        </div>
        <h4>${getPriceAfterDiscount(props.product.price,props.product.discountPercentage)}</h4>
        <p><del>${props.product.price}</del>
        (-{props.product.discountPercentage}%)</p>
      </div>
     
      <div>
        <button onClick={()=>{dispatch(add_to_cart(props.product))}} className="button button2">Add to Cart</button>
      </div>
    </div>

</>
  )
}

export default ProductSingle