import Card from './Card.jsx';
import '../styles/CardGrid.css';

function CardGrid({ cards, onCardClick }) {
  return(
    <main className="card-grid">
      {cards.map((pokemon) => (
        <Card
          key={pokemon.id}
          pokemon={pokemon}
          onClick={() => onCardClick(pokemon.id)}
        />
      ))}
    </main>
  );
}

export default CardGrid;
