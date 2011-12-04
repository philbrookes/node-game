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
		for(connId in connections){
            data = data.replace("\r\n", "");
            connections[connId].write(data + " started with: "+data.charAt(0));
		}
  });
  
});


server.listen(13378, "127.0.0.1");