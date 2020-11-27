import React, { useState } from "react";
import "./../styles/App.css";
import ListItem from "./ListItem";

function App() {
  const [items, setItem] = useState([]);
  const [newItem, setNewItem] = useState("");
  const addItem = () => {
    items.push(newItem);
    setItem([...items]);
    setNewItem("");
  };
  const newItemChange = event => {
    setNewItem(event.target.value);
  };
  const deleteHandler = (itemIdx) => {
    items.splice(itemIdx, 1);
    setItem([...items]);
  };
  const editHandler = (editItem, itemIdx)=>{
    items[itemIdx]=editItem;
    setItem([...items]);
  }
  return (
    <div id="main">
      <textarea id="task" onChange={newItemChange} value={newItem}></textarea>
      <button id="btn" onClick={addItem} disabled={newItem.trim().length === 0}>
        Add Data
      </button>
      {items.map((item, idx) => (
        <ListItem
          item={item}
          key={`${item}_${idx}`}
          idx={idx}
          editHandler={editHandler}
          deleteHandler={deleteHandler}
        />
      ))}
    </div>
  );
}

export default App;
