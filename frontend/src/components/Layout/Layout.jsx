import { Link, Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar.jsx";

export function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}