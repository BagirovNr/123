import { Link, useNavigate } from "react-router-dom";
import style from "../Navbar/Navbar.module.scss"
export function Navbar() {

    const navigate = useNavigate();
    const handleLogaut = () => {
        navigate('/login')
    }
    return (
        <>
            <header className={style.container} >
                <div>
                    UserName
                </div>
                <ul>
                    <Link className={style.liComponent} to='/'>Home</Link>
                    <Link className={style.liComponent} to='/profile'>Profile</Link>
                    <Link className={style.liComponent} to='/login'>Login</Link>
                    <button className={style.LogBtn} onClick={handleLogaut}><span
                        style={{
                            textAlign: "center"

                        }}
                        class="material-symbols-outlined">
                        logout
                    </span></button>
                </ul>
            </header>
        </>
    );
}
