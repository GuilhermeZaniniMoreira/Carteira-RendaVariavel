import React, { Component } from 'react';

// import { Container } from './styles';

export default class Edit extends Component {
  
  render() {
    const ticker = this.props.match.params.ticker

    return (
      <h1>{ticker}</h1>
    )
  }
}
