import React from 'react'
import { Navbar } from 'react-bootstrap'

/* Component which shows the main app logo */
export const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Brand href="/">Chirp</Navbar.Brand>
        </Navbar>
    )
}
