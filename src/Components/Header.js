import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">User Registration</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/Components/Home">SignUp</Nav.Link>
                        <Nav.Link href="/Components/Login">Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;