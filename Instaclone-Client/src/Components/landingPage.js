import React from 'react'
import "./landingpage.css"
import { Link } from 'react-router-dom'
//OLD - https://images.pexels.com/photos/8386437/pexels-photo-8386437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
// https://images.pexels.com/photos/2438212/pexels-photo-2438212.jpeg?auto=compress&cs=tinysrgb&w=600
export default function LandingPage() {
  return (
    <>
    <div className='lpcontainer'>
      <div className='leftDiv'>
        <img src='https://images.pexels.com/photos/2438212/pexels-photo-2438212.jpeg?auto=compress&cs=tinysrgb&w=600' alt='AI pic'></img>
      </div>
      <div className='rightDiv'>
        <div className='insideRightdiv'>
        <h1 className='title'>10x Team 04</h1>
        <Link className='enterBtn' to="/postview">Enter</Link>
        </div>
      </div>
    </div>
    
    </>
  )
}
