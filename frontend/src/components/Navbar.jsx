import React, { Component } from 'react'
import { Navbar, Form, FormControl, Button, Nav } from 'react-bootstrap';

class NavbarComponent extends Component {
    render() {
        return (
            <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">Exponential</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/dashboard">Dash</Nav.Link>
              <Nav.Link href="/add">Adicionar</Nav.Link>
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