import style from './Empty.module.css'
import Clipboard from '../../assets/Clipboard.svg'

export function Empty() {
    return (
        <div className={style.container}>
            <img src={Clipboard}></img>
            <div>
                <h4>Você ainda não tem tarefas cadastradas</h4>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div >
    )
}