// // This code uses React's useState hook to maintain a list of items and the user's input for a new item.
// When the form is submitted, the handleSubmit function adds the new item to the list and clears the
// input field. The list is then displayed using the map method to render a <li> element for each item in the list.
import React, { useState } from "react";

const Add = () => {
  const [list, setList] = useState([]);
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    setList([...list, newItem]);
    setNewItem("");
  };

  return (
    <div>
      <h1>My List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Add;
