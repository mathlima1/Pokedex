import api from '../services/api';
import { createContext, useEffect, useState } from 'react';

export const PokemonContext = createContext({});

export function PokemonProvider({ children }) {
    const inicio = 15;
    const [pokemons, setPokemons] = useState([]);
    const [total, setTotal] = useState(inicio)


    useEffect(() => {
        async function getPokemons() {
            const allPokemons = [];
            for (let i = (total - 14); i <= total; i++) {
                const pokemon = await api.get(`/pokemon/${i}`);
                allPokemons.push(pokemon.data)
            }
            setPokemons(allPokemons)
        }
        getPokemons()
    }, [total])
    return (
        <PokemonContext.Provider value={
            {
                inicio,
                pokemons,
                setPokemons,
                total,
                setTotal,
            }
        }
        >
            {children}
        </PokemonContext.Provider>
    )
}