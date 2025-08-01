import { IoFastFoodSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import React, { useEffect, useState, useContext } from 'react'
import { dataContext } from "../Context/UserContext";
import { food_items } from "../food";
import { ImTab } from "react-icons/im";
import QuickBiteLogo from "../assets/QuickBiteLogo.png"


function Navbar() {
  let {input,setInput,cate,setCate} = useContext(dataContext);
  useEffect(() => {
  let newlist = food_items.filter(item =>
    item.food_name.toLowerCase().includes(input.toLowerCase())
  );
  setCate(newlist);
}, [input]) 




  return (
    <div className='w-full h-[70px] flex justify-between items-center px-2 lg:px-10'>
    {/* Logo */}
      <div className="shadow-xl w-20 h-15 px-3 py-2 bg-white flex justify-center align-center rounded-md">
        {/* <IoFastFoodSharp  className="w-[30px] h-[30px] text-green-600"/> */}
         <img src={QuickBiteLogo} className="w-full h-full"/>
         {/* <h2 className="flex items-center">QuickBite</h2> */}
    </div>
    

    {/* Search Bar */}
        <form onSubmit={(e)=>e.preventDefault()}   action="" className="w-[50%] md:w-[70%] h-[45px] bg-white rounded-lg flex items-center px-4 py-2 gap-4 md:px-6 md:py-3">
             <FaSearch className="text-green-600 h-[20px] w-[25px] rounded-md shadow-xl"/>
             <input type="text" placeholder="Search items" className="w-[100%] outline-none text-xl"
              onChange={(e)=>setInput(e.target.value)} value={input}
             />         
        </form>

    {/* Cart Icon */}
        <div className="shadow-xl w-20 h-15 px-3 py-2 bg-white flex justify-center  align-center rounded-md">
        <FaCartArrowDown className="w-[40px] h-[40px] text-green-600"/>
    </div>
  
    </div>
  )
}

export default Navbar