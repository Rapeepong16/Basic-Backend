const http = require('node:http');
const server = http.createServer((req, res) => {
    console.log("content-type: "+ req.headers['content-type']);
    if(req.method != 'POST') return res.end("Please use POST method");
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', chunk => {
        const params = new URLSearchParams(body);
        name = params.get('name');
        subjects = params.getAll('favourite_subject');
        res.write('Name: ' + name + '\n');
        res.write('Favorite Subject:\n');
        subjects.forEach(function(subject, index) {
            res.write(' ' + (index+1) + ', ' + subject + '\n');
        });
        res.end();
    });
});
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
//read request from body