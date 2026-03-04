import type { Pokemon } from '../types';

// Tell TypeScript this component requires a valid Pokemon object
interface Props {
    pokemon: Pokemon;
}

export default function PokemonCard({ pokemon }: Props) {
    return (
        <div style={{
            background: '#1e293b',
            padding: '40px',
            borderRadius: '24px',
            textAlign: 'center',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            width: '100%',
            maxWidth: '350px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <div style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 70%)',
                padding: '20px',
                borderRadius: '50%',
                marginBottom: '20px'
            }}>
                <img
                    src={pokemon.imageUrl}
                    alt={pokemon.name}
                    style={{ width: '200px', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))' }}
                />
            </div>

            <h2 style={{
                color: '#ffffff',
                fontSize: '2rem',
                marginBottom: '30px',
                textTransform: 'capitalize',
                fontWeight: '700'
            }}>
                {pokemon.name}
            </h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '12px',
                width: '100%'
            }}>
                {[
                    { label: 'ID #', value: pokemon.id },
                    { label: 'HEIGHT', value: pokemon.height },
                    { label: 'WEIGHT', value: pokemon.weight }
                ].map((stat) => (
                    <div key={stat.label} style={{
                        background: 'rgba(15, 23, 42, 0.6)',
                        padding: '12px 8px',
                        borderRadius: '12px',
                        border: '1px solid rgba(255, 255, 255, 0.05)'
                    }}>
                        <div style={{ color: '#64748b', fontSize: '0.65rem', fontWeight: 'bold', marginBottom: '4px' }}>
                            {stat.label}
                        </div>
                        <div style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 'bold' }}>
                            {stat.value}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
