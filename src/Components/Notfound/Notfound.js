import React from 'react';
import './Notfound.css'
import image from './image/notfound404.jpg'

const Notfound = () => {
    return (
        <div className='notFound-image'>
            <img src={image} alt="" />
        </div>
    );
};

export default Notfound;