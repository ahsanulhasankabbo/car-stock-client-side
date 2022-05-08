import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth); 
    const [order,setOrder] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        const getOrders = async() =>{
            const email = user.email;
            const url = `http://localhost:5000/order?email=${email}`;
            try{
                const {data} = await axios.get(url,{
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setOrder(data)
            }
            catch(error){
                console.log(error.message);
                if(error.response.status === 401 || error.response.status === 403){
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getOrders();
    },[user])
    const handleDelete = id => {
        const proceed = window.confirm('are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/manageinventories/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = order.filter(inventor => inventor._id !== id);
                    setOrder(remaining);
                })
        }
    }
    return (
        <div className='m-5'>
            <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Supplier Name</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {order.map((singleOrder) => (
                            <tr key={singleOrder._id}>
                                <td>{singleOrder.name}</td>
                                <td>{singleOrder.quantity}</td>
                                <td>{singleOrder.price}</td>
                                <td>{singleOrder.supplierName}</td>
                                <td>
                                    <button 
                                    onClick={()=>handleDelete(singleOrder._id)} className="btn btn-danger h-5 w-5 text-white"
                                    >
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
        </div>
    );
};

export default MyItems;