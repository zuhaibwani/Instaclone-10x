import React, {useEffect, useState} from 'react'
import Header from "./header.js"
import "./postview.css"
import { BsHeart } from "react-icons/bs";
import { BsCursor } from "react-icons/bs";
// import { BsThreeDots } from "react-icons/bs";
import { RiDeleteBin3Line } from "react-icons/ri";

import axios from 'axios';

const Postview = () => {
  const[data, setData] = useState([])
  const [delPost, setDeletePost] = useState(false)
  // let navigate = useNavigate();
useEffect(() => {
  console.log("Inside useEffect")
  getData()
}, [delPost])
const deletePost= (e, curElement)=>{ 
  // console.log(curElement._id)
  let confirm = window.confirm("Do you really want to delete this post?");
  console.log(confirm)
  if(confirm){
      axios({
        method: "DELETE",
        url: "https://server-inst.herokuapp.com/deletepost",
        data : {id: curElement._id}
      }).then(()=>{
        window.alert("Post deleted successfully!")
        setDeletePost(!delPost)
      }).catch((err)=>{
        console.log(err)
      })
  }
  

  // console.log(curElement)
}
const getData= async()=>{
  try{
    const res = await fetch("https://server-inst.herokuapp.com/postview")
    const actualData= await res.json()
    setData(actualData)
    // , { 'mode': 'no-cors' }
  }catch(err){
    console.log(err)
  }
  
  // console.log(actualData)
}
  // getData()
  

  return (
    <>
        <Header/>
        <div className='container'>
          {
            data.map((curElement, index)=>{
              return(
              <div  className='card' key={index}>
                  <div className='cardHead'>
                    <div  className='left'>
                    <h1>{curElement.name}</h1>
                    <h3>{curElement.location}</h3>
                  </div>
                  <div className='right'>
                    <RiDeleteBin3Line onClick={(e)=>{deletePost(e, curElement)}} className='threeDots'></RiDeleteBin3Line>
                  </div>
              </div>
              <img src={curElement.image}alt='pic'></img>
            <div className='likeAndDateDiv'>
                <BsHeart className='heart'></BsHeart>
                <BsCursor className='cursor'></BsCursor>
                <span className='date' >{curElement.date}</span>
            </div>
            <h1 className='likes'>{curElement.likes} likes</h1>
            <h1 className='description'> {curElement.description}</h1>

            </div>
           );
            })
          }
        </div>
           
    
       
    </>
  )
}

export default Postview
