import { useMemo, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import DrinkGrid from '../../components/DrinkGrid/DrinkGrid';
import Footer from '../../components/Footer/Footer';
import drinks from '../../data/drinks';
import '../../styles/drinks.css';

function Drinks() {
  const [query, setQuery] = useState('');

  // Instant, name-only search — recalculated only when the query changes
  const filteredDrinks = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return drinks;
    return drinks.filter((drink) => drink.name.toLowerCase().includes(normalized));
  }, [query]);

  return (
    <div className="page-enter drinks-page">
      <div className="container drinks-page__header">
        <span className="eyebrow">Our Menu</span>
        <h1>Our Drinks</h1>
        <p className="drinks-page__subtitle">
          Hover any card to see what's brewing inside — ingredients, calories,
          and a little something sweet.
        </p>

        <SearchBar value={query} onChange={setQuery} />
      </div>

      <div className="container">
        <DrinkGrid drinks={filteredDrinks} />
      </div>

      <Footer />
    </div>
  );
}

export default Drinks;
