import axiosClient from "../../config/axiosClient";
import { useState } from "react";
import style from "../Login/Login.module.scss";
import { useNavigate } from "react-router-dom";

export function Login() {
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
        showPassword: false,
    });
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate("/register");
    }
    const handleSubmit = async (formValue) => {
        e.preventDefault()

        try {
            const response = await axiosClient.get('/', formValue);

            console.log(response);
            console.log('Registration successful!', response);
        } catch (error) {
            if (error.response) {
                console.log('Server error:', error.response.data);
            } else if (error.request) {
                console.log('No response from server:', error.request);
            } else {
                console.log('Request error:', error.message);
            }

        }
        onSubmit(formValues)

    }

    const handleChange = (e) => {
        const { value, name, type, checked } = e.target;
        setFormValues((props) => ({
            ...props,
            [name]: type === 'checkbox' ? checked : value,
        }))
    }
    return (
        <div className={style.container}>
            <div>

                <div className={style.contactWrapper}>
                    <header className={style.loginCta}>
                        <h2>Login</h2>
                    </header>
                    <form onSubmit={handleSubmit}>


                        <div className={style.formRow}>
                            <input value={formValues.email}
                                type='email' id='email'
                                onChange={handleChange}
                                name='email'
                                required />
                            <span>Username or Email</span>
                        </div>


                        <div className={style.formRow}>
                            <input value={formValues.password}
                                type={formValues.showPassword ? "text" : "password"}
                                id='password'
                                onChange={handleChange}
                                name='password'
                                required
                            />
                            <span>Password</span>
                        </div>


                        <div>
                            <div>
                                <label htmlFor='showPassword'> show password   </label>
                                <input
                                    checked={formValues.showPassword}
                                    type="checkbox"
                                    id='showPassword'
                                    onChange={handleChange}
                                    name='showPassword'
                                />
                            </div>
                        </div>

                        <div className={style.formRow}></div>
                        <div className={style.formRow}>
                            <input type="submit" value='Submit' />

                        </div>
                    </form>
                    <div className={style.socialsWrapper}>
                        <header>
                            <h2>Login with your Social Account</h2>
                        </header>
                        <ul>
                            <p onClick={handleNavigate}>
                                go to register
                            </p>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login;