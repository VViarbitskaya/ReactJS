import React from 'react';

import './CheckBox.css';

const CheckBox = ({ toggleHandler }) => {
  return (
    <input
      className="check-box"
      type="checkbox"
      color="default"
      onChange={toggleHandler}
    ></input>
  );
};
export default CheckBox;
