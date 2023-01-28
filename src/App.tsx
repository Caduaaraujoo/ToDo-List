
import './global.css'
import style from './App.module.css'
import { Header } from './Components/Header'
// import { Input } from './Components/Input'
import { Button } from './Components/Button'
import { InfoTasks } from './Components/InfoTasks'
import { Empty } from './Components/Empty'
import { Tasks } from './Components/Tasks'
import { Form } from './Components/Form'
import { useState } from 'react'

export function App() {
  const [tasks, setTasks] = useState<string[]>([])

  return (
    <div className={style.container}>
      <Header />
      <section className={style.section_input}>
        <Form tasks={tasks} setTasks={setTasks} />
      </section>
      <main>
        <InfoTasks
          totalTask={tasks}
        />
        {tasks.length <= 0
          ?
          <Empty />
          :
          tasks.map((task, index) => {
            return (
              <Tasks
                key={index}
                content={task}
              />
            )
          })
        }
      </main>
    </div>
  )
}
