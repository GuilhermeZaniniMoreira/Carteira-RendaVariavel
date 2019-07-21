import React, { Component } from 'react'
import { Container, Col, Row, Form, Button } from 'react-bootstrap'
import AutoComplete from './AutoComplete'

class FormAtivos extends Component {
    render() {
        return (
            <Container>
            <Row>
                <Col sm></Col>
                <Col sm>
                <Form>
                    <AutoComplete />
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Quantiade</Form.Label>
                        <Form.Control type="quatity" placeholder="Quantidade" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Adicionar
                    </Button>
                    </Form>
                </Col>
                <Col sm></Col>
            </Row>
          </Container>
        )
    }
}

export default FormAtivos