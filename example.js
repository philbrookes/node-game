/*

Most awesome branch ever

*/
var net = require('net');

var server = net.createServer(function (socket) {
  socket.write("Echo awesome server\r\n");
  socket.pipe(socket);
});

server.listen(13378, "127.0.0.1");