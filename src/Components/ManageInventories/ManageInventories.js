import React from 'react';
import useInventory from '../../hooks/useInventory';
import './ManageInventories.css';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ManageInventories = () => {
    const [inventorys, setInventorys] = useInventory();

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
                    const remaining = inventorys.filter(inventor => inventor._id !== id);
                    setInventorys(remaining);
                })
        }
    }
    return (
        // <div>
        //     <h1 className='text-center mt-5'>Manage Inventories</h1>
        //     <Link to='/additems'><button className='add-button'>Add new item</button></Link>
        //     <div className='inventory'>
        //         {
        //             inventorys.map(inventory => <ManageInventoryDetails
        //                 key={inventory._id}
        //                 inventory={inventory}
        //                 handleDelete={handleDelete}
        //             ></ManageInventoryDetails>)
        //         }
        //     </div>
        // </div>


        <div>
            <Link to='/additems'><button className='add-button'>Add new item</button></Link>
            <div className='w-50 mx-auto'>
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
                        {inventorys.map((inventory) => (
                            <tr key={inventory._id}>
                                <td>{inventory.name}</td>
                                <td>{inventory.quantity}</td>
                                <td>{inventory.price}</td>
                                <td>{inventory.supplierName}</td>
                                <td>
                                    <button 
                                    onClick={()=>handleDelete(inventory._id)} className="btn btn-danger h-5 w-5 text-white"
                                    >
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ManageInventories;