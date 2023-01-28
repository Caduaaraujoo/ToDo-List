import style from './Tasks.module.css'
import { TaskT } from '../../interfaces/taks'

interface Props {
    totalTask: TaskT[]
}

export function InfoTasks({ totalTask }: Props) {
    const totalTaskComplete = totalTask.filter((task) => {
        return task.complete == true
    })

    return (
        <div className={style.container_tasks}>
            <div className={`${style.task} ${style.tasks_criadas}`}>
                <span>Tarefas criadas</span>
                <span className={`${style.counter}`}>{totalTask.length}</span>
            </div>
            <div className={`${style.task} ${style.tasks_concluidas}`}>
                <span> Concluídas</span>
                {!totalTaskComplete.length
                    ?
                    <span className={`${style.counter}`}>0</span>
                    :
                    <span className={style.counterTotal}>{`${totalTaskComplete.length}  de ${totalTask.length}`}</span>
                }

            </div>
        </div>
    )
}