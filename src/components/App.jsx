import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import InputArea from "./InputArea";
import Background from "./Background";
// import { FaPlus } from "react-icons/fa";

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

  // console.log(notes.length);

  function isArrayEmpty(){
    if(notes.length===0){
      console.log(notes.length);
      return true;
    }
    return false;
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
      {isArrayEmpty()? <Background/> : null}
    </div>
  );
}

export default App;
