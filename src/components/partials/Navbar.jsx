
import React from 'react'
import '../../assets/css/common.css'
import '../../assets/css/navbar.css'
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBox } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='flex space-between px-7 py-3 navbar align-center'>
        <div className="logo-container">
            <a href="#" className='a-decoration-none'>
                COLO
                <span>SHOP</span>
            </a>
        </div>
        <div className='nav-items flex align-center'>
            <ul className='flex'>
                <li>Home</li>
                <li>Shop</li>
                <li>Promotion</li>
                <li>Pages</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
            <ul className='nav-user flex align-center '>
                <li><FaSearch/></li>
                <li><FaUser/></li>
                <li className='cart'>
                    <FaBox/>
                    <span className='checkout-items'>2</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
//navbar