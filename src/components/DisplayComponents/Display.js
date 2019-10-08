import React from "react";

const Display = ({ displayValue }) => {
  // return <div>{/* Display any props data here */}</div>
  return (
    <input className = "input"
      value={displayValue}
    />
  );
  // return <div>{displayValue}</div>;
};

export default Display;