import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Give the navbar a subtle "settled in" shadow once the page scrolls
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Drinks', to: '/drinks' },
    { label: 'About', to: '/#about' },
    { label: 'Contact', to: '/#footer' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <NavLink to="/" className="navbar__logo" onClick={() => setMenuOpen(false)}>
          <span className="navbar__logo-mark">🌸</span>
          <span className="navbar__logo-text">Bloom Café</span>
        </NavLink>

        <button
          className={`navbar__toggle ${menuOpen ? 'is-open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `navbar__link ${isActive && link.to !== '/#about' && link.to !== '/#footer' ? 'is-active' : ''}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}

          <button
            className="btn btn-disabled navbar__cta"
            disabled
            title="Ordering online is coming soon!"
          >
            Order Soon
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
