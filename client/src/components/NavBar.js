import React, { Component } from 'react'
import { Navbar, Nav} from 'react-bootstrap'

export default class NavBar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Brand href="#home">Chirp</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#top">Top Posts</Nav.Link>
                        <Nav.Link href="#new">New Posts</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#login">Log In</Nav.Link>
                        <Nav.Link href="#register">Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
