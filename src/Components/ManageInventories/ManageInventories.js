import React from 'react';
import useInventory from '../../hooks/useInventory';
import ManageInventoryDetails from '../ManageInventoryDetails/ManageInventoryDetails';
import './ManageInventories.css';
import { Table } from 'react-bootstrap';
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
        <div>
            <h1 className='text-center mt-5'>Manage Inventories</h1>
            <Link to='/additems'><button className='add-button'>Add new item</button></Link>
            <div className='inventory'>
                {
                    inventorys.map(inventory => <ManageInventoryDetails
                        key={inventory._id}
                        inventory={inventory}
                        handleDelete={handleDelete}
                    ></ManageInventoryDetails>)
                }
            </div>
        </div>


        // <div>
        //     <div className='w-50 mx-auto'>
        //         <Table striped bordered hover responsive>
        //             <thead>
        //                 <tr>
        //                     <th>Item Name</th>
        //                     <th>Quantity</th>
        //                     <th>Price</th>
        //                     <th>Supplier Name</th>
        //                     <th>Delete</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {inventorys.map((inventory)=>)}
        //                 <tr>
        //                     <td>1</td>
        //                     <td>Mark</td>
        //                     <td>Otto</td>
        //                     <td>@mdo</td>
        //                 </tr>
        //                 <tr>
        //                     <td>2</td>
        //                     <td>Jacob</td>
        //                     <td>Thornton</td>
        //                     <td>@fat</td>
        //                 </tr>
        //                 <tr>
        //                     <td>3</td>
        //                     <td colSpan={2}>Larry the Bird</td>
        //                     <td>@twitter</td>
        //                 </tr>
        //             </tbody>
        //         </Table>
        //     </div>
        // </div>
    );
};

export default ManageInventories;