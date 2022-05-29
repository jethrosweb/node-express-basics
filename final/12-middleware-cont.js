const express = require('express')
const app = express()
const morgan = require('morgan')
const logger = require('./logger')
const authorise = require('./authorise')

// req => middleware => res

// 1. use vs route - route middleware shown below with app.use middleware commented out
// 2. options - our own / express / third party

// app.use([logger, authorise]) - own
// app.use(express.static('./public')) - express (static middleware)
// app.use(morgan('tiny')) - npm third party (for tiny info see docs)

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.get('/api/products', (req, res) => {
    res.send('Producs Page')
})

app.get('/api/items', [logger, authorise], (req, res) => {
    console.log(req.user)
    res.send('Items Page')
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000...")
})