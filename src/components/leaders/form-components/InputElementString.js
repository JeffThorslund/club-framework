import React from "react";


const InputElementString = (props) =>{
 
  let updateFormCardState = (e) => { 
        props.updateFormCardState(props.inputKey, e.target.value)
  }

    return (
      <div>
        <input
          type="text"
          value={props.value}
          onChange={updateFormCardState}
          autocomplete="off"
          className="form-control mb-2"
        />
      </div>
    );
  }

export default InputElementString;
