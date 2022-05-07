import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SingleInventory.css'

const SingleInventory = ({ inventory }) => {
    const { _id, name, discription, price, quantity, image, supplierName } = inventory;
    const navigate = useNavigate();

    const navigateToInventoryDetail = id =>{
        navigate(`/inventory/${id}`);
    }

    return (
        <div className='single-inventory'>
            <img src={image} alt="" />
            <div className='ps-2'>
                <h4>{name}</h4>
                <h6>Price : {price}</h6>
                <h6>Quantity : {quantity}</h6>
                <p><span>Supplier Name</span> : {supplierName}</p>
                <p>{discription}</p>
                <button onClick={()=>navigateToInventoryDetail(_id)}>Update</button>
            </div>
        </div>
    );
};

export default SingleInventory;