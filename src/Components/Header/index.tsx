import style from './style.module.scss';
import logo from '../../Image/Logo.svg';
import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <div className={style.container}>
            <div className={style.container__wrap}>
                <div>
                    <img src={logo} alt="Pokemon Logo" />
                </div>
                <div>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/pokemons">Pokemons</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}