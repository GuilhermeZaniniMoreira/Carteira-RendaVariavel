import React, { Component } from 'react'

import Navbar from '../../components/Navbar'
import { Container, Col, Row, Form, Button } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

import api from '../../services/api'

class Add extends Component {
    state = {
        ticker: "",
        type: "Ação",
        quantity: 0,
        user_id: Object,
        date: Date.now(),
        error: ""
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
        const { ticker, type, quantity, user_id, date } = this.state

       const ativo = api.get('/yahoo/check', {
            params: {
                ticker: ticker
            }
        })

        Promise.resolve(ativo).then(async (value) => {
            if (value.data.status === 200) {
                if (!ticker || !type || !quantity || !date) {
                    this.setState({ error: "Preencha todos os dados para se cadastrar" });
                } else {
                    try {
                        await api.post("/stock/add", { ticker, type, quantity, user_id, date });
                        this.props.history.push("/dashboard");
                    } catch (err) {
                        console.log(err);
                        this.setState({ error: "Ocorreu um erro ao registrar." });
                    }
                }
            } else {
                this.setState({ error: `Não possuímos dados de ${ticker}` });
            }
        });
    };

    handleChange(date) {
        console.log(date.getDay())
        this.setState({
          date: date
        });
    };

    render() {
        return (
            <div>
                <Navbar />

                {this.state.error && <p>{this.state.error}</p>}

                    <Container>
                        <Row>
                            <Col sm></Col>
                            <Col sm>
                            <Form>
                                <Form.Group controlId="formBasic">
                                    
                                    <Form.Label>Ticker</Form.Label>
                                    <Form.Control type="ticker"
                                    placeholder="Ticker"
                                    onChange={e => this.setState({ ticker: e.target.value })} />

                                    <Form.Group controlId="formGridState">
                                        <Form.Label>Ativo</Form.Label>
                                        <Form.Control as="select"
                                        onChange={e => this.setState({ type: e.target.value })}>
                                            <option>Ação</option>
                                            <option>Fundo Imobiliário</option>
                                            <option>ETF</option>
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Label>Quantiade</Form.Label>
                                    <Form.Control type="quatity"
                                    placeholder="Quantidade"
                                    onChange={e => this.setState({ quantity: e.target.value })} />

                                    <Form.Label>Data da compra</Form.Label>
                                    <DatePicker
                                        dateFormat="dd/MM/yyyy"
                                        selected={this.state.date}
                                        onChange={e => this.setState({ date: e })} />

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