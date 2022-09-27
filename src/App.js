import React, { useState } from 'react';
import NewGlobalHeader from './Components/V2/NewGlobalHeader';
import NewCard from './Components/V2/NewCard';

const App = () => {
  const [card, setCard] = useState({
    id: 1,
    header: 'Card Header',
    body: 'Card Body',
  });
  return (
    <>
      <NewGlobalHeader />
      <NewCard content={card} save={setCard} />
    </>
  );
};

export default App;
