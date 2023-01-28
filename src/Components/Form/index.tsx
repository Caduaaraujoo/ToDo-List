import style from './Form.module.css'
import plus from '../../assets/plus.svg'
import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from 'react'

interface Props {
    tasks: string[],
    setTasks: Dispatch<SetStateAction<string[]>>
}


export function Form({ tasks, setTasks }: Props) {

    const [newTask, setNewTask] = useState<string>('')

    const handleNewTask = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTask(e.target.value)
    }

    const handleCreateNewTask = (e: FormEvent) => {
        e.preventDefault()
        setTasks([...tasks, newTask])
        setNewTask('')
    }

    return (
        <form className={style.container} onSubmit={handleCreateNewTask}>
            <input
                name='nameTask'
                value={newTask}
                className={style.input}
                placeholder="Adicione uma tarefa"
                onChange={handleNewTask}
            />
            <button
                className={style.button}
            >
                Criar
                <img src={plus}></img>
            </button>
        </form>
    )
}