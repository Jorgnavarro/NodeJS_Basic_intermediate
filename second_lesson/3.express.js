const dittoJson = require('./pokemon/ditto.json')
const PORT = process.env.PORT ?? 1234
const express = require('express')

const app = express()
// para desactivar el header que indica la tecnología que usamos, se pueden presentar vulneraciones de seguridad.
app.disable('x-powered-by')

app.use(express.json())
// todo el código de abajo comentado se puede resumir en la línea 9, la magía de express

// app.use((req, res, next) => {
//   console.log('Mi primer middleware')
//   // trackear la request a la base de datos
//   // resvisar si el usuario tiene cookies
//   if (req.method !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next()

//   // solo llegan request que son POST y que tienen el header Content-Type: application/json
//   let body = ''
//   // escuchar evento data
//   req.on('data', chunk => {
//     body += chunk.toString()
//   })
//   req.on('end', () => {
//     const data = JSON.parse(body)
//     data.timestamp = Date.now()
//     // mutar la request (req) y meter la information en el req.body
//     req.body = data
//     next()
//   })
// })

app.get('/pokemon/ditto', (req, res) => {
  res.json(dittoJson)
})

app.post('/pokemon', (req, res) => {
  // let body = ''
  // escuchar evento data
  // req.on('data', chunk => {
  //   body += chunk.toString()
  // })
  // req.on('end', () => {
  //   const data = JSON.parse(body)
  //   data.timestamp = Date.now()
  //   res.status(201).json(data)
  // })
  // lo que está comentado arriba era la estructura del código sin el middleware, al agregarlo
  // trabajaremos solamente con el req.body que contiene la información que enviaremos como respuesta
  // con el req.body deberíamos de guardar en bbdd
  res.status(201).json(req.body)
})
// middleware
app.use((use, res) => {
  res.status(404).send('<h1>Page not found 404</h1>')
})

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
