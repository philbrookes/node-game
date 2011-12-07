var SetnameCommand = function(playerId, argument, players, callback){
    this.players = players;
    this.playerId = playerId;
    this.argument = argument;
    var that = this;
    var self = {
        //process the command
        process:function(){
            //store the oldname
            var oldName = that.players[that.playerId].getUsername();
            //set the new name
            that.players[that.playerId]
                .setUsername(argument);
                
            //tell player it succeeded
            that.players[that.playerId]
                .getConnection() 
                .write("You changed your name from: "+oldName+" to: "+that.players[that.playerId].getUsername());
                    
            //tell other players that this players name has changed
            for(connId in that.players){
                if(connId != that.playerId){
                    that.players[connId]
                        .getConnection() 
                        .write(that.players[that.playerId].getUsername()+" changed username from: "+ oldName +" to: "+that.players[that.playerId].getUsername());
                }
            }
        }
    };

    return self;
};



module.exports = SetnameCommand;