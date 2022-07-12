import React from 'react'
import '../../assets/css/ProductCategory.css'
import '../../assets/css/common.css'


const ProductCategory = ({name, url}) => {

  return (
    <div className='category-items flex justify-center align-center'  style={{backgroundImage:`url(${url})`}}>
        <div>
            <h2 className='text-capital'>{name}</h2>
        </div>
    </div>
  )
}

export default ProductCategory