const express = require('express')
const app = express()
const logger = require('./logger')

// req => middleware => res

app.use('/api', logger) // delete path from function to use for every path

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
    res.send('Items Page')
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000...")
})