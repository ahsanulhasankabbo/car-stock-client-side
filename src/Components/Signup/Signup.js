import React from 'react';
import './Signup.css'
import google from './image/google.jpg'

const Signup = () => {
    return (
        <div>
            <div className='input-field'>
                <form>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" placeholder='Email' required /> <br />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" placeholder='Set Password' required /> <br />
                    <label htmlFor="password">Confirm password</label>
                    <input type="password" name="password" id="" placeholder='confirm password' required /> <br />
                    <input className='submit' type="submit" value="SignUp" />
                </form>
            </div>
            <div className='middle-break'>
                <hr />
                <p className='text-center'>or</p>
                <hr />
            </div>
            <div>
                <button className='google'>
                    <img src={google} alt="" />
                    <p>sign in with google</p>
                </button>
            </div>
        </div>
    );
};

export default Signup;