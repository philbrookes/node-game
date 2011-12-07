var WhatCommand = function(plyrId, arg, plyrs){
    this.players = plyrs;
    this.playerId = plyrId;
    this.argument = arg;
    var that = this;
    var self = {
        process:function(){
            //tell player they sent an instruction that we didnt understand
            that.players[that.playerId]
                .getConnection()
                .write("Sorry, I didn't understand you, available commands are: 'setname', 'say' and 'who'");
        }
    };

    return self;
};



module.exports = WhatCommand;