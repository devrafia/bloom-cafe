import '../../styles/drinks.css';

function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <span className="search-bar__icon" aria-hidden="true">
        🔍
      </span>
      <input
        type="text"
        className="search-bar__input"
        placeholder="Search for a drink… (e.g. Matcha, Chai, Bubble Tea)"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-label="Search drinks by name"
      />
      {value && (
        <button
          className="search-bar__clear"
          onClick={() => onChange('')}
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );
}

export default SearchBar;
