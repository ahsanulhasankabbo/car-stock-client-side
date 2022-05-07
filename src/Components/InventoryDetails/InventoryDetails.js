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
            <h1>Name : {inventory.name}</h1>
            <p>id : {inventory._id}</p>
            <p>discription : {inventory.discription}</p>
            <p>price : {inventory.price}</p>
            <p>quantity : {inventory.quantity}</p>
            <p>supplier name : {inventory.supplierName}</p>
            <button>Delivered</button>
            <h1>Restock the items</h1>
            <input type="number" name="" id="" />
            <Link to='/manageinventories'><button>Manage inventoties</button></Link>

        </div>
    );
};

export default InventoryDetails;