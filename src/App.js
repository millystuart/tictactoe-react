// useState allows components to remember things, in other words to record state.
import { useState } from 'react';

// Create an individual component referenced by the default component Board.
// ( {} ) denotes that the component can be passed a property called value.
function Square({value}) {
  // <button> is a JSX element, a mix of Javascript code and HTML tags.
  // className="square" is a button property or prop that tells CSS how to style the button.
  // X is the text inside the button.
  return <button className="square">{value}</button>
}

// In React, this is a component, a piece of reusable code that represents a part of a UI.
// Used to render, manage and update the UI elements in an application.
// default keyword specifies that this is the main function in the file.
export default function Board() {
  // The state variable squares stores the state of each square making up the grid.
  // It is initialised to an array of null since all squares are initialised to that state.
  const [squares, setSquares] = useState(Array(9).fill(null));

  // As React components need to only return a single component, if multiple squares are needed, can't just return them.
  // Instead, fragments <> and </> can be used to wrap multiple adjacent elements. 
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]}/>
        <Square value={squares[1]}/>
        <Square value={squares[2]}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]}/>
        <Square value={squares[4]}/>
        <Square value={squares[5]}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]}/>
        <Square value={squares[7]}/>
        <Square value={squares[8]}/>
      </div>
    </>
  );
}