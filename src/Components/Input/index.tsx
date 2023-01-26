import style from './Input.module.css';

export function Input() {
    return (
        <input className={style.input} placeholder="Adicione uma tarefa" />
    )
}