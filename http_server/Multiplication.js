const http = require('node:http');
const server = http.createServer((req, res) => {
    const urlObj = new URL(req.url, `http://${req.headers.host}`);
    params = urlObj.searchParams;
    number = params.get('number');
    res.write(`Multiplication of  ${number}:  \n`);
    for (let i = 0; i <= 12; i++) {
        res.write(`${number} x ${i} = ${i * number}` + '\n');
    }
    res.end();
});
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
