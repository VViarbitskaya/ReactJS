import GlobalHeader from './Components/GlobalHeader';
import Card from './Components/Card';
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
      <GlobalHeader />
      <Card items={myCard} />
    </>
  );
};

export default App;
