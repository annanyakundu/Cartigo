import React, { useEffect } from 'react'
import { fetch_product } from '../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import ProductSingle from './ProductSingle';

function Products() {
  var loading = useSelector((state) => state.loading_product);
  var arr_product = useSelector((state) => state.data_product);
  var error = useSelector((state) => state.error_product);
  var category=useSelector((state)=>state.current_category);
  
  var dispatch = useDispatch();
  useEffect(() => {
    if(arr_product.length==0)
    dispatch(fetch_product());
  }, [])
  var arr_p_byCategory=[];

{
  var arr_p_byCategory=arr_product.filter(e=>e.category.toUpperCase()==category.toUpperCase());
  }
  
 
if(loading==true){
return (
<> 
<h2>PRODUCT LOADING...</h2>
</>
)
}

else if(arr_product.length!=0){
  return (
    <>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n  .category-box {\n    background-color: #f7f7f7;\n        margin-bottom: 20px;\n    padding: 10px;\n    display: block;\n    float: left;\n  }\n"
    }}
  />


<div className='all'>
  

  <section id="product11" className="section-p1">
    <h2>Our Products</h2>

    <div className="pro1-container">
      {arr_p_byCategory.map((e, index) => (
        <ProductSingle key={index} product={e} />)
      )}
    </div>
  </section>
  </div>
</>)}



else{
  return (
    <> 
   <h2>ERROR IN PRODUCT LOADING... </h2>
   </>
   )
}
}

export default Products