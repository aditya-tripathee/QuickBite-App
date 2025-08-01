import React from 'react';
<<<<<<< HEAD
// import Img from '../Assets/image1.avif';
=======
>>>>>>> c76ca7d8f4960ad1881a311077db246b96a17a38
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";




function Card({name,image,id,price,type}) {

  
  return (
    <div className='w-[180px] h-[250px]  md:w-[250px] md:h-[350px] bg-white rounded-lg p-2 md:p-4 flex flex-col gap-2 md:gap-4 hover:border-2 border-green-400 '>
    {/* image of dish */}
      <div className='w-full  h-[80%] md:h-[80%] overflow-hidden rounded'>
              <img src={image} className='object-cover rounded-md '/>
      </div>

      {/* Names of dish */}
      <div className=' text-sm md:text-2xl font-bold '>
      {name}
      </div>
      
      <div className=' w-full flex justify-between items-center'>
      {/* price of dish */}
      <div className='text-sm md:text-lg font-bold text-green-600' >
         ₹{price}
      </div>

      {/* veg or non-veg */}
      <div className='justify-center items-center  md:gap-1 flex text-green-700 font-semibold'>
       {type=== "veg" ? <LuLeafyGreen /> : <GiChickenOven />}
        <span>{type}</span>
      </div>
      
      
     </div>
     <button className='w-full p-1.5 md:p-2 font-semibold hover:bg-green-400 transition-all duration-300 cursor-pointer bg-green-600 shadow-lg rounded-lg '>Add to Cart</button>
    </div>
  )
}

export default Card





