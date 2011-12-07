var WhatCommand = require("./whatCommand");
var CommandFactory = function(){};
//static function
CommandFactory.prototype.createCommand = function(playerId, command, players, callback){
    var instruction = "";
    var argument = "";
 	command = command.trim();
 	if(command.indexOf(" ") > 0)
 	{
 	    //get first word of data and store it as the instruction
 	    instruction = command.substr(0, command.indexOf(" ")).trim();
 	    //get everything after first space and store it as the argument
 	    argument = command.substr(command.indexOf(" ")).trim();
 	}
 	else
 	{
 	    instruction = command;
 	    argument = "";
    }
    instruction = instruction.toLowerCase();
        if(typeof command == "function"){
            return new command(playerId,argument,players,callback);
        }
    }catch(e){
    
        return new WhatCommand(playerId,argument,players);
    
    }
}


module.exports = new CommandFactory();
