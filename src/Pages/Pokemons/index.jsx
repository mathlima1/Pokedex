import { useContext } from 'react';

import style from './style.module.scss'

import SearchBar from '../../Components/SearchBar'
import CardPokemon from '../../Components/CardPokemon'
import Paginador from '../../Components/Paginador'
import { PokemonContext } from '../../Contexts/PokemonContext';
export default function Pokemons() {
    const { pokemons, texto } = useContext(PokemonContext)

    const RenderCard = pokemons.map((poke) => {
        if (!pokemons) {
            return (<h1>Carregando...</h1>)
        } else {
            return (
                <CardPokemon
                    key={poke.name}
                    name={poke.name}
                    image={poke.sprites.other.home.front_default}
                    attack={poke.stats[1].base_stat}
                    defense={poke.stats[2].base_stat}
                    type={poke.types}
                />
            )
        }
    })
    return (
        <div className={style.container}>
            <header>
                <h4>1.118 <strong>Pokemons</strong> para você escolher seu favorito!</h4>
                <SearchBar />
            </header>
            <div className={style.PokeGalery}>
                {RenderCard}
            </div>
            <Paginador />

        </div>
    )
}