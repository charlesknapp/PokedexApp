import React, { Component } from 'react'
  const myStyle = {
    color: '#ffffff',
    backgroundColor: '#ce4a00',
    padding: '10px',
    fontSize: '20px',
    borderRadius: '7px',
    fontFamily: 'monospace'
  };

export default class Index extends Component {
  render() {
    const {pokemon} = this.props;
    console.log(pokemon)
    return (
        <div style={myStyle}>
            <p className="title">See All The Pokemon!</p>
            
            {/* pokemon  list */}
            <ul>
            {pokemon.map((pokemon, id) => {
            return (
            <li>
                <a href={`/pokemon/${id}`}> {pokemon.name}</a>
            </li>
            );
            })}
        </ul>

        </div>
    )
  }
}
