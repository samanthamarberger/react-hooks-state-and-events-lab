import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  console.log(items);
  //const newItemsArray = [...items];
  //setSelectedCategory(newItemsArray);
  console.log(selectedCategory);
  function handleChange(e) {
    setSelectedCategory(e.target.value);
    //console.log(e.target.value)
  }
    const newItemsArray = items.filter((item) => {
      if (selectedCategory === "All") return true
      return item.category === selectedCategory
    });
    console.log(newItemsArray);
    const renderItems = newItemsArray.map((item) => (
      <Item key={item.id} name={item.name} category={item.category
    }/>))
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {renderItems}
      </ul>
    </div>
  );
}

export default ShoppingList;
