

var Player = function(socketConnection){
      
   this.connection = socketConnection;
   this.username = undefined;
   var that = this;
   var self = {
       setUserName:function(name){
           that.username = name;
       }
       ,
       getConnection:function(){
           return that.connection;
       }
       ,
       getUsername:function(){
           return that.username;
       }
       
   };
     
   return self;
};




module.exports = Player;