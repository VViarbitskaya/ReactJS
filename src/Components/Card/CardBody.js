import React from 'react';

import './CardStyles.css';

var classNames = require('classnames');

const CardBody = ({ body, isActive }) => {
  return (
    <div
      className={classNames({
        'card-body': isActive,
        'card-body-checked': !isActive,
      })}
    >
      {body}
    </div>
  );
};

export default CardBody;
