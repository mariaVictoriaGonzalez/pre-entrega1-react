import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/logo.png'
import './NavBar.css'
import { CartWidget } from './CartWidget';

export const NavBar = () => {
    return (
        <Navbar bg="light" data-bs-theme="light" collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home"><img src= {Logo} className='logo' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#tops">Tops</Nav.Link>
                        <Nav.Link href="#pantalones">Pantalones</Nav.Link>
                        <Nav.Link href="#faldas">Faldas</Nav.Link>
                        <Nav.Link href="#blusas">Bluzas</Nav.Link>
                        <Nav.Link href="#abrigos">Abrigos</Nav.Link>
                    </Nav>
                    <Nav>
                        <CartWidget/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}