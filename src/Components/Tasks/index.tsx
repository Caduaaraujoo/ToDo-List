import style from './Tasks.module.css'

export function Tasks() {
    return (
        <div className={style.container_tasks}>
            <div className={`${style.task} ${style.tasks_criadas}`}>
                <span>Tarefas criadas</span>
                <span className={`${style.counter}`}>0</span>
            </div>
            <div className={`${style.task} ${style.tasks_concluidas}`}>
                <span> Concluídas</span>
                <span className={`${style.counter}`}>0</span>
            </div>
        </div>
    )
}