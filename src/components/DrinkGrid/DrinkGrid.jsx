import DrinkCard from '../DrinkCard/DrinkCard';
import '../../styles/drinks.css';

function DrinkGrid({ drinks }) {
  if (drinks.length === 0) {
    return (
      <div className="drink-grid__empty fade-in">
        <span className="drink-grid__empty-icon">🍵</span>
        <h3>No drinks match that search</h3>
        <p>Try “tea”, “latte”, or another favorite.</p>
      </div>
    );
  }

  return (
    <div className="drink-grid">
      {drinks.map((drink, index) => (
        <DrinkCard drink={drink} key={drink.id} index={index} />
      ))}
    </div>
  );
}

export default DrinkGrid;
