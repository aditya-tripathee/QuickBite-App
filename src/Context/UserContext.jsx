

import React, { createContext, useState } from 'react'
export const dataContext = createContext();
import { food_items } from '../food';


function UserContext({children}) {
    let [input,setInput] = useState("");
    const[cate,setCate] = useState(food_items);
    let data = {
        input,
        setInput,
        cate,
        setCate,
        
    }
  return (
  
    <div>
    <dataContext.Provider value={data}>
     {children}
    </dataContext.Provider>
       
    </div>


  )
}

export default UserContext