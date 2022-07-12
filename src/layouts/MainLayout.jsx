//navbar

// boday
//pages
//components
//common
//containers

//footer

import React, { useEffect } from 'react'
import DealWeek from '../components/containers/DealWeek'
import HeroSection from '../components/containers/HeroSection'
import NewArrival from '../components/containers/NewArrival'
import ProductCategoryContainer from '../components/containers/ProductCategoryContainer'
import Navbar from '../components/partials/Navbar'

const MainLayout = () => {
  
  return (
    <>
        <Navbar/>
        <HeroSection/>
        <ProductCategoryContainer/>
        <NewArrival/>
        <DealWeek/>
    </>
  )
}

export default MainLayout