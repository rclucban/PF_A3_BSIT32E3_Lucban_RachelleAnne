import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import type { Pokemon } from './types'

// 1. Fetch raw JSON from PokéAPI
fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then(response => response.json()) // 2. Parse text into a JS object
  .then(data => {
    // 3. Shape the messy data into our clean interface
    const cleanPokemon: Pokemon = {
      id: data.id,
      name: data.name,
      height: data.height,
      weight: data.weight,
      imageUrl: data.sprites.other['official-artwork'].front_default || data.sprites.front_default
    };

    // 4. Render the app only after data is ready
    createRoot(document.getElementById('root')!).render(
      <StrictMode>
        <App pokemonData={cleanPokemon} />
      </StrictMode>
    );
  });
