import React, { Component } from 'react'

// HTML Styling
const bodyStyling = {
    margin: '0 auto',
    textAlign: 'center',
    backgroundImage: 'url(https://images.wallpapersden.com/image/download/pokemon-pikachu-art_a25tbW6UmZqaraWkpJRmbmdlrWZlbWU.jpg)',
    marginTop: '1%',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden'
};
const navStyling = {
    textAlign: 'center',
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    alignContent: 'center',
    padding: '10px',
    backgroundColor: 'orange',
    width: '1400px',
    margin: '0 auto',
    marginBottom: '1%',
    borderRadius: '7px',
    padding: '0px',
    paddingTop: '8px',
    paddingBottom: '8px',
  }
const htmlStyling = {
    margin: '0 auto',
    textAlign: 'center',
    backgroundImage: 'url(https://images.wallpapersden.com/image/download/pokemon-pikachu-art_a25tbW6UmZqaraWkpJRmbmdlrWZlbWU.jpg)',
    width: '100vw',
    height: '100vh'
};
// Base Styling
  const myStyle = {
        color: '#ffffff',
        background: 'orange',
        padding: '8px',
        fontSize: '20px',
        borderRadius: '7px',
        fontFamily: 'monospace',
        textAlign: 'center',
        maxWidth: '1400px',
        margin: '0 auto',
    };
// List Styling
  const listingStyle = {
        listStyle: 'none',
        borderRadius: '4px',
        textAlign: 'center',
        textDecoration: 'none'
    };
// ListItem Styling
    const listItemStyle = {
        textalign: 'center',
        textDecoration: 'none'
    };

export default class Edit extends Component {
  render() {
    const { pokemon } = this.props;
    console.log(this.props.Pokemon);
    return (
      <div>
        <body style={bodyStyling}>
        <nav style={navStyling}>
                <ul style={listingStyle}>
                    <li style={listItemStyle}><a href="/" className="newButton"> Go Back</a></li>
                </ul>
            </nav>
        <h1 className="title">Edit Pokemon</h1>
        <form action={`/pokemon/${pokemon._id}?_method=PUT`} method="POST">
            Name: <input type="text" name="name" defaultValue={pokemon.name} /><br />
            Image: <input type="text" name="img" defaultValue={pokemon.img} /><br />
            <input type="submit" value="Submit Changes" />
        </form>
        </body>
      </div>
    )
  }
}
