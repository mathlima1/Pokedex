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
            console.log(pokemonAtivo)
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
                isOpen={onModalIsOpen}
                onRequestClose={onClosePokemonActiveModal}
                overlayClassName='reactModalOverlay'
                className='reactModalContent'>
                <button
                    className='reactModalClose'
                    type="button"
                    onClick={onClosePokemonActiveModal}
                >
                    <img src={closeIcon} alt="Fechar modal" />
                </button>
                <div className={getTipos[0]}>
                    <div >
                        <img src={pokemonAtivo?.sprites.other.home.front_default} alt={pokemonAtivo.name} />
                        <div>

                        </div>
                    </div>
                    <div>
                        <h3></h3>
                    </div>
                </div>
            </Modal>
        )
    }


}