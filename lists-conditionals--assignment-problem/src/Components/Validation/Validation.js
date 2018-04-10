import React from 'react';

const validation = (props) => {
  let validationMessage = 'Text long enough'
  if (props.paraLength <= 4) {
    validationMessage = 'Text too short'
  }

  return(
    <div>
      {props.paraLength}
      <p>{validationMessage}</p>
    </div>
  )
};

export default validation;