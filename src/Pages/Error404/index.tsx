import { Link } from 'react-router-dom'

import style from './style.module.scss'
import RocketTeam from '../../Image/RocketTeam.png'

export default function Error404() {
    return (
        <div className={style.container}>
            <img src={RocketTeam} alt="Rocket team" />
            <h2><span>A equipe rocket</span> ganhou dessa vez</h2>
            <button><Link to="/">Inicio</Link></button>
        </ div>
    )
}