const url = require('url');
const myurl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

//serialized url 
console.log(myurl.href);
//host name
console.log(myurl.hostname);
//pathname
console.log(myurl.pathname);
//params 
console.log(myurl.searchParams);
//add params
myurl.searchParams.append('abc','123');

console.log(myurl.searchParams);

//Loop through params
myurl.searchParams.forEach((value,name)=>{
    console.log(`${name}:${value}`);
})