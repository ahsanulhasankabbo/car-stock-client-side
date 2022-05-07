import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './InventoryDetails.css'

const InventoryDetails = () => {
    const {inventoryId} = useParams();
    const [inventory,setInventory] = useState({});
    useEffect(()=>{
        const url = `http://localhost:5000/inventory/${inventoryId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setInventory(data));
    },[])
    return (
        <div className='inventoryDetails'>
            <img src={inventory.image} alt="" />
            <h3>Name : {inventory.name}</h3>
            <p><span>Id :</span> {inventory._id}</p>
            <p><span>Discription :</span> {inventory.discription}</p>
            <p><span>Price :</span> {inventory.price}</p>
            <p><span>Quantity :</span> {inventory.quantity}</p>
            <p><span>Supplier Name :</span> {inventory.supplierName}</p>
            <button className='btn delivary-button'>Delivered</button>
            <h3>Restock the items</h3>
            <input type="number" name="" id="" /> <br />
        </div>
    );
};

export default InventoryDetails;