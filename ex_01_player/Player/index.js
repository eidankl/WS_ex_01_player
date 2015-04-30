var events = require('events');	
var util = require('util');
util.inherits(Player, events.EventEmitter);

var msg = "";			//for write to screen at localhoas
// ------------Player obj constructor--------------
function Player(){
	this.points = 0;
	events.EventEmitter.call(this);
	console.log("Player was born\n");
	msg += "Player was born\n" ;
	console.log("Points is: "+ this.points );
	msg += "Points is: "+ this.points + "\n";
}

//-------------Player obj prototype---------------
/*increment point*/
Player.prototype.increment = function(val_1){
	this.points += val_1;
 	console.log("PLUS " + val_1);
 	msg += "PLUS " + val_1 + "\n";
 	//console.log("Points is: " + this.points );
 	this.emit('changePoints'); 		//emit (=fire) event
};

/*decrement point*/
Player.prototype.decrement = function(val_2){
	if((this.points-val_2) >= 0){
 		this.points -= val_2;
		
 		console.log("MINUS " + val_2);
 		msg += "MINUS " + val_2 + "\n";
 		//console.log("Points is: " + this.points );
 	}
 	else{
 		this.points = 0;
 		console.log(" ERROR - Points can't be negative\n Points is: " + this.points);
 		msg += " ERROR - Points can't be negative\n Points is: " + this.points + "\n";
	}
	this.emit('changePoints'); 		//emit (=fire) event
};

//-------------CalleBack functions---------------
 /* get point*/
Player.prototype.getPoints = function (){
 	console.log("Points is:" + this.points);
 	msg += "Points is:" + this.points + "\n" ;
 }

 module.exports = Player;

Player.prototype.getMsg = function(){
	return msg;
}
