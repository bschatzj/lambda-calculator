import React, {useState} from "react";

//import any components needed

import NumberButton from "./NumberButton";
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file
import {numbers} from "../../../data";
const Numbers = ({ updateValue }) => {
  // STEP 2 - add the imported data to state
  const [numbersState, setNumbersState] = useState(numbers);
  return (
    <div className='numberButtonContainer'>
      {numbersState.map((numbers) => {
        return < NumberButton 
        key = {numbers} 
        numbers ={numbers}
        updateValue={e => updateValue(numbers)}
        />;
      })}
    </div>
  );
};

export default Numbers;