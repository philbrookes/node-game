var WhatCommand = require("./whatCommand");
var CommandFactory = function(){};
//static function
CommandFactory.prototype.createCommand = function(playerId, command, players, callback){
    //get first word of data and store it as the instruction
    instruction = command.substr(0, command.indexOf(" "));
    //get everything after first space and store it as the argument
    argument = command.substr(command.indexOf(" "));
    console.log("creating command for "+instruction+" player: "+playerId+" argument: "+argument);
    try{
    var command = require("./"+instruction+"Command");
    if(typeof command == "function"){
        return new command(playerId,argument,players,callback);
    }
    }catch(e){
    
        return new WhatCommand(playerId,argument,players);
    
    }
}


module.exports = new CommandFactory();