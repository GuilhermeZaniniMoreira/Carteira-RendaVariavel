/* eslint-disable */
import React from 'react'
import { Table, Col, Row } from 'react-bootstrap';
import MaterialIcon, {colorPalette} from 'material-icons-react';

export default props => {    

    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2
    });

    const onHover = () => {
      console.log('onHover')
    }

    const handleClick = () => {
      console.log('handleClick')
    }

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
        console.log(difference)
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
            <td>
              <div className="font-icon-wrapper" onClick={handleClick} onMouseOver={onHover}>
                <MaterialIcon icon="border_color" color={colorPalette.blue._100} />
              </div>
              <div className="font-icon-wrapper" onClick={handleClick}>
                <MaterialIcon icon="delete" color={colorPalette.indigo._300} />
              </div>
              <div className="font-icon-wrapper" onClick={handleClick}>
                <MaterialIcon icon="open_in_new" color={colorPalette.cyan._200} />
              </div>
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
                <th>Ações</th>
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