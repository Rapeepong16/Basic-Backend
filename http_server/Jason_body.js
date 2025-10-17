const http = require('node:http');
const server = http.createServer((req, res) => {
    console.log("content-type: "+ req.headers['content-type']);
    if(req.method != 'POST') return res.end("Please use POST method");
    let body = '';
    req.on('data', chunk => {
        body += chunk;
    });
    req.on('end', chunk => {
        jsonObj = JSON.parse(body);
        res.write('Request body :\n');
        res.end(JSON.stringify(jsonObj));
    });
});
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});