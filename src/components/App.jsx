import { useState, useEffect } from 'react';
import Header from './Header';
import CardGrid from './CardGrid';
import '../styles/App.css';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState([]);
  const [clickedIds, setClickedIds] = useState([]);

  const fetchPokemon = async () => {
    const randomIds = [];
    
    while (randomIds.length < 12) {
      const id = Math.floor(Math.random() * 1025) + 1;
      if (!randomIds.includes(id)) randomIds.push(id);
    }

    try {
      const pokemonData = await Promise.all(
        randomIds.map(async (id) => {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${id}`
          );
          const data = await response.json();

          return {
            id: data.id,
            image: data.sprites.other['official-artwork'].front_default,
          };
        })
      );

      setCards(pokemonData);
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const shuffleArray = (array) => {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
  }

  const handleCardClick = (id) => {
    if (clickedIds.includes(id)) {
      setTimeout(() => {
        const resetNewGame = window.confirm(
          "Game over! You already clicked that one. Press OK to reset " +
          "everything and get new Pokémon.\nPress Cancel to try again with " +
          "the same set."
        );

        if (resetNewGame) {
          setBestScore(0);
          fetchPokemon();
        } else {
          setCards(shuffleArray(cards));
        }

        setScore(0);
        setClickedIds([]);
      }, 100);
    } else {
      const newScore = score + 1;
      setScore(newScore);
      setClickedIds([...clickedIds, id]);

      if (newScore > bestScore) {
        setBestScore(newScore);
      }

      if (newScore === 12) {
        setTimeout(() => {
          alert(
            "Congratulations! You've mastered the memory game! Starting a " +
            "new game with fresh Pokémon now."
          );
          setScore(0);
          setBestScore(0);
          setClickedIds([]);
          fetchPokemon();
        }, 100);
      } else {
        setCards(shuffleArray(cards));
      }
    }
  };

  return (
    <div className="app-container">
      <Header score={score} bestScore={bestScore} />
      <CardGrid cards={cards} onCardClick={handleCardClick} />
    </div>
  );
}

export default App;
