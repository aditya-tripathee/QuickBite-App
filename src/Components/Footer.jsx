
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
// import QuickBite from "./assets/QuickBiteLogo.png";
import QuickBiteLogo from "../assets/QuickBiteLogo.png";

import React from 'react'

function Footer() {
  return (
   <div className='text-gray-900 pt-15 md:pt-5 grid fixed grid-cols-2 gap-2  mt-3 px-6 justify-center items-between md:flex md:justify-evenly  h-[600px] md:h-[350px] w-full bg-green-800'>
     
    <div>
        <img src={QuickBiteLogo} className="w-[100px] h-[100px]"/>
        <h1 className='font-bold text-2xl md:text-3xl'>QuickBite</h1>
        <p className='font-semibold text-[12px]'>©2025 QuickBite Limited</p>

    </div>
    
    <div className=' cols-2  '>
     <h2 className='font-bold text-xl'>Company</h2>
        <ul className='font-semibold cursor-pointer md:pt-2'>
           
            <li>About Us</li>
            <li>QuickBite Corporate</li>
            <li>Team</li>
            <li>QuickBite One</li>
            <li>Carrers</li>
        </ul>
    </div>
    <div>
          <h2 className='font-bold text-xl'>Contact Us</h2>
        <ul className='font-semibold md:pt-2'>
         
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
        </ul>
    </div>
    <div>
        <h2 className='text-xl font-bold'>Available</h2>
        <ul className='font-semibold md:pt-2'>
            
            <li>Goraakhpur</li>
            <li>Lucknow</li>
            <li>Delhi</li>
            <li>Noida</li>
        </ul>
    </div>
    <div>
       <h2 className='font-bold text-xl'>Life at QuickBite  </h2>
       <ul className='font-semibold md:pt-2'>
        
            
            <li>Explore with Swiggy</li>    
            <li>QuickBite News</li>    
            <li>Snackables</li>    
           </ul>
     </div>
      
      <div>
        <h2 className="font-bold text-xl">Social Links </h2>
       <div className="text-gray-800 flex gap-2 md:pt-2 text-2xl ">
         <FaInstagram />
        <FaFacebook />
        <FaXTwitter />
        <FaLinkedin />
       </div>
      </div>
      
   </div>
    
  )
}

export default Footer
