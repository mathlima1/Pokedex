import style from './style.module.scss'
import SearchBar from '../../Components/SearchBar'
export default function Pokemons() {
    return (
        <div className={style.container}>
            <h4>800 <strong>Pokemons</strong> para você escolher seu favorito!</h4>
            <SearchBar />
        </div>
    )
}