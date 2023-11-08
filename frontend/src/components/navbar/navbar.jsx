import { Link, useNavigate } from "react-router-dom";
import style from './navbar.module.scss'
export function Navbar() {

    const navigation = useNavigate()
    const handleLogaut = () => {
        navigation('/login')
    }




    return (
        <header className={style.container}>
            <div className={style.userName} >UserName</div>

            <ul className={style.formContainer}>
                <Link className={style.liHome} to='/'>Home</Link>
                <Link className={style.liProfile} to='/profile'>Profile</Link>
                <Link className={style.liLogin} to='/login'>Login</Link>
                <Link className={style.liRegister} to='/register'>Register</Link>
                <button className={style.formBtn} onClick={handleLogaut}>logout</button>
            </ul>
        </header>

    )
}