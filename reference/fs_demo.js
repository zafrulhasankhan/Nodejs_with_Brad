const fs = require('fs');
const path = require('path');

//create a folder
/*fs.mkdir(path.join(__dirname,'test'),{},err=>{
    if(err) throw err;
    console.log('Folder created successfully');
})*/

//create file then write
/*fs.writeFile(path.join(__dirname,'test','hello.pdf'),'hello world, written by nasim',err=>{
    if(err) throw err;
    
    // write append in same file
    fs.appendFile(path.join(__dirname,'test','hello.pdf'),'.This nasim is a  student',err=>{
        if(err) throw err;
        console.log('Written in file successfully');
    })
})
*/

//read file
/*fs.readFile(path.join(__dirname,'test','hello.pdf'),'utf8',(err,data)=>{
    if(err) throw err;
    console.log(data);
})*/

//rename file 

fs.rename(path.join(__dirname,'test','hello.pdf'),path.join(__dirname,'test','helloWorld.pdf'),(err)=>{
    if(err) throw err;
    console.log('Successfully rename this file');
})