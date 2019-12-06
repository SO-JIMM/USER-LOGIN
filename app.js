const express = require('express')
const exphbs  = require('express-handlebars')
const path = require('path')

const app = express()
require('./mongoose/mongoose')
const port = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname, './public')

app.engine('.hbs', exphbs({extname: '.hbs'}))
app.set('view engine', 'hbs')
app.use(express.json())
app.use(express.static(publicDirectoryPath))

app.get('/', (req, res) => {
  res.render('home', {title: 'Home'})
})

app.get('/create-user', (req, res) => {
  res.render('create-user', {title: 'Create User'})
})

app.get('/login', (req, res) => {
  res.render('login', {title: 'Login'})
})

app.listen(port, () => {
  console.log('Server is up on port ' + port)
})