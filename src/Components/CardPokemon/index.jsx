import style from './style.module.scss'

export default function CardPokemon(props) {
    const getTipos = props.type.map((tipo) => {
        return (
            tipo.type.name
        )
    })


    return (
        <div className={style.card} >
            <div className={style.resume}>
                <h5>{props.name}</h5>
                <div>
                    <div className={style.status}>
                        <span>{props.attack}</span>
                        <span>Attack</span>
                    </div>
                    <div className={style.status}>
                        <span>{props.defense}</span>
                        <span>Defense</span>
                    </div>
                </div>
                <div className={style.type}>
                    {getTipos.map((tipo) => {
                        return (
                            <span key={tipo} className={tipo}>{tipo}</span>
                        )
                    })}
                </div>
            </div>
            <div className={getTipos[0]}>
                <div className={style.imageWrap}>
                    <img src={props.image} alt={props.name} />
                </div>
            </div>
        </div>
    )
}