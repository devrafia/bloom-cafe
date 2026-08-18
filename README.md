# 🌸 Bloom Café — Frontend

A cute, cozy, modern frontend for a tea & drinks shop, built with React + Vite
and plain CSS. This is a **frontend-only** project — no backend logic is
included, but the project is structured so a Flask or FastAPI backend can be
plugged in later without a rewrite.

## Getting started

```bash
npm install
npm run dev
```

Then open the URL printed in the terminal (usually `http://localhost:5173`).

To create a production build:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Project structure

```
src/
├── components/
│   ├── Navbar/            Top navigation bar
│   ├── Hero/              Home page hero section
│   ├── FeaturedDrinks/    3 featured drinks on Home
│   ├── SearchBar/         Instant name search (Drinks page)
│   ├── DrinkCard/         3D flip card (front/back)
│   ├── DrinkGrid/         Responsive grid of DrinkCards
│   ├── CupIllustration/   Shared illustrated-cup SVG (signature visual)
│   └── Footer/            Social links, hours, copyright
│
├── pages/
│   ├── Home/              Hero + Featured + About + Footer
│   └── Drinks/            Heading + SearchBar + DrinkGrid + Footer
│
├── data/
│   └── drinks.js          Static menu data (12 drinks)
│
├── services/
│   └── api.js             Stubbed fetch() calls for a future backend
│
├── styles/
│   ├── navbar.css
│   ├── home.css
│   ├── drinks.css
│   ├── cards.css
│   └── footer.css
│
├── App.jsx                Route definitions
├── main.jsx                React root + Router provider
└── index.css               Design tokens, resets, shared utilities
```

## Connecting a Python backend later

The app currently reads menu data from `src/data/drinks.js`. To connect a
Flask or FastAPI backend:

1. Build REST endpoints such as `GET /api/drinks`, `GET /api/drinks/:id`,
   `POST /api/orders`, and auth routes — the suggested contract is already
   documented in `src/services/api.js`.
2. Implement the functions already stubbed in `src/services/api.js`
   (`getDrinks`, `getDrinkById`, `createOrder`) to call your real endpoints.
3. Swap the `import drinks from '../../data/drinks'` lines in
   `pages/Drinks/Drinks.jsx` and `components/FeaturedDrinks/FeaturedDrinks.jsx`
   for a `useEffect` + `getDrinks()` call, storing the result in state.
4. Set `VITE_API_BASE_URL` in a `.env` file to point at your backend
   (e.g. `http://localhost:8000/api` for FastAPI, `http://localhost:5000/api`
   for Flask), and enable CORS on the backend for the Vite dev origin.
5. Re-enable the "Order Soon" button in `Navbar.jsx` once `/api/orders` and
   a checkout flow are ready.

No component names, data shapes, or file locations need to change — every
component already consumes drink data through the same field names
(`id`, `name`, `price`, `rating`, `temp`, `category`, `description`,
`ingredients`, `calories`, `quote`) that a real API response would use.

## Tech notes

- React Router (`react-router-dom`) handles `/` (Home) and `/drinks` (Drinks).
- All styling is plain CSS using custom properties defined in `index.css`
  (no Tailwind/Bootstrap).
- Drink illustrations are hand-built SVG (`CupIllustration`) rather than
  photos, so the whole menu reads as one cohesive illustrated style.
- The drink card flip is pure CSS 3D transform (`perspective` +
  `rotateY` + `backface-visibility`).
