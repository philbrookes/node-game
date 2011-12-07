var SayCommand = require("./SayCommand");
var SetnameCommand = require("./SetnameCommand");
var WhoCommand = require("./WhoCommand");
var WhatCommand = require("./WhatCommand");

var CommandFactory = function(){};
//static function
CommandFactory.prototype.createCommand = function(playerId, command, players){
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
    console.log("creating command for "+instruction+" player: "+playerId+" argument: "+argument);
    switch(instruction){
        case "say": //run the say command
            return new SayCommand(playerId, argument, players);
            break;
        case "setname": //run the setname command
            return new SetnameCommand(playerId, argument, players);
            break;
        case "who": //run the setname command
            return new WhoCommand(playerId, argument, players);
            break;
        default: //run the What? command
            return new WhatCommand(playerId, argument, players);
    }
}


module.exports = new CommandFactory();