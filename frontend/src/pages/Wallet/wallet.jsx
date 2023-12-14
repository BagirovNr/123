import { Navbar } from "../../components/Navbar/Navbar";
import WalletStyle from '../Wallet/wallet.module.scss'
import { Profile } from '../Profile/Profile'
import CreditCard from "../../components/creditCard/creditCard";

export function Wallet() {
    return (
        <>
            <Navbar />
            <section className={WalletStyle.container}>
                <div>
                    <Profile />
                </div>
                <div>
                    <CreditCard />
                </div>

            </section>
        </>
    )
}