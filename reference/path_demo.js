const { join } = require('path');
const path = require('path');

//file basename find 
console.log(path.basename(__filename));

// file extension 
console.log(path.extname(__filename));

//directory name 
console.log(path.dirname(__filename));

//path object creation 
console.log(path.parse(__filename));

//concat path
console.log(path.join(__dirname,'concat','tuzz'));