import http = require("http");

const portNumber = 3000;

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!')
    console.log(`handled request ${req.url}`)
}).listen(portNumber);

console.log(`server listening on port ${portNumber}...`);