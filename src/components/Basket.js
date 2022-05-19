import React from "react";
import ProductItem from "./ProductItem";

const Basket = ({basketList})=>{

    const total = function(){
        const total_price = "£0"
        const total = total_price
        return <p>{total}</p>
    }

    const basketNodes = basketList.map((item, index) =>{
        return <p>{item.name}<br/>{item.price}</p>
    })

    return(
        <>
            <h2>I am a basket</h2>
            <ul>
                {basketNodes}
            </ul>
            {total}
        </>
    )
}

export default Basket