import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import InputArea from "./InputArea";

function App() {
  const [notes, updateNotes] = useState([]);

  function addItem(newItem) {
    updateNotes((prevItems) => {
      return [...prevItems, newItem];
    });
  }

  function deleteItem(id) {
    updateNotes((prevItems) => {
      return prevItems.filter((item, index) => {
        return id !== index;
      });
    });
  }

  return (
    <div>
      <Header />
      <InputArea onAdd={addItem} />
      <div className="notes-container">
        {notes.map((note, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              onDelete={deleteItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
