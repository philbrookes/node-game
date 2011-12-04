

var Player = function(socketConnection){
      
   this.connection = socketConnection;
   var that = this;
   var self = {
       setUserName:function(name){
           that.username = name;
       }
       ,
       getConnection:function(){
           return that.connection;
       }
       
   };
     
   return self;
};




module.exports = Player;