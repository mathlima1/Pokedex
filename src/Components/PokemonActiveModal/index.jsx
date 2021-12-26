import Modal from 'react-modal';
import { PokemonContext } from '../../Contexts/PokemonContext';
import { useState, useEffect, useContext } from 'react';
import api from '../../services/api';
import style from './style.module.scss';
import closeIcon from '../../Image/closeIcon.svg'

Modal.setAppElement('#root')
export default function PokemonActiveModal({ onClosePokemonActiveModal, onModalIsOpen }) {
    const { pokemonActive } = useContext(PokemonContext);
    const [pokemonAtivo, setPokemonAtivo] = useState([]);



    useEffect(() => {
        async function getPokemon() {
            const pokemon = await api.get(`/pokemon/${pokemonActive}`);
            const allPokemonData = {

            };
            setPokemonAtivo(pokemon.data);
        }
        getPokemon()
    }, [pokemonActive])

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
            <div className={style.Container}>
                <div >
                    <img src="" alt="" />
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