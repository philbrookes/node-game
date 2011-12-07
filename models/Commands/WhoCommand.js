var WhoCommand = function(playerId, argument, players){
    this.players = players;
    this.playerId = playerId;
    this.argument = argument;
    var that = this;
    var self = {
        //process the command
        process:function(){
            //tell other players that this players name has changed
            var playerNames = "";
            if(that.players.length > 1){
                playerNames = "Players online: ";
                for(playerId in that.players){
                    if(playerId != that.playerId){
                        console.log("adding "+that.players[playerId].getUsername()+" to string");
                        playerNames += that.players[playerId].getUsername()+", ";
                    }
                }
                playerNames = playerNames.trim();
                playerNames = playerNames.trim().substr(0, playerNames.lastIndexOf(","));
            }else{
                playerNames = "No one else is online";
            }
            that.players[that.playerId].getConnection().write(playerNames);
        }
    };

    return self;
};



module.exports = WhoCommand;