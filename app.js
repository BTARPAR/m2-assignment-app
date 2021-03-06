const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const ROUTES = require('./routes')
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(bodyParser.urlencoded({extend: true}))
app.use('/', ROUTES)


module.exports = app
