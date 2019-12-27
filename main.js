const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (request, response, next) => {
    response.sendFile(`${__dirname}/views/index.html`)
})
app.get('/funfacts', (request, response, next) => {
    response.sendFile(`${__dirname}/views/funfacts.html`)
})
app.get('/contact', (request, response, next) => {
    response.sendFile(`${__dirname}/views/contact.html`)
})
app.get('/biography', (request, response, next) => {
    response.sendFile(`${__dirname}/views/bio.html`)
})

app.listen(3000, () => {
    console.log('Server up and running!')
})