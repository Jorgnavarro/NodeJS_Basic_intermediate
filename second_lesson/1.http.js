const http = require('node:http') // Protocolo http
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 1234
// de esta forma separamos el proceso de la creación del server,
// almacenamos la función en una variable y la pasamos al createServer(function)
const processRequest = (req, res) => {
  res.setHeader('content-Type', 'text/html; charset=utf-8')
  if (req.url === '/') {
    res.statusCode = 200
    res.end('<h1>Welcome to our first server response from NodeJS!!</h1>')
  } else if (req.url === '/dreamComeTrue.jpg') {
    res.setHeader('content-Type', 'image/jpg')

    fs.readFile('./images/newYork.jpg', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1>Internal server error!!</h1>')
      } else {
        res.setHeader('content-Type', 'image/jpg')
        res.end(data)
      }
    })
  } else if (req.url === '/contact') {
    res.statusCode = 200
    res.end('<h1>Contact</h1>')
  } else {
    res.statusCode = 404
    res.end('<h1>Page not found 404</h1>')
  }
  console.log('request received: ', req.url)
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`Server listening on port http://localhost:${desiredPort}`)
})
