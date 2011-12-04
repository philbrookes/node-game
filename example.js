/*

Most awesome branch ever

*/
var net = require('net');
var connections = {};
var server = net.createServer(function (socket) {
  var _id = Math.random(0,1000);
  connections[_id] = socket;
  socket._connid = _id;
  socket.setEncoding("UTF-8");
  socket.on('data',function(data){
       console.log(data);
  });
  socket.on('end',function(){
       for(theid in connections){
           if(this._connid == theid){
               console.log("the id in connecitons = "+ theid + "this sockets id = "+ this._connid);
               delete connections[theid];
               break;
           } 
      } 
      console.log(connections);
  });
  socket.write("Echo awesome server\r\n");
  socket.pipe(socket);
  console.log(connections);
});


server.listen(13378, "127.0.0.1");