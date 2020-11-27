import React, { useState } from "react";
import "./../styles/App.css";

function ListItem(props) {
  const [editItem, setEditItem] = useState(props.item);
  const [editMode, setEditMode] = useState(false);
  const newEditItem=(event)=>{
    setEditItem(event.target.value);
  }
  const addEditedItem=()=>{
      props.editHandler(editItem, props.idx);
      setEditMode(false);
  }

  return (
    <div className="list">
      {editMode ? (
        <>
          <textarea className="editTask" onChange={newEditItem} value={editItem}></textarea>
          <button
            className="saveTask"
            onClick={addEditedItem}
            disabled={editItem.trim().length === 0}
            >
            Save Task
          </button>
        </>
      ) : (
        <>
        {props.item}
          <button className="edit" onClick={()=>setEditMode(true)}>
            Edit
          </button>
          <button className="delete" onClick={()=>props.deleteHandler(props.idx)}>
            Delete
          </button>
        </>
      )}
    </div>
  );
}

export default ListItem;
