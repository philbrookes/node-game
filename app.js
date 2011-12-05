/*

Most awesome branch ever

*/
var net = require('net');
var connections = [];
var commands = ["say","setname"];
var models = require("./models");
var _id = 0;

var server = net.createServer(function (socket) {

    socket._connid = _id;
    var Player = new models.Player(socket);
    connections[_id] = Player;
    _id ++;
    
    socket.setEncoding("UTF-8");
    
    
    socket.write("please set a name using setname");
    
    
    socket.on('end',function(){
        for(var i = 0; i < connections.length; i++){
            if(this._connid == i){
                console.log("the id in connecitons = "+ i + "this sockets id = "+ this._connid);
                delete connections[i];
                break;
            } 
        } 
    });

    socket.on('data',function(data){
        
        var activePlayer = connections[this._connid];
        if(typeof activePlayer == "object"){
            
        }
        
        var command = "";
        
        for(connId in connections){
            
            data = data.replace("\r\n", "");
            
            for(i = 0; i < commands.length; i++){
                console.log("checking for "+commands[i]);
                if(data.indexOf(commands[i], 0)!= -1){
                    console.log(commands[i]);
                    command = commands[i];
                }
            }
            switch(command){
                case "say":
                    if(activePlayer.state == "ready"){
                    connections[connId].getConnection().write("player "+activePlayer.getUsername()+" said: "+data.replace(/say/,""));
                    }else{
                        activePlayer.getConnection().write("you need to set a name first using setname");
                    }
                    break;
                case "setname":
                    var name = data.replace(/setname/,"");
                    activePlayer.setUserName(name);
                    activePlayer.getConnection().write("set name to "+activePlayer.getUsername());
                    activePlayer.state = "ready";
                    break;
                default:
                    connections[connId].getConnection().write(data+ "was an unknown command ");
            }
            
        }
    });
});
  

server.listen(13378, "127.0.0.1");