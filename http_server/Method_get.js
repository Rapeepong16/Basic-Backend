const http = require('node:http');
const server = http.createServer((req, res) => {
    const urlObj = new URL(req.url, `http://${req.headers.host}`);
    params = urlObj.searchParams;
    name = params.get('name');
    subjects = params.getAll('favourite_subject');
    res.write('Name: ' + name + '\n');
    res.write('Favorite Subjects:\n');
    subjects.forEach(function(subject, index) {
        res.write(' ' + (index+1) + ', ' + subject + '\n');
    });
    res.end();
});
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});

