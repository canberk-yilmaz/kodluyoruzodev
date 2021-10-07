const http = require('http');

const port = 5000;
const hostname = '127.0.0.1'

const server = http.createServer((req, res) => {

    const url = req.url;

    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        res.write('<h2 style="color:white; background:black; text-align:center">Index Sayfasına Hoşgeldiniz</h2>')
    }
    else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        res.write('<h2 style="color:white; background:black; text-align:center">Hakkında Sayfasına Hoşgeldiniz</h2>')
    }
    else if (url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        res.write('<h2 style="color:white; background:black; text-align:center">İletişim Bilgileri Sayfasına Hoşgeldiniz</h2>')
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' })
        res.write('<h1 style="font-size: 72px; text-align:center">404 Hatası - Bulunamadı</h1>')
    }
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})