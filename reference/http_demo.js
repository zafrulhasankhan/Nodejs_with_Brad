const http = require('http');
const { Http2ServerResponse } = require('http2');

// create server 
http.createServer((req,res)=>{
    res.write('Hello bd from http module');
    res.end();
}).listen(4000,()=>{console.log("server is running");});