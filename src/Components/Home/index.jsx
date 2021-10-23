import style from './style.module.scss'
import banner from '../../Image/banner.png'
export default function Home() {
    return (
        <div className={style.container}>
            <div className={style.container_wrap}>
                <div>
                    <h2><strong>Encontre</strong> todos os seus <strong>Pokemons</strong> favoritos</h2>
                    <p>
                        Você pode conhecer o tipo do Pokemom, seus atributos, desvantagens e habilidades
                    </p>
                    <button>Ver pokemons</button>
                </div>

                <div className={style.hero}>
                    <img src={banner} width='100%' />
                </div>
            </div>
        </div>
    )
}