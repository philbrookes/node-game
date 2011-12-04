/*

Most awesome branch ever

*/
var net = require('net');
var connections = [];
var commands = ["say","setname"];
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
            for(i = 0; i < commands.length; i++){
                console.log("checking for "+commands[i]);
                if(data.indexOf(commands[i], 0)!= -1){
                    console.log(commands[i]);
                    console.log("command sent was "+ commands[i]);
                //build command obj
                }
            }
            connections[connId].write(data + " started with: "+data.charAt(0));
        }
    });
});
  

server.listen(13378, "127.0.0.1");