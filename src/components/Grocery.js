import React from 'react';

const Grocery = (props) => {
  return (
    <div>
      <li>
        {props.name}
        <button type="button" onClick={props.handleButtonClick}>Delete</button>
      </li>
    </div>
  );
};

export default Grocery;
