import style from './style.module.scss'
import bg404 from '../../Image/404.png'
import RocketTeam from '../../Image/RocketTeam.png'
import { Link } from 'react-router-dom'

export default function Error404() {
    return (
        <div className={style.container}>
            <img src={RocketTeam} />
            <h2><span>A equipe rocket</span> ganhou dessa vez</h2>
            <button><Link to="/">Inicio</Link></button>
        </ div>
    )
}