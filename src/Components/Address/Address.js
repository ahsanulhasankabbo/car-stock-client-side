import React from 'react';
import './Address.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faAt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Address = () => {
    return (
        <div className='address'>
            <div className='info'>
                <h1>Contact us</h1>
                <hr className='w-75' />
                <h6><FontAwesomeIcon className='me-2' icon={faLocationDot}></FontAwesomeIcon>36/B Elephend Road,Dhanmondi,Dhaka</h6>
                <h6><FontAwesomeIcon className='me-2' icon={faPhone}></FontAwesomeIcon>01786797330</h6>
                <h6><FontAwesomeIcon className='me-2' icon={faAt}></FontAwesomeIcon>carstock@gmail.com</h6>
            </div>
            <div className='input-container'>
                <h1>Share your opinion with us</h1>
                <input type="text" placeholder='Enter your name' /> <br />
                <input type="email" name="" id="" placeholder='Enter a valid email address' /> <br />
                <textarea placeholder='Enter your message' name="" id="" cols="40" rows="3"></textarea> <br />
                <Link to='/opinion'><input className='submit' type="submit" value="Submit" /></Link>
            </div>
        </div>
    );
};

export default Address;