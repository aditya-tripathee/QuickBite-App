import { TiThSmallOutline } from "react-icons/ti";
import { MdFreeBreakfast } from "react-icons/md";
import { GiHamburger } from "react-icons/gi";
import { GiFullPizza } from "react-icons/gi";
import { MdOutlineFoodBank } from "react-icons/md";
import { TbSoupFilled } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";
import { GiFoodChain } from "react-icons/gi";



const Category = [
    {
        id:1,
        name: "all",
        icon: <TiThSmallOutline  className="w-[60px] h-[60px] text-green-600"/>
    },

    {
        id:2,
        name: "breakfast",
        icon: <MdFreeBreakfast  className="w-[60px] h-[60px] text-green-600"/>
    },

    {
        id:3,
        name: "soups",
        icon: <TbSoupFilled  className="w-[60px] h-[60px] text-green-600"/>
    },
    {
        id:4,
        name: "bowl_noodles",
        icon: <CiBowlNoodles  className="w-[60px] h-[60px] text-green-600"/>
    },
    {
        id:5,
        name: "main_course",
        icon: <MdOutlineFoodBank  className="w-[60px] h-[60px] text-green-600"/>
    },
    {
        id:6,
        name: "pizza",
        icon: <GiFullPizza  className="w-[60px] h-[60px] text-green-600"/>
    },
    {
        id:7,
        name: "burger",
        icon: <GiHamburger className="w-[60px] h-[60px] text-green-600"/>
    },
    {
        id:8,
        name: "fish",
        icon: <GiFoodChain className="w-[60px] h-[60px] text-green-600"  />
    }
]

export default Category;