import React from 'react';
import '../styles/App.css';
import { useState, useEffect } from 'react';
import { Spaceships, Spaceship } from '../data/interfaces';
import Filters from './Filters';
import Card from './Card';
import { endeavour, atlantis, columbia, enterprise } from '../data/spaceships';

function App() {
  const [spaceships, setSpacehips] = useState<Spaceships | null>(null);
  const [selectedSpaceships, setselectedSpaceships] = useState<Spaceships | null>(null);
  const [filterInput, setfilterInput] = useState('');

  useEffect(() => {
    setSpacehips({ list: [endeavour, atlantis, columbia, enterprise] });
    setselectedSpaceships({ list: [] });
  }, []);

  const clearLists = () => {
    setSpacehips({ list: [endeavour, atlantis, columbia, enterprise] });
    setselectedSpaceships({ list: [] });
    setfilterInput('');
  };

  const onClickSpaceship = (selectedSpaceship: Spaceship) => {
    setselectedSpaceships({ list: [...selectedSpaceships!.list, selectedSpaceship] });
    setSpacehips({ list: spaceships!.list.filter((spaceship) => spaceship !== selectedSpaceship) });
  };

  const onFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setfilterInput(e.target.value.toLowerCase());
  };

  return (
    <main>
      <header className='header'>
        <h1 className='header__title'>Spaceships</h1>
      </header>
      <Filters onFilterChange={onFilterChange} clearLists={clearLists} filterInput={filterInput} />
      <div className='spaceship__wrapper'>
        <div className='spaceship__inner'>
          <h2>List of Spaceships</h2>
          {spaceships && (
            <ul>
              {spaceships.list
                .filter((spaceship) => spaceship.name.toLocaleLowerCase().includes(filterInput))
                .map((spaceship) => (
                  <li key={spaceship.id} onClick={() => onClickSpaceship(spaceship)}>
                    <Card fruitName={spaceship.name} />
                  </li>
                ))}
            </ul>
          )}
        </div>
        <div className='spaceship__inner'>
          <h2>Selected spacehips</h2>
          {selectedSpaceships && (
            <ul>
              {selectedSpaceships.list.map((spaceship) => (
                <li key={spaceship.id}>
                  <Card fruitName={spaceship.name} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
