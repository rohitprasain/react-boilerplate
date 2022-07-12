import axios from 'axios';
import '../hooks/producthooks';

const getProductList = async ()=>{
    const response = await axios.get("http://localhost:8000/product").then((response)=>response.data).catch((error)=> console.log(error));
     
}

const postProduct = async (obj) =>{
    if(obj.productUrl==="" || obj.productName==="" || obj.productPrice===""){
      alert("Please Enter a Data")
    }else{
      const data ={
        productUrl: obj.productUrl,
        productName: obj.productName,
        productPrice: obj.productPrice,
      };
       const response = await axios.post("http://localhost:8000/product", data).then((response)=> response.data).catch((err)=>console.log(err));
       if(response){
        alert("Data Added Sucessfully");
        getProductList();
       }
    }
  }

export  {getProductList, postProduct};