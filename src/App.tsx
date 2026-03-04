import PokemonCard from './components/PokemonCard';
import type { Pokemon } from './types';

interface AppProps {
  pokemonData: Pokemon;
}

export default function App({ pokemonData }: AppProps) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px',
      gap: '10px'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '800', letterSpacing: '-0.02em' }}>
          <span style={{ color: '#f59e0b' }}>Poké</span>
          <span style={{ color: '#ffffff' }}>Explorer</span>
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginTop: '8px' }}>
          Discover amazing Pokémon stats!
        </p>
      </div>

      <PokemonCard pokemon={pokemonData} />

      <footer style={{ marginTop: '40px', color: '#475569', fontSize: '0.9rem' }}>
        Built with TypeScript & React Props
      </footer>
    </div>
  );
}
