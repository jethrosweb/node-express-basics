const express = require('express')
const path = require('path')
const app = express()

// setup static and middleware
app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './navbar-app/index.html'))
})

app.all('*', () => {
    res.status(404).send('resource not found')
})

app.listen(3000, () => {
    console.log('server is listening on port 3000...')
})