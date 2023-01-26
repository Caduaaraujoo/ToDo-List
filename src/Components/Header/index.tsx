import style from './Header.module.css'
import logo from '../../assets/logo.svg'

export function Header() {
    return (
        <div className={style.container}>
            <img src={logo} alt="" />
        </div>
    )
}