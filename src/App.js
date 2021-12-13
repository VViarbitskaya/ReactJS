import React from 'react';
import NewGlobalHeader from './Components/V2/NewGlobalHeader';
import NewCard from './Components/V2/NewCard';

const App = () => {
  const myCard = [
    {
      id: 1,
      header: 'Card Header',
      body: 'Card Body',
    },
  ];
  return (
    <>
      <NewGlobalHeader />
      <NewCard items={myCard} />
    </>
  );
};

export default App;
