
import './global.css'
import style from './App.module.css'
import { Header } from './Components/Header'
import { InfoTasks } from './Components/InfoTasks'
import { Empty } from './Components/Empty'
import { Tasks } from './Components/Tasks'
import { Form } from './Components/Form'
import { useState } from 'react'
import { TaskDefault } from './interfaces/taks'



export function App() {
  const [tasks, setTasks] = useState<TaskDefault[]>([])

  return (
    <div className={style.container}>
      <Header />
      <section className={style.section_input}>
        <Form
          tasks={tasks}
          setTasks={setTasks}
        />
      </section>
      <main>
        <InfoTasks
          tasks={tasks}
        />
        {tasks.length <= 0
          ?
          <Empty />
          :
          tasks.map((task) => {
            return (
              <Tasks
                key={task.id}
                id={task.id}
                content={task.content}
                tasks={tasks}
                setTasks={setTasks}
              />
            )
          })
        }
      </main>
    </div>
  )
}
