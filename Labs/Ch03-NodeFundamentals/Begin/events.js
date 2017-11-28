const events = require('events');
const emitter = new events.EventEmitter();

const doWork1 = function() {
    console.log('Writing tests...');
}

const doWork2 = function() {
    console.log('Coding...');
}

const doWork3 = function() {
    console.log('Refactoring...');
}

const doWork4 = function() {
    console.log('Going to meeting...');
}

const doWork5 = function() {
    console.log('Checking emails...');
}

const doWork6 = function() {
    console.log('Going on break!');
}

//listen for 'work', when it happens, console.log()
emitter.on('work', () => {console.log('********')});

//listen for 'work, when it happens, console.log(), but only once
emitter.once('work', () => {
    console.log('Clocking in...');
});

//more examples of things that happen when 'work' happe
emitter.on('work', doWork1);
emitter.on('work', doWork2);
emitter.on('work', doWork3);
emitter.on('work', doWork4);
emitter.on('work', doWork5);

emitter.on('break', () => {console.log('********')});
emitter.on('break', doWork6);

emitter.emit('work');
emitter.emit('work');
emitter.emit('break');