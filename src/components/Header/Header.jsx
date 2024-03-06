import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Row, Col, Button } from 'react-bootstrap';

const Header = ({ fullname }) => {
    return (
        <Navbar className='text-white' bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className="fw-bold">The King Movies</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className="me-3">Bienvenido, {fullname}</Navbar.Text>
                    <Link to="/">
                        <Button variant="outline-light">Salir</Button>
                    </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;