import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState('')
  const [displayAbleItems, setDisplayableItems] = useState(items)

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearch(e){
    e.preventDefault()
    setSearch(e.target.value)
  }

  function onItemFormSubmit(item){
    setDisplayableItems([...displayAbleItems, item])
  }

  const itemsToDisplay = displayAbleItems.filter((item) => {
    if (selectedCategory === "All" && item.name.includes(search)) return true;

    return item.category === selectedCategory && item.name.includes(search);
  });


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearch} selectedCategory={selectedCategory} search={search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
