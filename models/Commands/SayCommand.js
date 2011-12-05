

var SayCommand = function(playerId, argument){
    var playerId = playerId;
    var argument = argument;
    var that = this;
    var self = {
        process:function(){
            players[that.playerId].getConnection().write("You said: "+that.argument);
            for(connId in connections){
                if(connId != that.playerId){
                    players[connId].getConnection().write(players[that.playerId].getUsername()+" said: "+that.argument);
                }
            }
        }
    };

    return self;
};



module.exports = SayCommand;