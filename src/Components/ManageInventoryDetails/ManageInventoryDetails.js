import React from 'react';
import { Table } from 'react-bootstrap';
import useInventory from '../../hooks/useInventory';
import './ManageInventoryDetails.css';

const ManageInventoryDetails = ({ inventory, handleDelete }) => {
    const { _id, name, discription, price, quantity, image, supplierName } = inventory;

    return (
        <div>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>price</th>
                        <th>quantity</th>
                        <th>supplier name</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{price}</td>
                        <td>{quantity}</td>
                        <td>{supplierName}</td>
                        <td  onClick={()=>handleDelete(_id)}>delete</td>
                    </tr>
                </tbody>
            </Table>
        </div>
        // <div className='inventory-details'>
        //     <img src={image} alt="" />
        //     <div className='ms-2'>
        //         <h4>{name}</h4>
        //         <h6>Price : {price}</h6>
        //         <h6>Quantity : {quantity}</h6>
        //         <button onClick={()=>handleDelete(_id)}>Delete</button>
        //     </div>
        // </div>
    );
};

export default ManageInventoryDetails;