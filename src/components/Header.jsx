import '../styles/Header.css';

function Header({ score, bestScore }) {
  return (
    <header className="header">
      <h1>Pokémon Memory Game</h1>
      <div className="scoreboard">
        <p>Current Score: {score}</p>
        <p>Best Score: {bestScore}</p>
      </div>
      <button onClick={() => alert("Don't click the same Pokémon twice!")}>
        How to play
      </button>
    </header>
  );
}

export default Header;
