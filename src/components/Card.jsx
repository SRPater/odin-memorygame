import '../styles/Card.css';

function Card({ pokemon, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={pokemon.image} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
    </div>
  );
}

export default Card;
