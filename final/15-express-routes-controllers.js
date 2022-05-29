// Express Router with controllers
// See routes and controllers folder for running this code

const express = require('express')
const app = express()

const people = require('./routes/people-controller')
const auth = require('./routes/auth')

// static assets
app.use(express.static('./methods-public'))

// Parse form data - built in middleware
app.use(express.urlencoded({ extended: false }))

// Parse json (javascript example)
app.use(express.json())

// People router
app.use('/api/people', people)

// Auth router
app.use('/login', auth)

// Define server
app.listen(3000, () => {
    console.log("Server is listening on port 3000...")
})