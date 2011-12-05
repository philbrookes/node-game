var net = require('net');
var players = [];
var _id = 0;

var models = require("./models");
var Commands = require("./models/Commands");

var server = net.createServer(function (socket) {
    //handling a new connection
    socket._connid = _id;
    //create a player object for this connection
    var Player = new models.Player(socket);
    //add the player to the players array
    players[_id] = Player;
    //increment player ID ready for next connection
    _id ++;
    
    //welcome message
    socket.setEncoding("UTF-8");
    socket.write("please set a name using setname");
    
    //handling this new connections disconnection
    socket.on('end',function(){
        console.log("the connections ID: "+ this._connid + " has disconnected!");
        delete players[this._connid];
    });

    //handling incoming data from this connection
    socket.on('data',function(data){
        var command = Commands.CommandFactory.createCommand(this._connid, data);
        command.process();
    });
});
  
//set up the socket
server.listen(13378, "127.0.0.1");