import style from './style.module.scss';
import logo from '../../Image/Logo.svg';

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
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Pokedex</a></li>
                            <li> <a href="#">Legendaries</a></li>
                            <li><a href="#">Documentation</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}