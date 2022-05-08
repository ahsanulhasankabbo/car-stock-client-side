import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';
import Address from '../Address/Address';
import Loading from '../Loading/Loading';
import Services from '../Services/Services';
import SingleInventory from '../SingleInventory/SingleInventory';
import './Home.css'

const Home = () => {
    // const [inventorys, setInventorys] = useInventory();
    const [loading, setLoading] = useState(false);
    const [inventorys, setInventorys] = useState([]);
    useEffect(() => {
        const loadData = async () => {
            setLoading(true)
            await fetch('https://fast-refuge-28086.herokuapp.com/inventory')
                .then(res => res.json())
                .then(data => setInventorys(data));
                setLoading(false);
        }
        loadData();

    }, [])
    return (
        <div>
            <div className='banner'>
                <div className='banner-info'>
                    <h1>Car Stock</h1>
                    <p>Explore the vast model range of new cars by widely know manufactures on our website.</p>
                    <Link to='/manageinventories'><button>Explore more</button></Link>
                </div>
            </div>
            <div>
                <h1 className='text-center mt-3'>Our inventory</h1>
                {
                    loading ? <Loading></Loading> : 
                    <div className='inventory'>
                    {
                        inventorys.slice(0, 6).map(inventory => <SingleInventory
                            key={inventory._id}
                            inventory={inventory}
                        ></SingleInventory>)
                    }
                </div>
                }
            </div>
            <Link to='/manageinventories'><button className='manage-button'>Manage inventoties</button></Link>
            <div>
                <Services></Services>
            </div>
            <div className='mb-5'>
                <Address></Address>
            </div>
        </div>
    );
};

export default Home;