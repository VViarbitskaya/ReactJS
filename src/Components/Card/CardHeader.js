import React from 'react';

import './CardStyles.css';
import '../Buttons/EditButton.css';

import CheckBox from '../Buttons/CheckBox';
import EditButton from '../Buttons/EditButton';

var classNames = require('classnames');

const CardHeader = ({ header, editHandler, toggleHandler, isActive }) => {
  return (
    <div>
      <div
        className={classNames({
          'card-header': isActive,
          'card-header-checked': !isActive,
        })}
      >
        {header}
        <EditButton className="edit-button" editHandler={editHandler} />
        <CheckBox toggleHandler={toggleHandler} />
      </div>
    </div>
  );
};

export default CardHeader;
