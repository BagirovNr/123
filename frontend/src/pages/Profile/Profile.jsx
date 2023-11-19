import { Link } from "react-router-dom";
import pStyle from "./profile.module.scss";
export function Profile() {
    return (
        <>
            <nav className={pStyle.navContainer}>
                <ul >
                    <li>
                        <Link to="/addBank">Add Bank</Link>
                    </li>
                    <li>
                        <Link to="/beneficiary">Beneficiary</Link>
                    </li>
                    <li>
                        <Link to="/payBills">PayBills</Link>
                    </li>
                    <li>
                        <Link to="/transaction">Transaction</Link>
                    </li>
                    <li>
                        <Link to="/wallet">Wallet</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}