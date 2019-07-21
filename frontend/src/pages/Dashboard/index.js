import React, { Component } from 'react'

import NavbarComponent from '../../components/Navbar'
import Chart from '../../components/Chart'
import News from '../../components/news/News'

import api from "../../services/api";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userId: ""
        };
    }
    componentDidMount = async e => {
        api.get(`/me`)
        .then(res => {
          const userId = res.data.user._id;
          this.setState({ userId: userId });
        })
      }

    render() {
        console.log(this.state.userId)
        return (
            <div>
                <div>
                    <div>
                        <NavbarComponent/>
                    </div>
                    <div>
                        <Chart/>
                    </div>
                    <div>
                        <News/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard