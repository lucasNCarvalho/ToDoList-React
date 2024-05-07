import style from './Header.module.css'
import logo from './../assets/Logo.svg'

export const Header = () => {
    return (
        <header className={style.header}>
            <img src={logo} alt="" />
        </header>
    )
}

