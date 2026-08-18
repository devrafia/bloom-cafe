import CupIllustration from '../CupIllustration/CupIllustration';
import '../../styles/cards.css';

function DrinkCard({ drink, index = 0 }) {
  const { name, price, rating, temp, category, description, ingredients, calories, quote } = drink;

  return (
    <div
      className="drink-card fade-in"
      style={{ animationDelay: `${Math.min(index, 12) * 0.05}s` }}
    >
      <div className="drink-card__flipper">
        {/* ---------- Front ---------- */}
        <div className="drink-card__face drink-card__face--front">
          <span className={`drink-card__badge drink-card__badge--${temp}`}>
            {temp === 'hot' ? '🔥 Hot' : '🧊 Cold'}
          </span>

          <div className="drink-card__image">
            <CupIllustration category={category} temp={temp} />
          </div>

          <h3 className="drink-card__name">{name}</h3>
          <div className="drink-card__meta">
            <span className="drink-card__price">${price.toFixed(2)}</span>
            <span className="drink-card__rating">★ {rating.toFixed(1)}</span>
          </div>
        </div>

        {/* ---------- Back ---------- */}
        <div className="drink-card__face drink-card__face--back">
          <h4 className="drink-card__back-name">{name}</h4>
          <p className="drink-card__description">{description}</p>

          <div className="drink-card__detail">
            <span className="drink-card__detail-label">Ingredients</span>
            <p>{ingredients.join(', ')}</p>
          </div>

          <div className="drink-card__detail-row">
            <div className="drink-card__detail">
              <span className="drink-card__detail-label">Calories</span>
              <p>{calories} kcal</p>
            </div>
            <div className="drink-card__detail">
              <span className="drink-card__detail-label">Best served</span>
              <p>{temp === 'hot' ? 'Hot' : 'Cold'}</p>
            </div>
          </div>

          <p className="drink-card__quote">“{quote}”</p>
        </div>
      </div>
    </div>
  );
}

export default DrinkCard;
