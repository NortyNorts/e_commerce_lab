import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({items, saveItem, onItemClick})=>{

    const productListNodes = items.map((item, index) =>{
        return <ProductItem key={index} item={item} saveItem={saveItem} onItemClick={onItemClick}/>
    })

    return(
        <>
            <ul>{productListNodes}</ul>

        </>
    )
}

export default ProductList