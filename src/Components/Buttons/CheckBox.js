import React from 'react';

import './CheckBox.css';

const CheckBox = ({ toggleHandler }) => {
  return <input type="checkbox" color="default" onChange={toggleHandler} />;
};
export default CheckBox;
