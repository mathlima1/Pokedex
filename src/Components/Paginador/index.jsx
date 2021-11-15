import style from './style.module.scss';
import { useContext } from 'react'
import { PokemonContext } from '../../Contexts/PokemonContext';

export default function Paginador() {
    const { inicio, total, setTotal } = useContext(PokemonContext)
    function handleGoToNextPage() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTotal(total + inicio)
    }
    function handleGoToPreviusPage() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTotal(total - inicio)
    }

    return (
        <div className={style.container}>
            <div className={style.paginador__wrap}>
                <button disabled={total === inicio ? true : false} onClick={handleGoToPreviusPage}>Voltar</button>
                <button disabled={total === 1118 ? true : false} onClick={handleGoToNextPage}>Proxima</button>
            </div>
        </div>
    )

}