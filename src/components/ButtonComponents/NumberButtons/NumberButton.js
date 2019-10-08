import React from "react";

const NumberButton = props => {
  let value = 0;
  return (
    <button className = 'numberButton'
    onClick = {() => console.log(props.numbers)}
    onClick={props.updateValue}>
    {props.numbers}
    </button>
  );
};
export default NumberButton;