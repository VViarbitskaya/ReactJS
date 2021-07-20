import React, { useState } from 'react';
import './CardHeader.css';
import MyCheckBox from './CheckBox';

const CardHeader = props => {
  const [isActive, setActive] = useState('false');

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className={isActive ? 'card-header' : 'card-header-checked'}>
      {props.cardHeader} <MyCheckBox handleToggle={handleToggle} />{' '}
    </div>
  );
};

export default CardHeader;
