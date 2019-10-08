import React from "react";

const OperatorButton = ({operators: {char} }) => {
  return (
    <>
    <button className = "operatorButton"
    onClick = {() => console.log(char)}
    onClick = {() => char.updateValue }>
    {char}
    </button>
    </>
  );
};

export default OperatorButton;