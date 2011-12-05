/*

Most awesome branch ever

*/
var net = require('net');
var players = [];
var _id = 0;

var models = require("./models");
var Commands = require("./models/Commands");

var server = net.createServer(function (socket) {

    socket._connid = _id;
    var Player = new models.Player(socket);
    players[_id] = Player;
    _id ++;
    
    socket.setEncoding("UTF-8");
    socket.write("please set a name using setname");
    
    socket.on('end',function(){
        for(var i = 0; i < players.length; i++){
            if(this._connid == i){
                console.log("the id in connecitons = "+ i + "this sockets id = "+ this._connid);
                delete players[i];
                break;
            } 
        } 
    });

    socket.on('data',function(data){
        var command = Commands.CommandFactory.createCommand(this._connid, data);
        command.process();
    });
});
  

server.listen(13378, "127.0.0.1");