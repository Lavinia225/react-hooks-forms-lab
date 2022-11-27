import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm( { onItemFormSubmit }) {
  const [itemName, setItemName] = useState('')
  const [itemCategory, setItemCategory] = useState('Produce')

  const newItem = {
    id: uuid(),
    name: itemName,
    category: itemCategory
  }

  function handleItemName(e){
    e.preventDefault()
    setItemName(e.target.value)
  }

  function handleItemCategory(e){
    setItemCategory(e.target.value)
  }
  
  return (
    <form className="NewItem" onSubmit={e =>{
      e.preventDefault()
      onItemFormSubmit(newItem)}}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleItemName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleItemCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
