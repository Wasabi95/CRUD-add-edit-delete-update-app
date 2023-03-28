// In this code, we use the useState hook to initialize the items state with an array of items and the editIndex state with null, indicating that no item is being edited at first.
// We define a handleEdit function that takes the index of the item to edit and the new value for the item, creates a new array with the edited value, updates the items state with the new array, sets the editIndex state back to null to indicate that editing is done.
// In this updated code, we now store the value of the input field in state using the editValue variable, and we initialize it to an empty string. When the "Edit" button is clicked, we set the editIndex state to the index of the item being edited and we update the editValue state with the value of the item. This allows the input field to be populated with the current value of the item.
// When the "Save" button is clicked, we call the handleEdit function with the index of the item being edited. In this function, we create a new array with the edited value, update the items state with the new array, set the editIndex state back to null to indicate that editing is done, and set the editValue state back to an empty string.

import React, { useState } from "react";

function Edit() {
  const [items, setItems] = useState(["apple", "banana", "cherry", "date"]); // Initialize the list
  const [editIndex, setEditIndex] = useState(null); // Initialize the index of the item being edited to null
  const [editValue, setEditValue] = useState(""); // Initialize the value of the input field to an empty string

  const handleEdit = (index) => {
    const newItems = [...items];
    newItems[index] = editValue;
    setItems(newItems);
    setEditIndex(null);
    setEditValue("");
  };

  return (
    <div>
      <h1>Current items:</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {editIndex === index ? (
              <div>
                <input
                  type="text"
                  value={editValue}
                  onChange={(event) => setEditValue(event.target.value)}
                />
                <button onClick={() => handleEdit(index)}>Save</button>
              </div>
            ) : (
              <div>
                {item} <button onClick={() => setEditIndex(index)}>Edit</button>{" "}
                <button
                  onClick={() => setItems(items.filter((_, i) => i !== index))}
                >
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Edit;
