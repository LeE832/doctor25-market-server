var http = require('http');
var hostname = '127.0.0.1';
var port = 8080;

const server = http.createServer(function(req, res){
    const path = req.url;
    const method = req.method;
    if(path === '/products'){
        if(method === 'GET'){
            res.writeHead(200, {'Content-Type':'application/json'});
            const products = JSON.stringify([{
                name:"닥터25 응급키트",
                price: 64000,
            },]);
            res.end(products);
        }else if(method === 'POST'){
            res.end("생성되었습니다!");
        }
    }else{    
        res.end("hello");
    }
});

server.listen(port, hostname);

console.log('doctor25 merket server on!');