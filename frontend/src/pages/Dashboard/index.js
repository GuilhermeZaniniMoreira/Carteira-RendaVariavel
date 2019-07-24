import React, { Component } from 'react'

import NavbarComponent from '../../components/Navbar'
import Chart from '../../components/Chart'
//import ReactList from 'react-list'
import StockTable from '../../components/StockTable'

import api from "../../services/api";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userId: "",
          list: []
        };

        this.renderItem = this.renderItem.bind(this);
    }

    componentDidMount() {    
        api.get(`/me`)
        .then(res => {
          const userId = res.data.user._id;
          this.setState({ userId: userId });
        })

        api.get(`/stock/list`, {
            params: {
                user_id: this.state.userId
            }
        }).then(res => {
            const data = res.data.stocks
            const arrayStocksName = []
            data.forEach(element => {
                arrayStocksName.push(element)
            });
            this.setState({ list: arrayStocksName })
        })
    }

    renderItem(index, key) {
        return <div key={key}>{this.state.list[index]}</div>;
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
                        list={this.state.list} />

                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard