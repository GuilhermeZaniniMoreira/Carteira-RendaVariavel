import React,  { Component } from 'react'
import {Typeahead} from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

class AutoComplete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            acoes : [
                'John',
                'Miles',
                'Charles',
                'Herbie',
              ],
          selected: ""
        };
    }

    render() {
        return (
            <Typeahead
                onChange={(selected) => {
                    this.setState({selected});
                }}
                options={this.state.acoes} id="acoes"
            />   
        )
    }
}

export default AutoComplete
