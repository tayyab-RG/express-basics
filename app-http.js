const http = require('http');
const {readFileSync} = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'content-type' : 'text/plain'});
        let fileContent = readFileSync('./navbar-app/index.html');
        res.write(fileContent);
        res.end();
    } else if (req.url === '/about') {
        res.writeHead(200, {'content-type' : 'text/html'});
        res.write('<h1>About</h1>');
        res.end();
    } else if (req.url === '/contact') {
        res.writeHead(200, {'content-type' : 'text/html'});
        res.write('<h1>Contact</h1>');
        res.end();
    } else {
        res.writeHead(404, {'content-type' : 'text/html'});
        res.write('<h1>Page Not Found</h1>');
        res.end();
    } 
});

server.listen(5000);