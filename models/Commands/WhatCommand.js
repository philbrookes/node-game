

var WhatCommand = function(playerId, argument){
    var playerId = playerId;
    var argument = argument;
    var that = this;
    var self = {
        process:function(){
            players[that.playerId]
                .getConnection()
                .write("Sorry, I didn't understand you, available commands are: 'say' and 'setname'");
        }
    };

    return self;
};



module.exports = WhatCommand;