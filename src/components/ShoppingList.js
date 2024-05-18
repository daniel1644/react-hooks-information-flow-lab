import React, { useState } from "react";
import Item from "./Item";
import Filter from './Filter';

function ShoppingList({ items }) {
  const [shoppingListItems, setShoppingListItems] = useState(items);

  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  const filteredItems  = shoppingListItems.filter((item) => {
    if (selectedCategory === "All") 
      return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <Filter onCategoryChange={handleCategoryChange} />
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;