const express = require('express')
const app = express()
const logger = require('./logger')
const authorise = require('./authorise')

// req => middleware => res

app.use([logger, authorise]) 

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.get('/api/products', (req, res) => {
    res.send('Producs Page')
})

app.get('/api/items', (req, res) => {
    console.log(req.user)
    res.send('Items Page')
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000...")
})