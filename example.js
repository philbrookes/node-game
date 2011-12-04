/*

Most awesome branch ever

*/
var net = require('net');
var connections = [];
var _id = 0;
var server = net.createServer(function (socket) {

  
connections[_id] = socket;
  socket._connid = _id;
  _id ++;
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

    socket.on('data',function(data){
		console.log(data);
		for(connId in connections){
            data = data.replace("\r\n", "");
            connections[connId].write(data + " started with: "+data.charAt(0));
		}
    });
});
  

server.listen(13378, "127.0.0.1");