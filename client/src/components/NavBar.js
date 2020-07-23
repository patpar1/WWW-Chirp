import React from 'react'
import { Navbar } from 'react-bootstrap'

export const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Brand href="/">Chirp</Navbar.Brand>
        </Navbar>
    )
}
