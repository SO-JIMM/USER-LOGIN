const express = require('express')
const exphbs  = require('express-handlebars')
const path = require('path')

const app = express()

const port = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname, './public')

app.engine('.hbs', exphbs({extname: '.hbs'}))
app.set('view engine', 'hbs')
app.use(express.json())
app.use(express.static(publicDirectoryPath))

app.get('/', (req, res) => {
  res.render('home', {title: 'Home'})
})

app.listen(port, () => {
  console.log('Server is up on port ' + port)
})