import React, { Component } from 'react'
import { Navbar, Form, FormControl, Button, Nav } from 'react-bootstrap';
import { logout } from '../services/auth';

class NavbarComponent extends Component {

    handleSignout = async e => {
      console.log("wafa")
      e.preventDefault();
      logout()
      this.props.history.push("/");
    }

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
            <Nav.Link href="/">Sair</Nav.Link>

          </Navbar>
        )
    }
}

export default NavbarComponent