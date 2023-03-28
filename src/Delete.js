// In this code, we use the useState hook to initialize the items state with an array of items. We also define a handleDelete function that takes the index of an item to delete, creates a new array without that item, and updates the items state with the new array.
//In the return statement, we map over the items array to render each item as a list item with a "Delete" button that calls the handleDelete function with the index of the item to delete. When the button is clicked, the corresponding item is removed from the list and the UI is updated with the new list.
import React, { useState } from "react";

function Delete() {
  const [items, setItems] = useState(["apple", "banana", "cherry", "date"]); // Initialize the list

  const handleDelete = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div>
      <h1>Current items:</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Delete;
