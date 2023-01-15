import Modal from 'react-modal';
import { PokemonContext } from '../../Contexts/PokemonContext';
import { useState, useEffect, useContext } from 'react';
import api from '../../services/api';
import style from './style.module.scss';
import closeIcon from '../../Image/closeIcon.svg'

Modal.setAppElement('#root')

export default function PokemonActiveModal({ onClosePokemonActiveModal, onModalIsOpen }) {
    const { pokemonActive, pokemons } = useContext(PokemonContext);
    const [pokemonAtivo, setPokemonAtivo] = useState(pokemons[0]);

    useEffect(() => {
        async function getPokemon() {
            const pokemon = await api.get(`/pokemon/${pokemonActive}`);
            setPokemonAtivo(pokemon.data);
        }
        getPokemon()
    }, [pokemonActive])


    if (!pokemonAtivo) {
        return (
            <h2>Carregando...</h2>
        )
    } else {
        const getTipos = pokemonAtivo.types.map((tipo) => {
            return (
                tipo.type.name
            )
        })

        return (
            <Modal
                preventScroll={false}
                isOpen={onModalIsOpen}
                onRequestClose={onClosePokemonActiveModal}
                overlayClassName='reactModalOverlay'
                className={style.reactModalContent}>
                <button
                    className='reactModalClose'
                    type="button"
                    onClick={onClosePokemonActiveModal}
                >
                    <img src={closeIcon} alt="Fechar modal" />
                </button>

                <div className={`${getTipos[0]} ${style.backgroundOverflow}`}>
                    <div>
                        <img src={pokemonAtivo?.sprites.other.home.front_default} alt={pokemonAtivo.name} />
                        <div className={style.type}>
                            {getTipos.map((tipo) => {
                                return (
                                    <span key={tipo} className={tipo}>{tipo}</span>
                                )
                            })}
                        </div>
                    </div>
                    <div>
                        <div className={style.pokemonAtivo__mainInfo}>
                            <h3>{pokemonAtivo.name}</h3>
                            <div className={style.pokemonAtivo_geracao}>
                                <span>{pokemonAtivo.order}</span>
                            </div>
                        </div>

                        <div className={style.pokemonAtivo__abilities}>
                            <h3>Abilities</h3>
                            <span>{pokemonAtivo?.abilities[0]?.ability.name} / {pokemonAtivo?.abilities[1]?.ability.name}</span>
                        </div>
                        <div className={style.pokemonAtivo__stats}>
                            <div>
                                <h3>Healthy Points</h3>
                                <span>{pokemonAtivo?.stats[0].base_stat}</span>
                                <div className={style.barra_hp} />
                            </div>
                            <div>
                                <h3>Experience</h3>
                                <span>{pokemonAtivo?.base_experience}</span>
                                <div className={style.barra_xp} />
                            </div>
                        </div>
                        <div className={style.pokemonAtivo__figthStats}>
                            <div>
                                <span>{pokemonAtivo?.stats[2].base_stat}</span>
                                <h5>Defense</h5>
                            </div>

                            <div>
                                <span>{pokemonAtivo?.stats[1].base_stat}</span>
                                <h5>Attack</h5>
                            </div>
                            <div>
                                <span>{pokemonAtivo?.stats[3].base_stat}</span>
                                <h5>Sp Attack</h5>
                            </div>
                            <div>
                                <span>{pokemonAtivo?.stats[4].base_stat}</span>
                                <h5>Sp Defense</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }


}