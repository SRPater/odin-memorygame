import { useState, useEffect } from 'react';
import Header from './Header';
import CardGrid from './CardGrid';
import Modal from './Modal';
import '../styles/App.css';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState([]);
  const [clickedIds, setClickedIds] = useState([]);
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    title: '',
    message: '',
    onConfirm: null,
    onCancel: null,
    confirmText: '',
    cancelText: '',
  });

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
    // eslint-disable-next-line react-hooks/set-state-in-effect
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

  const closeModal = () => {
    setModalConfig((prev) => ({ ...prev, isOpen: false }));
  };

  const startNewGame = () => {
    setBestScore(0);
    setScore(0);
    setClickedIds([]);
    fetchPokemon();
    closeModal();
  };

  const openHowToPlay = () => {
    setModalConfig({
      isOpen: true,
      title: 'How to Play',
      message: 'Get points by clicking on an image, but don\'t click on ' +
        'any more than once!',
      onConfirm: closeModal,
      confirmText: 'Got it!',
    });
  };

  const handleCardClick = (id) => {
    if (clickedIds.includes(id)) {
      setModalConfig({
        isOpen: true,
        title: 'Game Over!',
        message: 'You already clicked that one. Would you like to try again ' +
          'with the same Pokémon or reset everything?',
        confirmText: 'Reset Game',
        cancelText: 'Retry',
        onConfirm: startNewGame,
        onCancel: () => {
          setCards(shuffleArray(cards));
          setScore(0);
          setClickedIds([]);
          closeModal();
        },
      });
    } else {
      const newScore = score + 1;
      setScore(newScore);
      setClickedIds([...clickedIds, id]);

      if (newScore > bestScore) {
        setBestScore(newScore);
      }

      if (newScore === 12) {
        setModalConfig({
          isOpen: true,
          title: 'You Won!',
          message: 'Congratulations! You\'ve mastered the memory game. Ready ' +
            'for a new set of Pokémon?',
          confirmText: 'Play Again',
          onConfirm: startNewGame,
        });
      } else {
        setCards(shuffleArray(cards));
      }
    }
  };

  return (
    <div className="app-container">
      <Header score={score} bestScore={bestScore} onHowToPlay={openHowToPlay} />
      <CardGrid cards={cards} onCardClick={handleCardClick} />
      <Modal
        isOpen={modalConfig.isOpen}
        title={modalConfig.title}
        message={modalConfig.message}
        onConfirm={modalConfig.onConfirm}
        onCancel={modalConfig.onCancel}
        confirmText={modalConfig.confirmText}
        cancelText={modalConfig.cancelText}
      />
    </div>
  );
}

export default App;
