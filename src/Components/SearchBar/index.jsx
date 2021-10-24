
import style from './style.module.scss'
export default function SearchBar() {
    return (
        <div className={style.container}>
            <input type="text" name="search" id="search" placeholder="Encontre seu pokemon..." />
        </div>
    )
}