import React from 'react';
import './Header.css'
import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home">Car Stock</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user && <>
                                    {/* <Nav.Link href="/manageitems">Manage items</Nav.Link> */}
                                    <Nav.Link as={Link} to="/additems">Add items</Nav.Link>
                                    <Nav.Link as={Link} to="/myitems">
                                        My items
                                    </Nav.Link>
                                </>
                            }
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                            {
                                user ?
                                    <Nav.Link as={Link} to='/login' onClick={handleSignOut}>Logout</Nav.Link> :
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;