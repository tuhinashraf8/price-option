import { useEffect, useState } from "react";
import PriceOption from "./priceOption";



const PriceOptions = () => {
    const [priceOption ,setPriceOptiomn]=useState([])

    useEffect(()=>{
fetch('PriceOPtion.json')
        .then(res =>res.json())
        .then(data => setPriceOptiomn(data))
    },[])
      
   
    return (
        <div >
           <h1>The best price in town{priceOption.length}</h1>
           <div className="grid grid-cols-3 gap-5 m-10">
            {
            priceOption.map(option=><PriceOption key={option.id} option={option}></PriceOption>)
           }
           </div>
    
           
        </div>
    );
};

export default PriceOptions;