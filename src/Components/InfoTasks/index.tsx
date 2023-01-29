import style from './Tasks.module.css'
import { TaskDefault } from '../../interfaces/taks'

interface Props {
    tasks: TaskDefault[]
}

export function InfoTasks({ tasks }: Props) {
    const totalTaskComplete = tasks.filter((task) => {
        return task.complete == true
    })

    return (
        <div className={style.container_tasks}>
            <div className={`${style.task} ${style.tasks_criadas}`}>
                <span>Tarefas criadas</span>
                <span className={`${style.counter}`}>{tasks.length}</span>
            </div>
            <div className={`${style.task} ${style.tasks_concluidas}`}>
                <span> Concluídas</span>
                {!totalTaskComplete.length
                    ?
                    <span className={`${style.counter}`}>0</span>
                    :
                    <span className={style.counterTotal}>{`${totalTaskComplete.length}  de ${tasks.length}`}</span>
                }

            </div>
        </div>
    )
}