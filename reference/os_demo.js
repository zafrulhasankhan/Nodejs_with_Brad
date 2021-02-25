const os = require('os');

//platform
console.log(os.platform());

//cpu architecture
console.log(os.arch());
//cpu core info
console.log(os.cpus());

//find free memory
console.log(os.freemem());

//Find total memory
console.log(os.totalmem());

//Home directory 
 console.log(os.homedir());