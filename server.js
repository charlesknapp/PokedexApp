// ENVIRONMENT INITIALIZATION INFO //
const PORT = 3000;
require('dotenv').config();
const mongoose = require('mongoose');
const express = require("express")
const app = express()
const Pokemon  = require("./models/pokemon")

//include the method-override package place this where you instructor places it
const methodOverride = require('method-override');
//after app has been defined
//use methodOverride.  We'll be adding a query parameter to our delete form named _method
app.use(methodOverride('_method'));

app.engine('jsx', require('express-react-views').createEngine())
app.set('view engine', 'jsx')
app.use(express.static('styles'))

// Needed to use req.body
app.use(express.urlencoded({ extended: false }))

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.once('open', () => {
    console.log("connected to MongoDB");
})

// INDEX ROUTING //
app.get("/", (req, res) => {
    //find all fruits
    Pokemon.find({}, (error, allPokemon)=>{
      res.render('Index', {
        Pokemon: allPokemon
      })
    }) 
  });

// NEW ROUTING //
app.get("/new", (req, res) => {
    res.render('New')
});

// POST ROUTING //
app.post('/pokemon', (req, res) => {
    Pokemon.create(req.body, (error, createdPokemon) => {
        res.redirect("/");
    });
})

// SHOW ROUTING //
app.get( '/pokemon/:id', (req, res) => {
    Pokemon.findById(req.params.id, (err, foundPokemon) => {
        res.render('Show', {
            pokemon: foundPokemon
        })
    })
});

// EDITING ROUTING //
app.get('/pokemon/:id/edit', (req, res)=> {
    // finding pokemon by ID
    // render an edit form
    // pass in the pokemon data "payload"
    Pokemon.findById(req.params.id, (err, foundPokemon) => {
        res.render('Edit', {
            pokemon: foundPokemon
        })
    })
})
// UPDATE ROUTING //
app.put('/pokemon/:id', (req, res) => {
    // find the pokemon by ID and update
    // redirect to the pokemon's show page
    Pokemon.findByIdAndUpdate(req.params.id, req.body, (err, updatedPokemon) => {
        console.log(updatedPokemon)
        res.redirect(`/pokemon/${req.params.id}`)
    })
})

// DELETE ROUTING //
app.delete('/pokemon/:id', (req, res)=>{
    Pokemon.findByIdAndRemove(req.params.id, (err, deletedPokemon) => {
        res.redirect('/')
    })
});

// APP LISTENING PORT //
app.listen( 3000, () => {
    console.log("listening")
});