
import React, { useContext, useState } from 'react'
import Navbar from '../Components/Navbar'
import Category from '../Category'
import Card from '../Components/Card'
import { food_items } from '../food';
import { ImCross } from "react-icons/im";
import { dataContext } from '../Context/UserContext';
// import { dataContext } from '../Context/UserContext';
import Footer from '../Components/Footer';


function Home() {
  let {cate,setCate} = useContext(dataContext);
    
    function filter(category){
      if(category==="all"){
        setCate(food_items);
      }
      else{
        let newList = food_items.filter((item)=>(
          item.food_category===category
        ))
        setCate(newList);
      }
    }

  return (
    <div className='w-full min-h-screen bg-green-500 '>
        <Navbar/>

       <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 w-[100%] mt-6 md:mt-6">
            {Category.map((item)=>{
               return(
                <div className="w-[120px] h-[140] text-black font-semibold hover:bg-green-300 cursor-pointer transition-all 
                duration-200  bg-white flex flex-col gap-2 py-3 px-5 justify-center items-center rounded-md " 
                onClick={()=>filter(item.name)}
                >
                    {item.icon}
                    {item.name}
                   
                </div>
               )
            })}
        </div>



        <div className='w-full flex flex-wrap  gap-5 justify-center items-center  pt-8 pb-8'>
          {cate.map((item)=>(
            <Card name={item.food_name} image={item.food_image} price={item.price} 
            id={item.id} type={item.food_type} />
          ))}
        </div>
            
            <Footer/>



    </div>
  )
}


export default Home





