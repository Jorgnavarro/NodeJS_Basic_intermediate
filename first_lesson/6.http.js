const http = require('node:http');
const {findAvailablePort} = require('./7.free-port');

const server = http.createServer((req, res)=>{
    console.log('request received');
    res.end('Our first message from the server!!!')
})

findAvailablePort(3000).then(port=>{
    server.listen(port, ()=>{
        console.log(`Server listening on port http://localhost:${port}`);
    })
})



// server.listen(0, ()=>{
//     console.log(`Server listening on port http://localhost:${server.address().port}`);
// })