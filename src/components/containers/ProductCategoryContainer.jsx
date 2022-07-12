import React from 'react'
import ProductCategory from '../common/ProductCategory'
import '../../assets/css/ProductCategoryContainer.css'
import '../../assets/css/common.css'

const ProductCategoryContainer = () => {
  return (
    <div className='flex ProductCategoryContainer justify-center'>
        <ProductCategory name="WOMEN's" url="https://preview.colorlib.com/theme/coloshop/images/xbanner_1.jpg.pagespeed.ic.QkTXTeiJ_p.webp"/>
        <ProductCategory url="https://preview.colorlib.com/theme/coloshop/images/xbanner_2.jpg.pagespeed.ic.GDnlYIF7_c.webp" name="ACCESSORIES'S"/>
        <ProductCategory url="https://preview.colorlib.com/theme/coloshop/images/xbanner_3.jpg.pagespeed.ic.eYEUwVIlpo.webp" name="MEN'S"/>
    </div>
  )
}

export default ProductCategoryContainer