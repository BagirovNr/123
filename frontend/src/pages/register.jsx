import { AuthForm } from "../components/authForm/authForm";
import axiosClient from "../config/axiosClient";

export function Register() {
    const handleSubmit = async (formValue) => {
        try {
            const response = await axiosClient.post('/', formValue);
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
    }
    return (
        <>
            <AuthForm onSubmit={handleSubmit} />
        </>
    )
}
export default Register;