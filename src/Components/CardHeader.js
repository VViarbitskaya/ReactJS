import React from 'react';
import './CardHeader.css';

const CardHeader = props => {
  return <div className="card-header">{props.cardHeader}</div>;
};

export default CardHeader;
