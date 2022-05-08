import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import google from './image/google.jpg';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const emailRef = useRef('');

    const [
        signInWithEmailAndPassword,
        userEmail,
        loadingEmail,
        errorEmail,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    if (userEmail) {
        // navigate(from, { replace: true });
    }

    const handleUserSignIn = async event => {
        event.preventDefault();
        await signInWithEmailAndPassword(email, password);
        const {data} = await axios.post('http://localhost:5000/login',{email});
        localStorage.setItem('accessToken',data.accessToken);
        navigate(from, { replace: true });
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        console.log(email)
        await sendPasswordResetEmail(email);
        toast('Sent email');
    }

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if(user){
        navigate(from, {replace: true});
    }

    return (
        <div>
            <div className='input-field'>
                <form onSubmit={handleUserSignIn}>
                    <label htmlFor="email">Email</label>
                    <input ref={emailRef}  onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='Email Address' required /> <br />
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Set Password' required /> <br />
                    <p className='text-danger'>{errorEmail?.message}</p>
                    <input className='submit' type="submit" value="Login" />
                    <p>New to tutor sheba? <Link className='signup-link' to='/signup'>Create new account</Link></p>
                    <p>Forget password? <button className='reset-button' onClick={resetPassword} >Reset</button></p>
                </form>
                <div className='middle-break'>
                    <hr />
                    <p>or</p>
                    <hr />
                </div>
                <button onClick={() => signInWithGoogle()} className='google'>
                    <img src={google} alt="" />
                    <p>sign in with google</p>
                </button>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Login;