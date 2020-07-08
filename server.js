const express = require('express')
const path = require('path')
const bodyPraser = require('body-parser')
const api = require('./server/routes/api')

const app = express()

app.use(bodyPraser.json())
app.use(bodyPraser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.use('/', api)

const port = 1337 //because why not
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})