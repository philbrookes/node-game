

var CommandFactory = function(){};

CommandFactory.prototype.createCommand = function(playerId, command){
    instruction = command.substr(0, command.indexOf(" "));
    argument = command.substr(command.indexOf(" "));
    switch(instruction){
        case "say":
            return new SayCommand(playerId, argument);
            break;
        case "setname":
            return new SetnameCommand(playerId, argument);
            break;
        default:
            return new WhatCommand(playerId, argument);
    }
}


module.exports = CommandFactory;