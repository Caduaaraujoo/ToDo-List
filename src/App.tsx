
import './global.css'
import style from './App.module.css'
import { Header } from './Components/Header'
import { Input } from './Components/Input'
import { Button } from './Components/Button'

export function App() {

  return (
    <div className={style.container}>
      <Header />
      <section className={style.container_body}>
        <Input />
        <Button />
      </section>
    </div>
  )
}
