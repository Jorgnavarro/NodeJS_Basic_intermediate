const express = require('express')

const app = express();

app.disable('x-powered-by')

app.get('/', (req, res) => {
    res.send('<h1>Another lesson with NodeJS</h1>')
})




const PORT = 3001

app.listen(PORT, ()=>{
    console.log(`Server connect on port http://localhost:${PORT}`)
})
