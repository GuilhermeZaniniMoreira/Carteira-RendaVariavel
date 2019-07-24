import React, { Component } from 'react'

import Navbar from '../../components/Navbar'
import { Container, Col, Row, Form, Button } from 'react-bootstrap'
import AutoComplete from '../../components/AutoComplete'

import api from '../../services/api'

class Add extends Component {
    state = {
        ticker: "",
        type: "",
        quantity: 0,
        user_id: Object
    }

    componentDidMount = async e => {
        api.get(`/me`)
        .then(res => {
          const userId = res.data.user._id;
          this.setState({ user_id : {user_id : userId} });
        })
    }

    handleAdd = async e => {
        e.preventDefault();
        const { ticker, type, quantity, user_id } = this.state;
        console.log(this.state)
        if (!ticker || !type || !quantity) {
          this.setState({ error: "Preencha todos os dados para se cadastrar" });
        } else {
          try {
            await api.post("/stock/add", { ticker, type, quantity, user_id });
            this.props.history.push("/");
          } catch (err) {
            console.log(err);
            this.setState({ error: "Ocorreu um erro ao registrar." });
          }
        }
    };

    render() {
        return (
            <div>
                <Navbar />
                    <Container>
                        <Row>
                            <Col sm></Col>
                            <Col sm>
                            <Form>
                                <AutoComplete />
                                <Form.Group controlId="formBasic">

                                    <Form.Label>Ticker</Form.Label>
                                    <Form.Control type="ticker"
                                    placeholder="Ticker"
                                    onChange={e => this.setState({ ticker: e.target.value })} />

                                    <Form.Label>Tipo</Form.Label>
                                    <Form.Control type="type"
                                    placeholder="Quantidade"
                                    onChange={e => this.setState({ type: e.target.value })} />

                                    <Form.Label>Quantiade</Form.Label>
                                    <Form.Control type="quatity"
                                    placeholder="Quantidade"
                                    onChange={e => this.setState({ quantity: e.target.value })} />

                                    {console.log(this.state)}

                                </Form.Group>
                                <Button variant="primary" type="submit" onClick={this.handleAdd}>
                                    Adicionar
                                    
                                </Button>
                                </Form>
                            </Col>
                            <Col sm></Col>
                        </Row>
                    </Container> />
            </div>
        )
    }

}

export default Add