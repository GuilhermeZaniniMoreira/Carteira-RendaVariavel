/* eslint-disable */
import React from 'react'
import { Table, Col, Row, Button, TableHeaderColumn } from 'react-bootstrap';
import MaterialIcon, {colorPalette} from 'material-icons-react';

export default props => {    

    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2
    });

    const renderRows = () => {
      const list = props.list
      const prices = props.prices
      const lastPrices = props.last
      const newArray = []
      let i = 0

      list.map(acao => {
        acao.price = prices[i]
        acao.last = parseFloat((lastPrices[i].lastClose).toFixed(2))

        var difference = (acao.price - acao.last)
        var percentage = ((difference / acao.last) * 100).toFixed(2)
        
        if (difference <= 0) {
          acao.percentage = percentage
        } else if (difference > 0) {
          acao.percentage = '+' + percentage
        }
        newArray.push(acao)
        i++
      })

      return newArray.map(acao => (
        <tr key={acao._id}>
            <td>{acao.ticker}</td>
            <td>{acao.quantity}</td>
            <td>{formatter.format(acao.price)}</td>
            <td style={{'backgroundColor': acao.percentage > 0 ? 'green' : 'red'}}>{acao.percentage + "%"}</td>
            <td>{formatter.format((acao.quantity * acao.price).toFixed(2))}</td>
            <td onClick={() => props.handleEdit(acao)}>
              <Button className="button" variant="success"><MaterialIcon icon="border_color" color={colorPalette.blue._50} /></Button>
            </td>
            <td onClick={() => props.handleDelete(acao)}>
              <Button className="button" variant="danger"><MaterialIcon icon="delete" color={colorPalette.indigo._50} /></Button>    
            </td>
            <td onClick={() => props.handleView(acao)}>
              <Button className="button" variant="primary"><MaterialIcon icon="open_in_new" color={colorPalette.cyan._50} /></Button>
            </td>
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
                <th>%</th>
                <th>Total</th>
                <th>Editar</th>
                <th>Excluir</th>
                <th>Visuzalizar</th>
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