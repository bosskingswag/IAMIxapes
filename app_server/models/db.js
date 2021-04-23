const mongoose = require ('mongoose');
let dbURI = 'mongodb://localhost/IAMixtapes';
if (process.env.NODE_ENV === 'production') {
    dbURI = 'mongodb://bosskingswag:sausage123@cluster0.bbgcv.mongodb.net:27017/IAMixtapes';
}
else {
    mongoose.connect(dbURI);
}
const readLine = require ('readline');
if (process.platform === 'win32') {
    const rl = readLine.createInterface ({
        input: process.stdin,
        output: process.stdout
    });
    rl.on ('SIGINT', () => {
        process.emit("SIGINT");
    });
}

//monitoring connection events
mongoose.connection.on('connected',() => {
    console.log('Mongoose connected to ${dbURI}');
})
mongoose.connection.on('error', err => {
    console.log('Mongoose connected error');
});
mongoose.connection.on('disconnected',() => {
    console.log('Mongoose disconnected');
});


//closing connection event handler
const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close( () => {
        console.log('Mongoose disconnected through ${msg}');
        callback();
    });
};

//node,heroku,win database termination listeners



process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});
process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
        process.exit(0);
    });
});
process.on('SIGTERM', () => {
    gracefulShutdown('heroku app shutdown', () => {
        process.exit(0);
    });
});



require('./artists')