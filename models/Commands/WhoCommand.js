var WhoCommand = function(playerId, argument, players){
    this.players = players;
    this.playerId = playerId;
    this.argument = argument;
    var that = this;
    var self = {
        //process the command
        process:function(){
            //initialise string
            var playerNames = "";
            //check more than 1 player is online
            if(that.players.length > 1){
                playerNames = "Players online: ";
                //loop through all players
                for(playerId in that.players){
                    //if its not the player who entered the command
                    if(playerId != that.playerId){
                        //add their name to the string
                        playerNames += that.players[playerId].getUsername()+", ";
                    }
                }
                //tidy the output
                playerNames = playerNames.trim();
                playerNames = playerNames.trim().substr(0, playerNames.lastIndexOf(","));
            }else{
                //tell player no one else is online
                playerNames = "No one else is online";
            }
            //send message to player
            that.players[that.playerId].getConnection().write(playerNames);
        }
    };

    return self;
};



module.exports = WhoCommand;