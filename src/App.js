// In React, this is a component, a piece of reusable code that represents a part of a UI.
// Used to render, manage and update the UI elements in an application.
// default keyword specifies that this is the main function in the file.
export default function Square() {
  // <button> is a JSX element, a mix of Javascript code and HTML tags.
  // className="square" is a button property or prop that tells CSS how to style the button.
  // X is the text inside the button.
  // As React components need to only return a single component, if multiple squares are needed, can't just return them.
  // Instead, fragments <> and </> can be used to wrap multiple adjacent elements. 
  return (
    <>
      <div className="board-row">
        <button className="square">1</button>
        <button className="square">2</button>
        <button className="square">3</button>
      </div>
      <div className="board-row">
        <button className="square">4</button>
        <button className="square">5</button>
        <button className="square">6</button>
      </div>
      <div className="board-row">
        <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button>
      </div>
    </>
  );
}
