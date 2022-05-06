import React, { useState } from 'react';
import './Signup.css'
import google from './image/google.jpg';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmSPassword] = useState('');
    const [errorMassage, setErrorMassage] = useState('');
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        userEmail,
        loadingEmail,
        errorEmail,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmSPassword(event.target.value);
    }

    if(userEmail){
        navigate('/home')
    }

    const handleCreateUser = event =>{
        event.preventDefault();
        if(password !== confirmPassword){
            setErrorMassage('Your two password didnot match')
            return;
        }

        createUserWithEmailAndPassword(email,password)
    }



    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div>
            <div className='input-field'>
                <form onSubmit={handleCreateUser}>
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='Email' required /> <br />
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Set Password' required /> <br />
                    <label htmlFor="password">Confirm password</label>
                    <input onBlur={handleConfirmPasswordBlur} type="password" name="password" id="" placeholder='confirm password' required /> <br />
                    <p className='text-danger'>{errorMassage}</p>
                    <input className='submit' type="submit" value="SignUp" />
                    <p>Already have an account? <Link className='login-link' to='/login'>Login</Link></p>
                </form>
            </div>
            <div className='middle-break'>
                <hr />
                <p className='text-center'>or</p>
                <hr />
            </div>
            <div>
                <button onClick={() => signInWithGoogle()} className='google'>
                    <img src={google} alt="" />
                    <p>sign in with google</p>
                </button>
            </div>
        </div>
    );
};

export default Signup;