import { useState } from "react";

const initialItems = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

function DragDropList() {
  const [items, setItems] = useState(initialItems)
  const [dragItemId, setDragItemId] = useState(null)

  const handleDragStart = (index) => {
    setDragItemId(index)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDrop =(index)=>{
    const updatedItems =[...items]
    const [dragedItem] = updatedItems.splice(dragItemId,1)
    updatedItems.splice(index,0,dragedItem)
    setItems(updatedItems);
    setDragItemId(null);
  }
  return (
    <>
      <h1>DRAG AND DROP</h1>
      <ul data-testid="list">
        {items.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default DragDropList;
