const express = require('express')
const app = express()
// importar dotenv metodo config 


app.get('/', function (req, res) {
  res.send('Hello World')
  
})

app.get('/2', function (req, res) {
    res.send('Hello World (2)')
    
  })

  app.get('*', function (req, res) {
    res.send('not found')
    
  })

app.listen(3000)
console.log('corriendo por el puerto 3000')