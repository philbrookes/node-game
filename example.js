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
  socket.write("Echo awesome server\r\n");
  socket.pipe(socket);
  console.log(connections);
});


server.listen(13378, "127.0.0.1");