import React from 'react';
import { Link } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';
import SingleInventory from '../SingleInventory/SingleInventory';
import './Home.css'

const Home = () => {
    const [inventorys, setInventorys] = useInventory();
    return (
        <div>
            <div className='banner'>

            </div>
            <div>
                <h1 className='text-center mt-3'>Our inventory</h1>
                <div className='inventory'>
                    {
                        inventorys.slice(0, 6).map(inventory => <SingleInventory
                            key={inventory._id}
                            inventory={inventory}
                        ></SingleInventory>)
                    }
                </div>
            </div>
            <Link to='/manageinventories'><button>Manage inventoties</button></Link>
        </div>
    );
};

export default Home;