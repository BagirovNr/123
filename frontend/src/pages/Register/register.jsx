import axiosClient from "../../config/axiosClient";
import { useState } from "react";
import style from "../register/register.module.scss";
import { useNavigate } from "react-router-dom";

export function Reggister() {
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
        userName: "",
        surname: "",
        birthDate: "",
        showPassword: false,
    });

    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate("/login");
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axiosClient.get('/', formValues);

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

            <div className={style.contactWrapper}>
                <header className={style.loginCta}>
                    <h2>Account Reggister</h2>
                </header>
                <form onSubmit={handleSubmit}>


                    <div className={style.formRow}>
                        <input value={formValues.userName}
                            type='text' id='userName'
                            onChange={handleChange}
                            name='userName'
                            required />
                        <span>Username</span>
                    </div>
                    <div className={style.formRow}>
                        <input value={formValues.surname}
                            type='text' id='surname'
                            onChange={handleChange}
                            name='surname'
                            required />
                        <span>Surname</span>
                    </div>
                    <div className={style.formRow}>
                        <div className={style.formRow}>
                            <input
                                value={formValues.birthDate}
                                type='date'
                                id='birthDate'
                                onChange={handleChange}
                                name='birthDate'
                                required
                            />
                            <span style={{
                                marginLeft: "-10px",
                                display: "inline-block",
                            }}>Birth Date</span>
                        </div>

                    </div>

                    <div className={style.formRow}>
                        <input value={formValues.email}
                            type='email' id='email'
                            onChange={handleChange}
                            name='email'
                            required />
                        <span>Email</span>
                    </div>


                    <div className={style.formRow}>
                        <input className={style.passwordInput} value={formValues.password}
                            type={formValues.showPassword ? "" : "password"}
                            id='password'
                            onChange={handleChange}
                            name='password'
                            required
                        />
                        <input
                            className={style.checkBoxStyle}
                            checked={formValues.showPassword}
                            type="checkbox"
                            id='showPassword'
                            onChange={handleChange}
                            name='showPassword'
                        />
                        <span>Password</span>
                    </div>
                    <div className={style.formRow}></div>
                    <div className={style.formRow}>
                        <input type="submit" value='Submit' />

                    </div>
                </form>
                <div className={style.socialsWrapper}>
                    <ul>
                        <p onClick={handleNavigate}>
                            go back to login
                        </p>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Reggister;