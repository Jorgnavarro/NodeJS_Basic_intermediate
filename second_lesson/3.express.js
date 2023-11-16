const dittoJson = require('./pokemon/ditto.json')
const express = require('express')

const app = express()
// para desactivar el header que indica la tecnología que usamos, se pueden presentar vulneraciones de seguridad.
app.disable('x-powered-by')

const PORT = process.env.PORT ?? 1234

app.get('/pokemon/ditto', (req, res) => {
  res.json(dittoJson)
})

app.post('/pokemon', (req, res) => {
  let body = ''
  // escuchar evento data
  req.on('data', chunk => {
    body += chunk.toString()
  })
  req.on('end', () => {
    const data = JSON.parse(body)
    data.timestamp = Date.now()
    res.status(201).json(data)
  })
})

app.use((use, res) => {
  res.status(404).send('<h1>Page not found 404</h1>')
})

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
