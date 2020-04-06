const Emmiter = require('./emmiter')

const emmiter = new Emmiter();

emmiter.on('save', () => {
    console.log('onSave activated 1');
});

emmiter.on('save', () => {
    console.log('onSave activated 2');
});

emmiter.emit('save');