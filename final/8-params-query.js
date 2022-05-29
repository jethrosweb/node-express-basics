const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1> <a href="/api/products">products</a>')
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product
        return {id, name, image }
    })
    res.json(newProducts)
})

app.get('/api/products/:productID', (req, res) => {
    const { productID } = req.params
    const singleProduct = products.find(
        (product) => product.id === Number(productID)
    )
    if (!singleProduct) {
        return res.status(404).send('Product does not exist')
    }
    return res.json(singleProduct)
})

app.get('/api/v1/query', (req, res) => {
    const { search, limit } = req.query
    let sortedProduct = [...products]

    if (search) {
        sortedProduct = sortedProduct.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if (limit) {
        sortedProduct = sortedProduct.slice(0, Number(limit))
    }
    if (sortedProduct.length < 1) {
        // res.status(200).send('No product matches your search')
        return res.status(200).json({success:true, data:[]})
    }
    return res.status(200).json(sortedProduct)
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000...')
})