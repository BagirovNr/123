import { Navbar } from '../../components/Navbar/Navbar'
import { Profile } from '../Profile/Profile'
import addBankStyle from './addBank.module.scss'
export function AddBank() {


    return (
        <>
            <Navbar />
            <section className={addBankStyle.container}>
                <div>
                    <Profile />
                </div>
                <div className={addBankStyle.AddBankContainer}>
                    Add bank components

                </div>

            </section>
        </>
    )
};

