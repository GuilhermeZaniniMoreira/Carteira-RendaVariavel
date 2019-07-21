import React, { Component } from 'react'
import { Navbar, Form, FormControl, Button, Nav, NavDropdown } from 'react-bootstrap';


class NavbarComponent extends Component {
    render() {
        return (
            <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">Exponential</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-primary">Search</Button>
            </Form>
            <Nav.Link href="#logout">Sair</Nav.Link>
          </Navbar>
        )
    }
}

export default NavbarComponent