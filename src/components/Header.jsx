import '../styles/Header.css';

function Header({ score, bestScore, onHowToPlay }) {
  return (
    <header className="header">
      <h1>Pokémon Memory Game</h1>
      <div className="scoreboard">
        <p>Current Score: {score}</p>
        <p>Best Score: {bestScore}</p>
      </div>
      <button onClick={onHowToPlay}>How to Play</button>
    </header>
  );
}

export default Header;
