import React, { useState } from 'react';
import GlobalHeader from './Components/GlobalHeader';
import Card from './Components/Card/Card';

const App = () => {

  const [card, setCard] = useState({
    id: 1,
    header: 'Card Header',
    body: 'Card Body',
  });

  return (
    <>
      <GlobalHeader />
      <Card content={card} save={setCard} />
    </>
  );
};

export default App;
