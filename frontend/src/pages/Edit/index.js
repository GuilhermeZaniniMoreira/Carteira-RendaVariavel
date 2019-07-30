import React, { Component } from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap'
import Navbar from '../../components/Navbar'

import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

import api from '../../services/api'

export default class Edit extends Component {

  state = {
    ticker: this.props.match.params.ticker,
    quantity: "",
    type: "",
    date: Date.now()
  }

  componentDidMount = async e => {
  
    await api.get(`/stock/singleStock`, {
        params: {
          ticker: this.props.match.params.ticker
        }
      }).then(async res => {
        const data = res.data.stock[0]
        this.setState({ quantity: data.quantity, type: data.type });
      })
  }
  
  render() {
    return (
      <div>
        <Navbar />
        {this.state.error && <p>{this.state.error}</p>}
          <Container>
            <Row>
              <Col sm>
                <Form>
                  <Form.Group controlId="formBasic">            
                    <Form.Label>Ticker</Form.Label>
                    <Form.Control type="ticker"
                    disabled
                    placeholder={this.state.ticker}
                    onChange={e => this.setState({ ticker: e.target.value.toUpperCase() })} />

                  <Form.Group controlId="formGridState">
                      <Form.Label>Ativo</Form.Label>
                      <Form.Control as="select"
                      placeholder={this.state.type}
                      value={this.state.type}
                      onChange={e => this.setState({ type: e.target.value })}>
                          <option>Ação</option>
                          <option>Fundo Imobiliário</option>
                          <option>ETF</option>
                      </Form.Control>
                  </Form.Group>

                  <Form.Label>Quantiade</Form.Label>
                  <Form.Control type="quatity"
                  placeholder={"Quantidade"}
                  value={this.state.quantity}
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
            </Row>
          </Container>
        </div>
    )
  }
}
