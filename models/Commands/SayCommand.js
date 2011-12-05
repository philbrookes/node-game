var SayCommand = function(playerId, argument, players){
    this.players = players;
    this.playerId = playerId;
    this.argument = argument;
    var that = this;
    var self = {
        process:function(){
            //tell player what he said
            that.players[that.playerId].getConnection().write("You said: "+that.argument);
            //tell other players what this player said
            for(connId in that.players){
                if(connId != that.playerId){
                    that.players[connId].getConnection().write(that.players[that.playerId].getUsername()+" said: "+that.argument);
                }
            }
        }
    };

    return self;
};



module.exports = SayCommand;