/**
 * api.js
 * ---------------------------------------------------------------------------
 * Centralized place for all future backend calls (Flask / FastAPI).
 *
 * Nothing here is wired up yet — the app currently runs on the static data
 * in /src/data/drinks.js. When a backend is ready, implement the functions
 * below (they already return the shape the rest of the app expects) and
 * swap the data imports in pages/components for these calls.
 *
 * Suggested REST contract:
 *   GET    /api/drinks            -> list of drinks
 *   GET    /api/drinks/:id        -> single drink
 *   GET    /api/drinks?search=... -> filtered drinks
 *   POST   /api/orders            -> place an order
 *   POST   /api/auth/login        -> user login
 *   POST   /api/auth/register     -> user signup
 * ---------------------------------------------------------------------------
 */

// Base URL will come from an environment variable once a backend exists,
// e.g. import.meta.env.VITE_API_BASE_URL
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

/**
 * Fetch all drinks from the backend.
 * Currently unused — components import from data/drinks.js instead.
 */
export async function getDrinks() {
  const response = await fetch(`${API_BASE_URL}/drinks`);
  if (!response.ok) throw new Error('Failed to load drinks');
  return response.json();
}

/**
 * Fetch a single drink by id.
 */
export async function getDrinkById(id) {
  const response = await fetch(`${API_BASE_URL}/drinks/${id}`);
  if (!response.ok) throw new Error('Failed to load drink');
  return response.json();
}

/**
 * Placeholder for submitting an order once ordering is enabled.
 */
export async function createOrder(orderPayload) {
  const response = await fetch(`${API_BASE_URL}/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(orderPayload),
  });
  if (!response.ok) throw new Error('Failed to place order');
  return response.json();
}
