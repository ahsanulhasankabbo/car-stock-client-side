import React from 'react';
import './Services.css';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faUser,faHandshake,faHandHoldingMedical } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <div className=''>
            <div className='text-center mt-5 '>
                <h1>What services we offer to our clients</h1>
                <p>who are with extremely love with eco friendly system</p>
            </div>
            <div className=' m-5 services'>
                <div>
                    <h3><FontAwesomeIcon className='me-2' icon={faUser}></FontAwesomeIcon> Expert technicians</h3>
                    <p>Usage of the internet is becoming more common due to rapid advancement of technology and power.</p>
                </div>
                <div>
                    <h3><FontAwesomeIcon className='me-2' icon={faHandshake}></FontAwesomeIcon>Professonal services</h3>
                    <p>Professional services are occupations in the service sector requiring special training</p>
                </div>
                <div>
                    <h3><FontAwesomeIcon className='me-2' icon={faHandHoldingMedical}></FontAwesomeIcon>Great support</h3>
                    <p>The Convention is an outstanding achievement that has already received great support</p>
                </div>
            </div>
        </div>
    );
};

export default Services;