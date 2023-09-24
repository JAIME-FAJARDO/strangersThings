
import { useState } from "react"

import { registerUser } from '../API'; 
import { useNavigate } from 'react-router-dom'; 

import AuthForm from '../components/AuthForm'

export default function Register ({ setToken }) {
    // TODO sign-up for an account with username and password
    // const Register = ({token, setToken})
    const navigate = useNavigate()
    // const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')
    async function handleSubmit (e, username, password) {
        e.preventDefault();
        const token = await registerUser(username, password);
        console.log("logging token from Registeruser", token);
        setToken(token);
        
        localStorage.setItem('token', token);
        // navigate('/');
    }
    
    // if (token) {
    //     navigate('/');
    // }
    return (
        <div>
            <h1>Register</h1>
           <AuthForm buttonText="Register" handleSubmit={handleSubmit} />
        </div>
    )
}