import { Link, useNavigate} from 'react-router-dom'
import React, { useState } from 'react'
import auth from './firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import './Login.css'


const Login =()=> {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate() // New change in react v6. use navigate is used instead of use history.

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password)
            alert("Login successful !");
            navigate('/')
        } catch (error) {
            alert(error)
        }
    }

    return(
        <div>
            <form className='login-form' onSubmit={handleSubmit}> 
            <Link to="/SignUp" className='signup-link'>Sign up</Link><br></br>
            <label htmlFor='email'>
                Email: <br></br>
                <input type='text' onChange={(e) => setEmail(e.target.value)}/>
            </label><br></br>
            <label htmlFor='password'>
                Password: <br></br>
                <input type='password' onChange={(e) => setPassword(e.target.value)}/>
            </label><br></br>
            <button type='submit'>Login</button>
        </form>
        </div>
    );
}
export default Login;