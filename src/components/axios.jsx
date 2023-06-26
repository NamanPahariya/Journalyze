import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Axios () {
    const [data, setData] = useState([]);
    // const getData=()=>{
    useEffect(() => {
        axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=79e678e8cc5e4baeb5ce1c4fbcd7bdca')
            .then((res) => {
                // console.log(res)}
                setData(res.data.articles);
                
    });
},[])
const  sportsData=()=>{
    axios.get('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=cd332ba1257c494ca102b484afd10cbb')
    .then((res) =>{
      console.log(res);
      setData(res.data.articles);
 
    })
        
   }
   const  sciencedata=()=>{
    axios.get('https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=cd332ba1257c494ca102b484afd10cbb')
    .then((res) =>{
      console.log(res);
      setData(res.data.articles);
 
    })
        
   }
   const  technologydata=()=>{
    axios.get('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=cd332ba1257c494ca102b484afd10cbb')
    .then((res) =>{
      console.log(res);
      setData(res.data.articles);
 
    })
        
   }
   const  businessdata=()=>{
    axios.get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=cd332ba1257c494ca102b484afd10cbb')
    .then((res) =>{
      console.log(res);
      setData(res.data.articles);
 
    })
              
   }
   const  healthdata=()=>{
    axios.get('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=cd332ba1257c494ca102b484afd10cbb')
    .then((res) =>{
      console.log(res);
      setData(res.data.articles);
 
    })
        
   }
   const  generaldata=()=>{
    axios.get('https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=cd332ba1257c494ca102b484afd10cbb')
    .then((res) =>{
      console.log(res);
      setData(res.data.articles);
 
    })
        
   }
const news = data.map((value, index) =>{
    return (
        <div key={index} className='card' style={{  padding:"10px", margin:"10px" , marginLeft:"40px" }}>
        <img src={value.urlToImage} className='card-img-top' alt="..."></img>
        <div className='card-body'>
            <h5 className='card-title'>{value.title}</h5>
            <p className='card-text'>{value.description}</p>
            <a href={value.url} className='btn-primary'>Read More</a>
        </div>
    </div>
    )
})
    return(
        <>
        <div>
        <div className='sidebar-box'>
        <hr className="line"/ >
          
      <h3 className="sidebar-top">Catogries</h3> 
   <button className='design'onClick={generaldata}>General</button>
      <button className='design' onClick={sciencedata}>Science</button>       
      <button className='design' onClick={sportsData} >Sports</button>       
      <button className='design1'onClick={technologydata}>Technology</button>       
      <button className='design'onClick={businessdata}>Business</button>       
      <button className='design'onClick={healthdata}>Health</button>  </div>
        </div>
         
        <div className='box'>
  {news}
</div>
</>
    )
}
  