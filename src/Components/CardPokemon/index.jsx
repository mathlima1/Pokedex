import style from './style.module.scss'

export default function CardPokemon(props) {
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
                    {
                        props.type.map((tipo) => {
                            return (
                                <span key={tipo.type.name}>{tipo.type.name}</span>
                            )
                        })
                    }
                </div>
            </div>
            <div className={style.image}>
                <div className={style.imageWrap}>
                    <img src={props.image} alt={props.name} />
                </div>
            </div>
        </div>
    )
}