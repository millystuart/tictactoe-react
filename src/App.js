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
      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>
    </>
  );
}
