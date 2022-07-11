import React, { useEffect, useState } from 'react'
import './HomePage.css'
import InputField from '../components/InputField'
import axios from 'axios';
import Product from '../components/Product';

const HomePage = () => {
    const [productUrl, setProductUrl] = useState("");
    const [productName, serProductName] = useState("");
    const [productPrice, serProductPrice] = useState("");
    const [productList,setProductList]= useState([]);

    const getProductList = async ()=>{
    const response = await axios.get("http://localhost:8000/product").then((response)=>response.data).catch((error)=> console.log(error));
    setProductList(response);

    }

    const postProduct = async () =>{
      if(productUrl==="" || productName==="" || productPrice===""){
        alert("Please Enter a Data")
      }else{
        const data ={
          productUrl: productUrl,
          productName: productName,
          productPrice:productPrice,
        };
         const response = await axios.post("http://localhost:8000/product", data).then((response)=> response.data).catch((err)=>console.log(err));
         if(response){
          alert("Data Added Sucessfully");
        
          getProductList();
         }
      }
    }

    const deleteProduct = async (id)=>{
      const response = await axios.delete(`http://localhost:8000/product/${id}`);
      if(response){
        alert("Data Deleted Sucessfully");
        getProductList();
      }
    }

    useEffect(()=>{
        getProductList();
    },[]);



  return (
    <div className='homepage'>
       <h1>Add Product</h1>
        <InputField placeholder="Enter Product Url" value={productUrl} onChange={(e)=>setProductUrl(e.target.value)} />
        <InputField placeholder="Enter Product Name" onChange={(e)=>serProductName(e.target.value)}/>
        <InputField placeholder="Enter Product Price" onChange={(e)=>serProductPrice(e.target.value)}/>
        <button type='button' onClick={postProduct}>Add Product</button>
        <hr></hr>

      <div className='products'>
        {productList.length==0?"loading______________":!!productList?productList.map((e)=>{
            return <Product productName={e.productName} productUrl={e.productUrl} productPrice={e.productPrice} onDeleteClick={()=>deleteProduct(e._id)}/>
        }):"No Product found"}
      </div>
    </div>
  )
}

export default HomePage