const http  = require('http');
const path = require('path');
const fs  = require('fs');

const server = http.createServer((req,res)=>{
let filepath = path.join(__dirname,'public',req.url==='/'?'index.html':req.url);
console.log(filepath);
res.end();

});

const port = process.env.port || 4000;
server.listen(port,()=>{console.log(`server is running on port ${port}`);});