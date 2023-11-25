//const http = require("node:http");

const express = require('express');
const app = express ();

let notes = [
    {
        id: 1,
        content: "HTML is easy",
        date: "2019-05-30T17:30:31.098Z",
        important: true
    },
    {
        id: 2,
        content: "Browser can execute only Javascript",
        date: "2019-05-30T18:39:34.091Z",
        important: false
    },
    {
        id: 3,
        content: "GET and POST are the most important methods of HTTP protocol",
        date: "2019-05-30T19:20:14.298Z",
        important: true
    }
]


// const app = http.createServer((req, res) => {
//     res.writeHead(200, { 'content-Type': 'application/json' })
// we need to convert notes to JSON text chain. 
//     res.end(JSON.stringify(notes))
// })

app.get('/', (req, res) => {
    res.send('<h1>Using express from NodeJS</h1>');
})

app.get('/api/notes', (req, res) => {
    res.json(notes);
})

app.get('/api/notes/:id', (req, res) =>  {
    const id = Number(req.params.id);
    const note = notes.find(note => 
        //solución para debuguear, en este caso estabamos comparando nos valores de diferentes tipos de datos, por ende no nos estaba dando, para descubrir el tipo de dato del parámetro usamos typeof y nos guiamos
        //console.log(note.id, typeof note.id, id, typeof id, note.id===id);
        note.id === id
    )
    if(note === undefined){
        res.status(404)
        res.send(`<h1>The note with id: ${id}, not exist in our database.</h1>`)
    }else{
        res.json(note);
    }
})

app.delete('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id);
    notes = notes.filter(note => note.id !== id)
    res.status(204).end()
})

const PORT = 3001;

app.listen(PORT)

console.log(`Server running on port http://localhost:${PORT}`);