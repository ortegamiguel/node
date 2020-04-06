const { EventEmitter } = require('events')
const {SAVE} = require('./event-names.js')

const emmiter = new EventEmitter();

emmiter.on(SAVE, () => {
    console.log('onSave activated 1');
});

emmiter.on(SAVE, () => {
    console.log('onSave activated 2');
});

emmiter.emit('save');