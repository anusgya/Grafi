import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

function InputArea(props) {
  const [input, updateInput] = useState({
    title: "",
    content: ""
  });

  const [isOpened, setIsOpened] = useState(false);

  function handleInputChange(event) {
    const { value, name } = event.target;

    updateInput((prevValues) => {
      return {
        ...prevValues,
        [name]: value
      };
    });
  }

  function handleFormChange() {
    setIsOpened(true);
  }

  return (
    <div>
      <form>
        {isOpened ? (
          <input
            onChange={handleInputChange}
            name="title"
            placeholder="Title"
            value={input.title}
          />
        ) : null}

        <textarea
          onChange={handleInputChange}
          name="content"
          placeholder="Take a note..."
          rows={isOpened ? 3 : 1}
          onClick={handleFormChange}
          value={input.content}
        />
        {isOpened ? (
          <button
            onClick={(event) => {
              props.onAdd(input);
              event.preventDefault();
              updateInput({
                title: "",
                content: ""
              });
            }}
          >
            <FaPlus className="add-icon" />
          </button>
        ) : null}
      </form>
    </div>
  );
}

export default InputArea;
