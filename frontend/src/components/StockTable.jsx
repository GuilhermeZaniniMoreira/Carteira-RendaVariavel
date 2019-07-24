import React from 'react'
import { Table, Col, Row } from 'react-bootstrap';

import api from '../services/api'

export default props => {

    const renderRows = () => {
      const list = props.list || []
      
      return list.map(acao => (
          <tr key={acao._id}>
              <td>{acao.ticker}</td>
              <td>{acao.quantity}</td>
              <td>{acao.type}</td>
          </tr>
      ))
    }

    return (
      <Col>
        <Row>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Ação</th>
                <th>Quantidade</th>
                <th>R$</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
                  {renderRows()}
              </tbody>
            </Table>
          </Row>
        </Col>
    )
}