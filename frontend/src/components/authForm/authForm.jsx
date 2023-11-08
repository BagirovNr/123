import { useState } from "react";
import authstyle from './authForm.module.scss'

export function AuthForm({ onSubmit }) {
    const [formValue, setFormValue] = useState({
        email: "",
        password: "",
        showPass: false,
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            usernames: formValue.email,
            password: formValue.password,
        });
    }


    return (
        <>
            <form onSubmit={handleSubmit} className={authstyle.container}>
                <div className={authstyle.content}>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input value={formValue.email}
                            id="email"
                            type="email"
                            onChange={(e) => setFormValue((prev) => ({ ...prev, email: e.target.value }))}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input value={formValue.password}
                            id="password"
                            type={formValue.showPass ? "text" : "password"}
                            onChange={(e) => setFormValue((prev) => ({ ...prev, password: e.target.value }))}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="showPassword">ShowPassword</label>
                        <input checked={formValue.showPass}
                            id="showPassword"
                            type="checkbox"
                            onChange={(e) => setFormValue((prev) => ({ ...prev, showPass: e.target.checked }))}
                        />
                    </div>
                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                </div>
            </form>

        </>
    )
}
export default AuthForm;