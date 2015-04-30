
var http = require ('http');
var player = require ('./Player');

http.createServer(function(req,res){
	res.writeHead(200);	//sttus code in header -->200=OK
	res.write("We build a server");	//response body
	res.end();	//close connection
}).listen(8080);							//listen for connection on this port
console.log("listening on port 8080");

//----create a Player instance and attach callbacks to event
var player = new player();

player.on("changePoints", player.getPoints);

//---run some methodes
player.increment(5);
player.decrement(2);

						