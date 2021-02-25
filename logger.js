const EventEmitter = require('events');
const uuid = require('uuid');

//console.log(uuid.v4());

class logger extends EventEmitter {
    log(msg){
        this.emit('message',{id:uuid.v4(), msg});
    }
}
//module.exports = logger;
//const logger = require('./logger');

const logger1  = new logger();
logger1.on('message',(data)=>{console.log("Called listener",data)});
logger1.log('hello world');