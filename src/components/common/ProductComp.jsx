import React from 'react'
import '../../assets/css/productcomp.css'
import '../../assets/css/common.css'


const ProductComp = ({img}) => {
  return (
    <div className='product-item flex justify-center' >
         <img src="https://preview.colorlib.com/theme/coloshop/images/xproduct_1.png.pagespeed.ic.DvPBG5vxas.webp" alt="" srcset="" />

         <div className="product-info">
           <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
           <div className="product-price">
            $5200
            <span >$8000</span>
           </div>
         </div>

         <div className="add-cart">
          <p>Add Cart</p>
         </div>
    </div>
  )
}

export default ProductComp