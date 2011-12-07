var WhatCommand = require("./whatCommand");
var CommandFactory = function(){};
//static function
CommandFactory.prototype.createCommand = function(playerId, command, players, callback){
 	    //get first word of data and store it as the instruction
    instructions = command.trim().split(" ");
 	    //get everything after first space and store it as the argument
    instruction = instructions[0];        
    argument = (instructions.length > 1)?instructions.splice(1).join(" "):"";
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
