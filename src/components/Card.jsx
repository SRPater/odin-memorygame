import '../styles/Card.css';

function Card({ pokemon, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={pokemon.image} alt="Pokémon artwork" />
    </div>
  );
}

export default Card;
