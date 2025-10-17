const http = require('node:http');
const server = http.createServer((req, res) => {
    const urlObj = new URL(req.url, `http://${req.headers.host}`);
    const pathVar = urlObj.pathname.split('/').filter(Boolean);
    number = pathVar[1]; //choose index 1 in array
    res.write(`Multiplication of ${number}:\n`);
    for (let i = 1; i <= 12; i++) {
        res.write(number + ' x ' + i + ' = ' + i * number + '\n');
    }
    res.end();
});
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
