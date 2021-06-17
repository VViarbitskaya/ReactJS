import React from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import './Card.css';

const Card = props => {
  return (
    <div className="card-frame">
      <CardHeader cardHeader={props.items[0].header} />
      <CardBody cardBody={props.items[0].body} />
    </div>
  );
};

export default Card;
