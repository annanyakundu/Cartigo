import React from 'react'
import { getPriceAfterDiscount, removeFromCart } from '../BLL/utility'
import { useDispatch } from 'react-redux';
import { decrease_quantity, increase_quantity, remove_from_cart } from '../redux/actions/actions';
import { REMOVE_FROM_CART } from '../redux/constantTypes/constantTypes';

function CartSingle(props) {
    var dispatch = useDispatch();
    return (
        <>
            <tr>
                <td>
                <button className='remove' onClick={()=>{dispatch(remove_from_cart(props.item.product))}} >
                <i className="far fa-times-circle fa-lg danger" />
                        </button>
                    
                </td>
                <td>
                    <img src={props.item.product.thumbnail} alt="" />
                </td>
                <td>{props.item.product.title}</td>
                <td>${getPriceAfterDiscount(props.item.product.price, props.item.product.discountPercentage)}</td>
                <td>
                    <div className="div-button">
                    <div className="input-group-btn">
                        <button onClick={() => { dispatch(decrease_quantity(props.item.product)) }}>
                            <i className="fa fa-minus" />
                        </button>
                    </div>
                    <input className="quantity" type="text" disabled value={props.item.quantity} />
                    <div className="input-group-btn">
                        <button onClick={() => { dispatch(increase_quantity(props.item.product)) }} >
                            <i className="fa fa-plus" />
                        </button>
                    </div>
                    </div>
                </td>
                <td>${(getPriceAfterDiscount(props.item.product.price,props.item.product.discountPercentage)*props.item.quantity).toFixed(2)}</td>
            </tr>
        </>
    )
}

export default CartSingle