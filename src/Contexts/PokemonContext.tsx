import { createContext, useEffect, useState, ReactNode, SetStateAction, Dispatch } from 'react';
import { AxiosResponse } from 'axios'

import api from '../services/api';
import { pokemon } from '../types/pokemonType'


interface PokemonContextProps {
    inicio: number,
    pokemons: pokemon[],
    setPokemons: Dispatch<SetStateAction<pokemon[]>>,
    total: number,
    setTotal: Dispatch<SetStateAction<number>>,
    texto: string,
    setTexto: Dispatch<SetStateAction<string>>,
    pokemonActive: string,
    setPokemonActive: Dispatch<SetStateAction<string>>
}

interface PokemonProviderProps {
    children: ReactNode
}

export const PokemonContext = createContext({} as PokemonContextProps);

export function PokemonProvider({ children }: PokemonProviderProps) {
    const inicio = 9;
    const [pokemons, setPokemons] = useState<pokemon[]>([]);
    const [pokemonActive, setPokemonActive] = useState<string>('pikachu');
    const [total, setTotal] = useState<number>(inicio)
    const [texto, setTexto] = useState<string>('');

    useEffect(() => {
        async function getPokemons() {
            const allPokemons: pokemon[] = [];
            if (texto.length !== 0) {
                const pokemon: AxiosResponse<pokemon> = await api.get(`/pokemon/${texto}`);
                allPokemons.push(pokemon.data);
            } else {
                for (let i = (total - 8); i <= total; i++) {
                    const pokemon: AxiosResponse<pokemon> = await api.get(`/pokemon/${i}`);
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