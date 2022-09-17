import React from "react";
import { FaRegTimesCircle } from "react-icons/fa";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <FaRegTimesCircle
        className="delete-icon"
        onClick={() => props.onDelete(props.id)}
      />
    </div>
  );
}

export default Note;
