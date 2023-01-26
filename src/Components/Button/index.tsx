import style from './Button.module.css'
import plus from '../../assets/plus.svg'

export function Button() {
    return (
        <div >
            <button className={style.button}>
                Criar
                <img src={plus}></img>
            </button>
        </div>
    )
}