import React from 'react'
import './Product.css'
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const Product = ({productName, productUrl, productPrice, onDeleteClick}) => {
  return (
    <div className='product'>
    <img src={productUrl} />
       <h4>{productName}</h4>
       <p>{productPrice}</p>
       <FaTrash className='icon' onClick={onDeleteClick}/>
       <FaEdit className='icon'/>
    </div>
  )
}

export default Product