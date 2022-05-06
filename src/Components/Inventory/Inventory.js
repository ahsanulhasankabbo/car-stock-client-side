import React from 'react';
import useInventory from '../../hooks/useInventory'
import SingleInventory from '../SingleInventory/SingleInventory';
import './Inventory.css'

const Inventory = () => {
    const [inventorys, setInventorys] = useInventory();
    return (
        <div>
            <h1 className='text-center mt-3'>Our inventory</h1>
            <div className='inventory'>
                {
                    inventorys.map(inventory => <SingleInventory
                        key={inventory._id}
                        inventory={inventory}
                    ></SingleInventory>)
                }
            </div>
        </div>
    );
};

export default Inventory;