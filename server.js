const express = require('express')

// Setup our Express app
const app = express()

const PORT = 8080 

const {createEngine} = require('jsx-view-engine')

app.set('view engine', 'jsx')

app.engine('jsx', createEngine())


//Homepage
app.get('/', (req, res) => {

    res.send(`
    <h1> Main Page <h1>`)
})


// Two views
app.get('/index', (req, res) => {

    res.render('Index', {name: "Hashim"})
})
app.get('/show', (req, res) => {

    res.render('Show', {school: "PerScholas"})
})





app.get('/3', (req, res) => {

    res.send(`
    <h1> Fritz is a nice IT support guy<h1>`)
})
app.get('/4', (req, res) => {

    res.send(`
    <h1> Franklin is a good guy <h1>`)
})
app.get('/5', (req, res) => {

    res.send(`
    <h1> Oussama thanks for the help<h1>`)
})
app.get('/6', (req, res) => {

    res.send(`
    <h1> Jade thanks for teaching us<h1>`)
})
app.get('/7', (req, res) => {

    res.send(`
    <h1> Hai is smart <h1>`)
})
app.get('/8', (req, res) => {

    res.send(`
    <h1> Dana is smart and nice too <h1>`)
})
app.get('/9', (req, res) => {

    res.send(`
    <h1> Enjoy software engineeering <h1>`)
})

app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})