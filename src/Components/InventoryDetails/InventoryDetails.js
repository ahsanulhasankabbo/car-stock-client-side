import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import './InventoryDetails.css'

const InventoryDetails = () => {
    const restockRef = useRef('');
    const {inventoryId} = useParams();
    const [inventory,setInventory] = useState({});
    useEffect(()=>{
        const url = `http://localhost:5000/inventory/${inventoryId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setInventory(data));
    },[inventory._id])
    const handleDelivered =() =>{
        if(inventory.quantity>0){
            const {quantity, ...rest} = inventory;
            const newQuantity = parseInt(quantity) - 1;
            const newInventory = {quantity: newQuantity, ...rest};
            setInventory(newInventory);

            const url = `http://localhost:5000/inventory/${inventoryId}`;
            fetch(url,{
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newInventory)
            })
            .then(res => res.json())
            .then(data => setInventory(data))
        }
        else{

        }
    }
    const handleRestock = id =>{
        const restockQuantity = restockRef.current.value;
        const {quantity , ...rest } = inventory;
        const newQuantity = parseInt(quantity) + parseInt(restockQuantity)
        const newInventory = {quantity : newQuantity , ...rest};
        setInventory(newInventory);

        const url = `http://localhost:5000/inventory/${inventoryId}`;
        fetch(url,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newInventory)
        })
        .then(res => res.json())
        .then(data => setInterval(data));
        restockRef.current.value = ''
    }

    return (
        <div className='inventoryDetails'>
            <img src={inventory.image} alt="" />
            <h3>Name : {inventory.name}</h3>
            <p><span>Id :</span> {inventory._id}</p>
            <p><span>Discription :</span> {inventory.discription}</p>
            <p><span>Price :</span> {inventory.price}</p>
            <p><span>Quantity :</span> {inventory.quantity}</p>
            <p><span>Supplier Name :</span> {inventory.supplierName}</p>
            <button onClick={()=> handleDelivered(inventory._id)} className='btn button mb-3'>Delivered</button>
            <h3>Restock the items</h3>
            <input type="number" name="" id="" ref={restockRef} placeholder='Restock item' /> <br />
            <input className='btn button mt-2' onClick={()=> handleRestock(inventory._id)} type="submit" value="Restock Now" />
        </div>
    );
};

export default InventoryDetails;