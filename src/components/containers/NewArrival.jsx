import React from 'react'
import '../../assets/css/common.css'
import '../../assets/css/newarrival.css'
import '../common/ProductComp'
import '../../assets/css/common.css'
import ProductComp from '../common/ProductComp'

const NewArrival = () => {
  return (
    <div className='new-arrival px-9'>
        <div className="section-title text-center">
            <h2>New Arrivals</h2>
        </div>

        <div className="product-list flex">
            <ProductComp/>
            <ProductComp/>
            <ProductComp/>
            <ProductComp/>
            <ProductComp/>
            <ProductComp/>
            <ProductComp/>
            <ProductComp/>
            <ProductComp/>
            <ProductComp/>  
        </div>
    </div>
  )
}

export default NewArrival