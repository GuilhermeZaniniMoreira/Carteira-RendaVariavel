/* eslint-disable */
import React, { Component } from 'react'
import NavbarComponent from '../../components/Navbar'
import Chart from '../../components/Chart'
//import ReactList from 'react-list'
import StockTable from '../../components/StockTable'

import api from "../../services/api";
import axios from 'axios'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userId: "",
          list: [],
          prices: [],
          lastPrices: []
        };
    }

    handleEdit(stock) {
        window.open(`/edit/${stock.ticker}`)
    }

    handleDelete(stock) {
        window.open(`/edit/${stock.ticker}`)
    }

    handleView(stock) {
        window.open(`/edit/${stock.ticker}`)
    }

    componentDidMount = async e => {
        await api.get(`/me`)
        .then(res => {
          const userId = res.data.user._id;
          this.setState({ userId: userId });
        })

        await api.get(`/stock/list`, {
            params: {
                user_id: this.state.userId
            }
        }).then(async res => {
            const data = res.data.stocks

            const promisesLast = data.map(acao =>
                api.get(`/yahoo/last`, {
                    params: {
                        ticker: acao.ticker
                    }
                })
            );

            const resultsPrices = await axios.all(promisesLast)
            const lastPrices = resultsPrices.map(acao => acao.data);

            const promises = data.map(acao =>
                api.get(`/yahoo/price`, {
                    params: {
                        ticker: acao.ticker
                    }
                })
            );

            const results = await axios.all(promises)
            const prices = results.map(acao => acao.data.price);
            
            this.handleState(data, prices, lastPrices)
            
        });
    }

    handleState(data, arrPrice, lastPrices) {
        this.setState({...this.setState, list: data, prices: arrPrice, lastPrices: lastPrices})
    }

    render() {
        return (
            <div>
                <div>
                    <div>
                        <NavbarComponent/>
                    </div>
                    <div>
                        <Chart/>
                    </div>
                    <div style={{overflow: 'auto', maxHeight: 400}}>
                    <StockTable
                        list={this.state.list}
                        prices={this.state.prices}
                        last={this.state.lastPrices}
                        handleEdit={this.handleEdit}
                        handleDelete={this.handleDelete}
                        handleView={this.handleView} />

                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard