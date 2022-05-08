import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const AddItems = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        // console.log(data);
        const url = `https://fast-refuge-28086.herokuapp.com/manageinventories`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result);
                toast('Inventory add on your side')
            })
        
    };
    return (
        <div>
            <div className='w-50 mx-auto m-5'>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-3' type='email' value={user?.email} {...register("email", { required: true })} />
                    <input className='mb-3' placeholder='Inventory Name' {...register("name", { required: true, maxLength: 20 })} />
                    <input className='mb-3' placeholder='Price' {...register("price")} />
                    <input className='mb-3' placeholder='Quantity' {...register("quantity")} />
                    <input className='mb-3' placeholder='Supplier name' {...register("supplierName")} />
                    <input className='mb-3' placeholder='image URL' {...register("image")} />
                    <textarea className='mb-3' placeholder='Discription' {...register("discription")} />
                    <input className='w-25 mx-auto' type="submit" value='Add new item' />
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddItems;