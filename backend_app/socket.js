module.exports = function(app){

    var io = require('socket.io')(app);
    app.listen(80);

    io.on('connection', function (socket) {
        console.log('client connected');
        socket.on('clientChatMessage', function (message) {
            console.log('new message ' + JSON.stringify(message));
            io.emit('serverChatMessage', message);
        });
    });

}