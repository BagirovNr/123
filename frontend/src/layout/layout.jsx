import { Link, Outlet, useNavigate } from "react-router-dom";
import { Navbar } from "../components/navbar/navbar";

export function Layout() {



    return (
        <>
            <div>
                <Navbar />
            </div>
            <main>
                <Outlet />
            </main>
        </>

    )
}