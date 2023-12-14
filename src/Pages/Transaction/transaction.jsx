import { Navbar } from "../../components/Navbar/Navbar";
import transactionStyle from '../transaction/transaction.module.scss'
import { Profile } from '../Profile/Profile'

export function Transaction() {
    return (
        <>

            <section className={transactionStyle.container} >

                <Navbar />
                <div className={transactionStyle.fff}>

                    <div className={transactionStyle.mainContent}>
                        <div className={transactionStyle.navigationLeft}>

                            <Profile />
                        </div>
                    </div>


                    <main className={transactionStyle.profileContent}>
                        <div className={transactionStyle.firstUl}>
                            <div className={transactionStyle.balance}>
                                <h2>Wallet Balance</h2>
                                <h3>$298.00</h3>
                                <p>Wiew Transactions</p>
                            </div>
                            <ul className={transactionStyle.grCode}>
                                <img src="https://www.shutterstock.com/image-vector/img-file-document-icon-260nw-1356823577.jpg" alt="error" />
                                <p>Copy gr Code</p>
                            </ul>
                        </div>
                        <ul className={transactionStyle.secondUl}>
                            <li>
                                <span class="material-symbols-outlined">
                                    add_circle
                                </span>
                                <p>Add Balance</p>
                            </li>
                            <li>
                                <span class="material-symbols-outlined">
                                    open_in_new
                                </span>
                                <p>Wallet Transfer</p>
                            </li>
                            <li>
                                <span class="material-symbols-outlined">
                                    open_in_new_down
                                </span>
                                <p>Wallet Withdrawal Request</p>
                            </li>
                            <li>
                                <span class="material-symbols-outlined">
                                    redeem
                                </span>
                                <p>Wallet Coupon Redeem</p>
                            </li>
                        </ul>
                    </main>
                </div>
            </section >

        </>
    )
}