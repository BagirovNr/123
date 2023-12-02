import { Navbar } from "../../components/Navbar/Navbar";
import payBillsStyle from '../PayBills/PayBills.module.scss'
import { Profile } from '../Profile/Profile'

export function PayBills() {
    return (
        <>
            <Navbar />
            <section className={payBillsStyle.container}>
                <div>
                    <Profile />
                </div>
                <div className={payBillsStyle.benefeciaryContainer}>
                    PayBills Component
                </div>

            </section>
        </>
    )
}