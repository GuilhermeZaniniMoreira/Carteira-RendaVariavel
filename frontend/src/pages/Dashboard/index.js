import React, { Component } from 'react'
import {RemoveScroll} from 'react-remove-scroll';

import NavbarComponent from '../../components/Navbar'
import Chart from '../../components/Chart'
import News from '../../components/news/News'

class Dashboard extends Component {
    render() {
        return (
        
                <div>
                    <div>
                        <NavbarComponent/>
                    </div>
                    <div className="chart">
                        <Chart/>
                    </div>
                    <div>
                        <News/>
                    </div>
                </div>   
        )
    }
}

export default Dashboard