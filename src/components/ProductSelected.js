// import React from "react";

// const ProductSelected = ({items, onItemSelected})=>{

//     const handleChange = function (event){
//         const chosenItem = items[event.target.value]
//         onItemSelected(chosenItem)
//     }

//     const productOptions = items.map((item, index) =>{
//         return <option value={index} key={index}>{item.name}</option>
//     })

//     return(
//         <>
//             <h4>I am a selected product</h4>
//             <select defaultValue="" onChange={handleChange}>
//                 <option value="" selected>Choose your item</option>
//                 {productOptions}
//             </select>
//         </>
//     )
// }

// export default ProductSelected