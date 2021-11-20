import { useContext } from 'react'
import { PokemonContext } from '../../Contexts/PokemonContext'
import style from './style.module.scss'
export default function SearchBar() {
    const { texto, setTexto } = useContext(PokemonContext);
    return (
        <div className={style.container}>
            <input type="text" name="search" id="search" placeholder="Digite o nome do pokemon que quer encontrar..." value={texto.toLowerCase()} onChange={event => setTexto(event.target.value.toLowerCase())} />
        </div>
    )
}