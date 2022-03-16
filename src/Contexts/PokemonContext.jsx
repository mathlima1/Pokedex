import api from '../services/api';
import { createContext, useEffect, useState } from 'react';

export const PokemonContext = createContext({});

export function PokemonProvider({ children }) {
    const inicio = 9;
    const [pokemons, setPokemons] = useState([]);
    const [pokemonActive, setPokemonActive] = useState('pikachu');
    const [total, setTotal] = useState(inicio)
    const [texto, setTexto] = useState('');


    useEffect(() => {
        async function getPokemons() {
            const allPokemons = [];
            if (texto.length !== 0) {
                const pokemon = await api.get(`/pokemon/${texto}`);
                allPokemons.push(pokemon.data);
            } else {
                for (let i = (total - 8); i <= total; i++) {
                    const pokemon = await api.get(`/pokemon/${i}`);
                    allPokemons.push(pokemon.data);
                }
            }
            setPokemons(allPokemons)
        }
        getPokemons()
    }, [total, texto])
    return (
        <PokemonContext.Provider value={
            {
                inicio,
                pokemons,
                setPokemons,
                total,
                setTotal,
                texto,
                setTexto,
                pokemonActive,
                setPokemonActive
            }
        }
        >
            {children}
        </PokemonContext.Provider>
    )
}