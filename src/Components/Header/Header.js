import React from 'react';
import './Header.css'
import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'

const Header = () => {
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
                            <Nav.Link href="/signup">SignUp</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;