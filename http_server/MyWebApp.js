const { createServer } = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = createServer((req, res) => {
    var x = 100;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write ( 'x = ' + x + '\n');
    x = "Hello World";
    res.write(x);
    res.end();
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
