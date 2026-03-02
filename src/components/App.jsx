import { useState } from 'react';
import Header from './Header';
import CardGrid from './CardGrid';
import '../styles/App.css';

function App () {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState([
    { id: 1, name: 'Bulbasaur', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
    { id: 2, name: 'Charmander', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' }
  ]);

  const handleCardClick = (id) => {
    console.log("Clicked card with ID:", id);
  };

  return (
    <div className="app-container">
      <Header score={score} bestScore={bestScore} />
      <CardGrid cards={cards} onCardClick={handleCardClick} />
    </div>
  );
}

export default App;
