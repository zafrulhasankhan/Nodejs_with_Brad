const eventEmitter = require('events');

class myemitter extends eventEmitter{}

//init object
const myemitter1 = new myemitter();

//event listener

myemitter1.on('event',() => console.log('Event fired'));

//init event 
myemitter1.emit('event');