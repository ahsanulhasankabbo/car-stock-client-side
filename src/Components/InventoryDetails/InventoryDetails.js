import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
        <div>
            <h1>this is inventory details : {inventory.name}</h1>
        </div>
    );
};

export default InventoryDetails;