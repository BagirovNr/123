import { AuthForm } from "../components/authForm/authForm";
import style from './login.module.scss'

export function Login() {

    const handleSubmit = (formValue) => {
        console.log(formValue);
    }

    return (
        <>
            <AuthForm onSubmit={handleSubmit} />

        </>
    )
}