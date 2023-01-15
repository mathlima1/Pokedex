import { useContext } from 'react';

import { PokemonContext } from '../../Contexts/PokemonContext';
import style from './style.module.scss'
import { tipo } from '../../types/pokemonType'

interface CardPokemonProps {
    name: string,
    image: string | null,
    attack: number,
    defense: number,
    type: tipo[],
    onOpenPokemonActiveModal(): void
}

export default function CardPokemon(props: CardPokemonProps) {
    const { setPokemonActive } = useContext(PokemonContext)

    const getTipos = props.type.map((tipo) => {
        return (
            tipo.type.name
        )
    })

    function handleOpenModal() {
        setPokemonActive(props.name);
        props.onOpenPokemonActiveModal()
    }

    return (
        <div className={style.card} onClick={handleOpenModal}>
            <div className={style.resume}>
                <h5>{props.name}</h5>
                <div>
                    <div className={style.status}>
                        <span>{props.attack}</span>
                        <span>Attack</span>
                    </div>
                    <div className={style.status}>
                        <span>{props.defense}</span>
                        <span>Defense</span>
                    </div>
                </div>
                <div className={style.type}>
                    {getTipos.map((tipo) => {
                        return (
                            <span key={tipo} className={tipo}>{tipo}</span>
                        )
                    })}
                </div>
            </div>
            <div className={getTipos[0]}>
                <div className={style.imageWrap}>
                    <img src={props.image || ''} alt={props.name} loading="lazy" />
                </div>
            </div>
        </div >
    )
}