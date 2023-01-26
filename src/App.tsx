
import './global.css'
import style from './App.module.css'
import { Header } from './Components/Header'
import { Input } from './Components/Input'
import { Button } from './Components/Button'
import { InfoTasks } from './Components/InfoTasks'
import { Empty } from './Components/Empty'
import { Tasks } from './Components/Tasks'

export function App() {

  return (
    <div className={style.container}>
      <Header />
      <section className={style.section_input}>
        <Input />
        <Button />
      </section>
      <main>
        <InfoTasks />
        <Empty />
        <Tasks />
      </main>
    </div>
  )
}
