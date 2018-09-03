import React from 'react';

const validation = (props) => {
  if (props.textLength >= 5) {
    return (
      <div className="Validation">
        <p>Text is long enough</p>
      </div>
    )
  }
    else {
    return (
      <div className="Validation">
        <p>Text is too short</p>
      </div>
    )
  }
}

export default validation;
