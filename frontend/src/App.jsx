import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/HomePage/Home.jsx";
import { Login } from "./Pages/Login/Login.jsx";
import { Profile } from "./Pages/Profile/Profile.jsx";
import { Layout } from "./components/Layout/Layout.jsx";
import Register from "./Pages/Register/register.jsx";
import { NotFoundPage } from "./Pages/Nopage/NoPage.jsx";
import { AddBank } from "./Pages/AddBank/addBank.jsx";
import { Benefeciary } from "./Pages/Beneficiary/beneficiary.jsx";
import { PayBills } from "./Pages/PayBills/paybills.jsx";
import { Transaction } from "./Pages/Transaction/transaction.jsx";
import { Wallet } from "./Pages/Wallet/wallet.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>

                <Route>
                    <Route path="/profile/addBank" element={<AddBank />} />
                    <Route path="/profile/beneficiary" element={<Benefeciary />} />
                    <Route path="/profile/payBills" element={<PayBills />} />
                    <Route path="/profile/transaction" element={<Transaction />} />
                    <Route path="/profile/wallet" element={<Wallet />} />
                </Route>

            </Routes>
        </>
    );
}

export default App;
