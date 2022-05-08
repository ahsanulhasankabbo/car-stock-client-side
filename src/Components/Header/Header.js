import React from 'react';
import './Header.css'
import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">Car Stock</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user && <>
                                    {/* <Nav.Link href="/manageitems">Manage items</Nav.Link> */}
                                    <Nav.Link href="/additems">Add items</Nav.Link>
                                    <Nav.Link eventKey={2} href="/myitems">
                                        My items
                                    </Nav.Link>
                                </>
                            }
                            <Nav.Link href="/blogs">Blogs</Nav.Link>
                            {
                                user ?
                                    <Nav.Link onClick={handleSignOut}>Logout</Nav.Link> :
                                    <Nav.Link href="/login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;