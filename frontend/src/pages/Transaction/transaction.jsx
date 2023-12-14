import { Navbar } from "../../components/Navbar/Navbar";
import transactionStyle from '../transaction/transaction.module.scss'
import { Profile } from '../Profile/Profile'

export function Transaction() {
    return (
        <>
            <Navbar />
            <section className={transactionStyle.container}>
                <div>
                    <Profile />
                </div>
                <div>
                    Transaction
                </div>

            </section>
        </>
    )
}