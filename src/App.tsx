
import './global.css'
import style from './App.module.css'
import { Header } from './Components/Header'
import { Input } from './Components/Input'
import { Button } from './Components/Button'
import { Tasks } from './Components/Tasks'
import { Empty } from './Components/Empty'

export function App() {

  return (
    <div className={style.container}>
      <Header />
      <section className={style.section_input}>
        <Input />
        <Button />
      </section>
      <main>
        <Tasks />
        <Empty />
      </main>
    </div>
  )
}
