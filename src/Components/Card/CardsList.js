import React, { useState } from 'react';

import Card from './Card';

import cardData from '../../CardData';
import CheckBox from '../Buttons/CheckBox';

const CardsList = () => {
  const [isReadModeOn, setReadMode] = useState(false);

  const checkHandler = () => {
    setReadMode(!isReadModeOn);
  };


  const result = cardData.map(cardContent => {
    return (
      <Card key={cardContent.id} content={cardContent} isReadModeOn={isReadModeOn}  />
    );
  });

  return (
    <div>
      <CheckBox toggleHandler={checkHandler} />
      *только просмотр
      {result}
    </div>
  );
};

export default CardsList;
