// Methods
// Use Postman to visualise rather than building front end

const express = require('express')
const app = express()
let { people } = require('./data')

// static assets
app.use(express.static('./methods-public'))

// Parse form data - built in middleware
app.use(express.urlencoded({ extended: false }))

// Parse json (javascript example)
app.use(express.json())

// GET - read data
app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data: people})
})

// POST (form example) - insert data
app.post('/login', (req, res) => {
    const { name } = req.body
    if (name) {
        return res.status(200).send(`Welcome ${name}`)
    } else {
        return res.status(404).send('Please provide credentials')
    }
})

// POST (javascript example) - insert data
app.post('/api/people', (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(400).json({ success: false, msg: 'Please provide name value' })
    } else {
        return res.status(201).json({ success: true, person: name })
    }
})

// POST (Postman example) - insert data
app.post('/api/postman/people', (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(400).json({ success: false, msg: 'Please provide name value' })
    } else {
        return res.status(201).json({ success: true, data: [...people, name] })
    }
})

// PUT - update data
app.put('/api/people/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body

    const person = people.find((person) => person.id === Number(id))
    if (!person) {
        return res.status(404).json({ success: false, msg: `No person with id ${id}` })
    } 

    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name
        }
        return person
    })

    res.status(200).json({ success: true, data: newPeople })
})

// DELETE - delete data
app.delete('/api/people/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if (!person) {
        return res.status(404).json({ success: false, msg: `No person with id ${req.params.id}` })
    } 

    const newPeople = people.filter((person) => person.id !== Number(req.params.id))
    return res.status(200). json({ success: true, data: newPeople })
})

// Define server
app.listen(3000, () => {
    console.log("Server is listening on port 3000...")
})