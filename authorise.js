// Simple form:
// const authorise = (req, res, next) => {
//     console.log('authorise')
//     next()
// }


const authorise = (req, res, next) => {
    const { user } = req.query
    if (user === 'jethro') {
        req.user = {name: 'jethro', id: 3}
        next()
    } else {
        res.status(401).send('Unauthorised')
    }
}

module.exports = authorise