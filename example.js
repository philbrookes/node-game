/*

Most awesome branch ever

*/
var net = require('net');
var connections = [];
var _id = 0;
var server = net.createServer(function (socket) {
  
  connections[_id] = socket;
  socket._connid = _id;
  socket.setEncoding("UTF-8");
  socket.on('data',function(data){
       console.log(data);
  });

  socket.on('end',function(){
       for(var i = 0; i < connections.length; i++){
           if(this._connid == i){
               console.log("the id in connecitons = "+ i + "this sockets id = "+ this._connid);
               delete connections[i];
               break;
           } 
      } 
      console.log(connections);
  });

  socket.write("Welcome to the chat room!\r\n");
	for(connId in connections){
		socket.pipe(connections[connId]);
	}
 console.log(connections);
});


server.listen(13378, "127.0.0.1");