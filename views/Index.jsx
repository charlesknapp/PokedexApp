import React, { Component } from 'react'

// Base Styling
  const myStyle = {
        color: '#ffffff',
        background: 'orange',
        padding: '8px',
        fontSize: '20px',
        borderRadius: '7px',
        fontFamily: 'monospace',
        textAlign: 'center',
        maxWidth: '968px',
        margin: '0 auto',
    };
// List Styling
  const listingStyle = {
        listStyle: 'none',
        padding: '30px',
        borderRadius: '4px',
        textAlign: 'center'
    };
// ListItem Styling
    const listItemStyle = {
        padding: '10px 0 10px 0',
        textalign: 'center'
    };
    
export default class Index extends Component {
  render() {
    const {pokemon} = this.props;
    console.log(pokemon)
    return (
        <div style={myStyle}>
                <p className="title"><a href="/"><img src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png" alt="PokeDex Logo" /></a></p>
                <ul style={listingStyle}>
                    {pokemon.map((pokemon, id) => {
                    return (
                        <li style={listItemStyle}>
                            <a href={`/pokemon/${id}`}> {pokemon.name}</a>
                        </li>
                    );
                })}
                </ul>
        </div>
    )
  }
}
