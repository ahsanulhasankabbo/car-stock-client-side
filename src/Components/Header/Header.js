import React from 'react';
import './Header.css'
import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <div>
            <>
                <Navbar className='navbar' variant="dark">
                    <Container>
                        <Navbar.Brand href="/home">Car Stock</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/inventory">Inventory</Nav.Link>
                            <Nav.Link href="/blogs">Blogs</Nav.Link>
                           
                            {
                                user ? 
                                <Nav.Link onClick={handleSignOut}>Logout</Nav.Link> :
                                <Nav.Link href="/signup">SignUp</Nav.Link>
                            }
                        </Nav>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;