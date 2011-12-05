

var SetnameCommand = function(playerId, argument){
    var playerId = playerId;
    var argument = argument;
    var that = this;
    var self = {
        process:function(){
            var oldName = players[that.playerId].getUsername();
            players[that.playerId].setUsername(argument);
            players[that.playerId]
                .getConnection()
                .write("You changed your name from: "+oldName+" to: "+players[that.playerId].getUsername());
                    
            for(connId in players){
                if(connId != that.playerId){
                    players[connId]
                        .getConnection()
                        .write(players[that.playerId].getUsername()+" changed username from: "+ oldName +" to: "+players[that.playerId].getUsername());
                }
            }
        }
    };

    return self;
};



module.exports = SetnameCommand;