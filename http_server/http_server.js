const http = require('node:http');
const server = http.createServer((req, res) => { //receive request (Methode)
    res.writeHead(404, {'Content-Type': 'text/plain'}); //show on head
    res.write('http version: ' + req.httpVersion + '\n');//show on body
    res.write('url: ' + req.url + '\n');
    res.write('rawHeaders: ' + req.rawHeaders + '\n---------\n\n');
    res.write('method: ' + req.method + '\n');
    res.write('headers.user-agent: ' + req.headers["user-agent"] + '\n'); //[user-agent] use in case header has - in header
    res.end('headers.host: ' + req.headers.host + '\n');//identify when finish create obj
});
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
}); // run and create server (listen = wait request) | Default port node.js is 3000
//practice write with understanding
//this is pure node.js without framework(express)
//res = response , req = request
server.on('error', (err) => {
    console.log('Error: ' + err.message);
})
server.on('request', (req, res) => {
    console.log('Request received: ' + req.headers.host+ req.url
        + ', Method: ' + req.method);
});