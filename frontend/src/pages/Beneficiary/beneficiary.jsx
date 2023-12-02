
import { Navbar } from '../../components/Navbar/Navbar'
import { Profile } from '../Profile/Profile'
import benefeciaryStyle from './beneficiary.module.scss'
export function Benefeciary() {
    return (
        <>
            <Navbar />
            <section className={benefeciaryStyle.container}>
                <div>
                    <Profile />
                </div>
                <div className={benefeciaryStyle.benefeciaryContainer}>
                    Benefeciary component

                </div>

            </section>
        </>
    )
}