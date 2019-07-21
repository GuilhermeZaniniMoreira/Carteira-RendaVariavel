import React, { Component } from 'react'
import {RemoveScroll} from 'react-remove-scroll';

import NavbarComponent from '../../components/Navbar'
import Chart from '../../components/Chart'

class Dashboard extends Component {
    render() {
        return (
            <RemoveScroll>
                <div>
                    <div>
                        <NavbarComponent/>
                    </div>
                    <div className="chart">
                        <Chart/>
                    </div>
                </div>
            </RemoveScroll>
        )
    }
}

export default Dashboard