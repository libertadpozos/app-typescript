import '../styles/App.css';
import { useState, useEffect } from 'react';
import { Fruits, Fruit } from '../interfaces';
import Filters from './Filters';
import Card from './Card';

function App() {
  const [fruits, setfruits] = useState<Fruits | null>(null);
  const [selectedFruits, setselectedFruits] = useState<Fruits | null>(null);
  const [filterInput, setfilterInput] = useState('');

  const apple = {
    name: 'apple',
    id: 'apple',
  };
  const melon = {
    name: 'melon',
    id: 'melon',
  };
  const banana = {
    name: 'banana',
    id: 'banana',
  };

  useEffect(() => {
    setfruits({ list: [apple, melon, banana] });
    setselectedFruits({ list: [] });
  }, []);

  const clearLists = () => {
    setfruits({ list: [apple, melon, banana] });
    setselectedFruits({ list: [] });
    setfilterInput('');
  };

  const onClickFruit = (selectedFruit: Fruit) => {
    setselectedFruits({ list: [...selectedFruits!.list, selectedFruit] });
    setfruits({ list: fruits!.list.filter((fruit) => fruit !== selectedFruit) });
  };

  const onFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setfilterInput(e.target.value.toLowerCase());
  };

  return (
    <div className='App'>
      <h1>HELLO WORLD </h1>
      <div>
        <Filters
          onFilterChange={onFilterChange}
          clearLists={clearLists}
          filterInput={filterInput}
        />
      </div>
      <div>
        <h2>To Select</h2>
        {fruits && (
          <ul>
            {fruits.list
              .filter((fruit) => fruit.name.toLocaleLowerCase().includes(filterInput))
              .map((fruit) => (
                <Card onClickFruit={onClickFruit} fruit={fruit} />
                // <li key={fruit.id} onClick={() => onClickFruit(fruit)}>
                //   {fruit.name}
                // </li>
              ))}
          </ul>
        )}
        <h2>Selected ones</h2>
        {selectedFruits && (
          <ul>
            {selectedFruits.list.map((fruit) => (
              <li key={fruit.id}>{fruit.name}</li>
              // <Card fruit={fruit}  onClickFruit= {undefined}/>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
