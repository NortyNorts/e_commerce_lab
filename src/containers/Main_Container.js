import React, {useState} from "react";
import ProductList from "../components/ProductList";
import ProductSelected from "../components/ProductSelected";
import Basket from "../components/Basket";
import Header from "../components/Header";

const MainContainer = (()=>{
    const[selectedItem, setSelectedItem] = useState(null);
    const[basketList, setBasketList] = useState([]);
    const[name, setName] = useState("RandoMcDando")

    const [items, setItems] = useState([
        {name: "Milk", isAdded: false, price: "£1.50"},
        {name: "Eggs", isAdded: false, price: "£2.30"},
        {name: "Cheese", isAdded: false, price: "£4.20"},
        {name: "Cream", isAdded: false, price: "£1.99"},
        {name: "Butter", isAdded: false, price: "£2.21"}
      ])
            
      const handleNameChange = (event)=>{
          setName(event.target.value)
      }

      const saveItem = function(selectedItem){
          const basketListCopy = [... basketList]
          basketListCopy.push(selectedItem)
          setBasketList(basketListCopy)
      }

      const onItemClick = function (item){
          setSelectedItem(item)
      }

    return(
        <>
            <Header name={name}/>
            <label htmlFor='name'>Your name:</label>
            <input type="text" name='name' placeholder={name} onChange={handleNameChange}></input>
            <ProductList items={items} saveItem={saveItem} onItemClick={onItemClick}></ProductList>
            <Basket basketList={basketList}></Basket>          
        </>
    )
})

export default MainContainer