const http  = require('http');
const path = require('path');
const fs  = require('fs');

const server = http.createServer((req,res)=>{
  /*  if(req.url === '/'){
        fs.readFile(path.join(__dirname,'public','index.html'),(err,content)=>{
            if(err) throw err;
            res.writeHead(200,{'Content-type':'text/html'});
            res.end(content);
        })
    }
        //res.writeHead(200,{'Content-type':'text/html'});
        //res.end('<h1>This is Home Page from Node js</h1>');

        //About page
        if(req.url === '/about'){
            fs.readFile(path.join(__dirname,'public','about.html'),(err,content)=>{
                if(err) throw err;
                res.writeHead(200,{'Content-type':'text/html'});
                res.end(content);
            })
    }

    //api user create 
    if(req.url === '/api/users'){
            const user = [
                           {name:'nasim khan',age:22},
                           {name:'zafrul hasan', age:23}
                         ];
            res.writeHead(200,{'Content-type':'application/json'});
            res.end(JSON.stringify(user));
        
}*/


//filepath set
let filepath = path.join(__dirname,'public',req.url==='/'?'index.html':req.url);

//extension of file
let extname = path.extname(filepath);


//intial or by default content type
let contentType = 'text/html';

//check extension and set content type

switch(extname){
    case '.js':
        contentType = 'text/javascript';
        break;
    case '.css':
        contentType = 'text/css';
        break;
    case '.json':
        contentType = 'application/json';
        break;
     case '.png':
        contentType = 'image/png';
        break;
     case '.jpg':
        contentType = 'image/jpg';
        break;
        
}


//read the file
fs.readFile(filepath,(err,content)=>{
    if(err){
        if(err.code == 'ENOENT'){
            //page not found says
            fs.readFile(path.join(__dirname,'public','404.html'),(err,content)=>{
                
                res.writeHead(200,{'Content-type':'text/html'});
                res.end(content,'utf8');
            })
        }else{
            // server error
            res.writeHead(500);
            res.end(`server error:${err.code}`)
        }
    }else{
        //successfully read file
        res.writeHead(200,{'Content-type':contentType});
        res.end(content,'UTF-8');
    }
});

});
const port = process.env.port || 4000;
server.listen(port,()=>{console.log(`server is running on port ${port}`);});