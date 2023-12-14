import { Link } from "react-router-dom";
import pStyle from "./profile.module.scss";
import { Navbar } from "../../components/Navbar/Navbar";
export function Profile() {
    return (
        <section>
            <nav className={pStyle.navContainer}>
                <ul className={pStyle.profileNav} >
                    <li>
                        <Link to="/profile/addBank">Add Bank</Link>
                    </li>
                    <li>
                        <Link to="/profile/beneficiary">Beneficiary</Link>
                    </li>
                    <li>
                        <Link to="/profile/payBills">PayBills</Link>
                    </li>
                    <li>
                        <Link to="/profile/transaction">Transaction</Link>
                    </li>
                    <li>
                        <Link to="/profile/wallet">Wallet</Link>
                    </li>
                    <p style={{
                        padding: '40px',
                    }}>to contact us: **********
                    </p>
                </ul>
            </nav>
        </section>
    )
}