import React from 'react';
import './CheckBox.css';

const CheckBox = ({ handleToggle }) => {
  return (
    <input
      className="check-box"
      type="checkbox"
      color="default"
      onChange={handleToggle}
    ></input>
  );
};
export default CheckBox;
