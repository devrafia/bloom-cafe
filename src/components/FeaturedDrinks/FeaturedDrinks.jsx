import { Link } from 'react-router-dom';
import drinks from '../../data/drinks';
import CupIllustration from '../CupIllustration/CupIllustration';
import '../../styles/home.css';

function FeaturedDrinks() {
  const featured = drinks.filter((drink) => drink.featured).slice(0, 3);

  return (
    <section className="featured">
      <div className="container">
        <div className="featured__header">
          <span className="eyebrow">Crowd favorites</span>
          <h2>Featured Drinks</h2>
        </div>

        <div className="featured__grid">
          {featured.map((drink, index) => (
            <Link
              to="/drinks"
              key={drink.id}
              className="featured__card fade-in"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <div className="featured__image">
                <CupIllustration category={drink.category} temp={drink.temp} />
              </div>
              <h3 className="featured__name">{drink.name}</h3>
              <p className="featured__price">${drink.price.toFixed(2)}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedDrinks;
