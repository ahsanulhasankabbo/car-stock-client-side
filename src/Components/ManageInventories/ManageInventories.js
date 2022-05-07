import React from 'react';
import useInventory from '../../hooks/useInventory';
import ManageInventoryDetails from '../ManageInventoryDetails/ManageInventoryDetails';
import './ManageInventories.css';
import { useForm } from "react-hook-form";

const ManageInventories = () => {
    const [inventorys, setInventorys] = useInventory();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `http://localhost:5000/manageinventories`;
        fetch(url,{
            method : 'POST',
            headers : {
                'content-type' : 'application/json' 
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
    };
    return (
        <div>
            <h1 className='text-center mt-5'>Manage Inventories</h1>
            <div className='inventory'>
                {
                    inventorys.map(inventory => <ManageInventoryDetails
                        key={inventory._id}
                        inventory={inventory}
                    ></ManageInventoryDetails>)
                }
            </div>
            <div className='w-50 mx-auto mt-5'>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-3' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                    <input className='mb-3' placeholder='Price' {...register("price")} />
                    <input className='mb-3' placeholder='Quantity' {...register("quantity")} />
                    <input className='mb-3' placeholder='Supplier name' {...register("supplierName")} />
                    <input className='mb-3' placeholder='image URL' {...register("image")} />
                    <textarea className='mb-3' placeholder='Discription' {...register("discription")} />
                    <input type="submit" value='Add new item' />
                </form>
            </div>
        </div>
    );
};

export default ManageInventories;