import React from "react";

const ProductItem = ({item, saveItem, onItemClick})=>{

    const handleClick = function (){
        onItemClick(item)
    }

    const handleButton = function (){
        saveItem(item)
    }

    return(
        <>
            <li onClick={handleClick}>{item.name}<br/>{item.price}</li>
            <button onClick={handleButton} id={item.key} itemName={item.name}>Add to Basket</button>
        </>
    )
}

export default ProductItem