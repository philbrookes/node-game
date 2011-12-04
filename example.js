/*

Most awesome branch ever

*/
var net = require('net');
var connections = [];
var server = net.createServer(function (socket) {
   connections.push(socket);
  socket.setEncoding("UTF-8");
  socket.on('data',function(data){
       console.log(data);
  });
  socket.write("Welcome to the chat room!\r\n");
	for(connId in connections){
		socket.pipe(connections[connId]);
	}
});


server.listen(13378, "127.0.0.1");