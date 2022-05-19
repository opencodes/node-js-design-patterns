const express = require('express')
const logger = require('./logger')
const app = express()
const port = 3000
// const logger = new Logger()

app.get('/', (req, res) => {
    logger.log('Hello World!');
    res.send('Hello World!')
})

app.get('/trail', (req, res) => {
    res.send(logger.trail())
})


app.listen(port, () => {
    logger.log(`Example app listening on port ${port}`);
    console.log(`Example app listening on port ${port}`)
})