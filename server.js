var express = require('express');
var app = express();
var server = app.listen(5000);

//whenever someone goes to server, let them see files in 'public'
app.use(express.static('public'));
console.log('my socket server is running');

//creates socket part of server
var socket = require('socket.io');
var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket){
    console.log('new connection: ' + socket.id);

    //receive message from sockets
    socket.on('draw', drawMessage);
}

function drawMessage(data){
    //socket.broadcast.emit('draw', data);
    io.sockets.emit('draw', data);
    console.log(data);
}