// useState allows components to remember things, in other words to record state.
import { useState } from 'react';

// Create an individual component referenced by the default component Board.
// ( {} ) denotes that the component can be passed a property called value.
function Square() {
  // Value stores the value and setValue is a function that can be used to change the value.
  const [value, setValue] = useState(null);

  // Function defined within Square component to define a response to the onClick property
  function handleClick() {
    setValue("X");
  }

  // <button> is a JSX element, a mix of Javascript code and HTML tags.
  // className="square" is a button property or prop that tells CSS how to style the button.
  // X is the text inside the button.
  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

// In React, this is a component, a piece of reusable code that represents a part of a UI.
// Used to render, manage and update the UI elements in an application.
// default keyword specifies that this is the main function in the file.
export default function Board() {
  // As React components need to only return a single component, if multiple squares are needed, can't just return them.
  // Instead, fragments <> and </> can be used to wrap multiple adjacent elements. 
  return (
    <>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
    </>
  );
}