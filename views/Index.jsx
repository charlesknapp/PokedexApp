import React, { Component } from 'react'

export default class Index extends Component {
  render() {
    console.log(this.props.pokemon);
    const {pokemon} = this.props;
    return (
      <div>
        <h1 className="title">Index Route</h1>
      </div>
    )
  }
}

module.exports = Index
