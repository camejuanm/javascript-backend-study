// TODO 1
const EventEmitter = require('events');
 
const birthdayEventListener = (name) => {
    console.log(`Happy birthday ${name}!`);
  }
   
  // TODO 2
  const myEmmiter = new EventEmitter();
   
  // TODO 3
  myEmmiter.on('birthday', birthdayEventListener);
   
  // TODO 4
  myEmmiter.emit('birthday', 'Juan');