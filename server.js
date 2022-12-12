const express = require("express");
const app = express();
const fruits = require("./models/pokemon");

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())

// Array to /fruits route
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
});

//Show route
app.get( '/pokemon/:id', (req, res) => {
    // res.send(fruits[req.params.id])
    res.render('Show', {
        pokemon: pokemon[req.params.id]
    })
});

// App listening
app.listen( 3000, () => {
    console.log("listening")
});