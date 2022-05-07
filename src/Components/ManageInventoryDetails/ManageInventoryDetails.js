import React from 'react';
import './ManageInventoryDetails.css';

const ManageInventoryDetails = ({ inventory }) => {
    const { name, discription, price, quantity, image, supplierName } = inventory;
    return (
            <div className='inventory-details'>
                <img src={image} alt="" />
                <div className='ms-2'>
                    <h4>{name}</h4>
                    <h6>Price : {price}</h6>
                    <h6>Quantity : {quantity}</h6>
                    <button>Delete</button>
                </div>
            </div>
    );
};

export default ManageInventoryDetails;