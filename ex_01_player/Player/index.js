var events = require('events');	
var util = require('util');
util.inherits(Player, events.EventEmitter);

// ------------Player obj constructor--------------
function Player(){
	this.points = 0;
	events.EventEmitter.call(this);
	console.log("Player was born\n");
	console.log("Points is: "+ this.points );
}

//-------------Player obj prototype---------------
/*increment point*/
Player.prototype.increment = function(val_1){
	this.points += val_1;
 	console.log("PLUS ",val_1);
 	//console.log("Points is: " + this.points );
 	this.emit('changePoints'); //emit (=fire) event
};

/*decrement point*/
Player.prototype.decrement = function(val_2){
	if((this.points-val_2) >= 0){
 		this.points -= val_2;
		
 		console.log("MINUS ",val_2);
 		//console.log("Points is: " + this.points );
 	}
 	else{
 		this.points = 0;
 		console.log(" ERROR - Points can't be negative\n Points is: ",points);
	}
	this.emit('changePoints'); //emit (=fire) event
};

//-------------CalleBack functions---------------
 /* get point*/
Player.prototype.getPoints = function (){
 	console.log("Points is:" + this.points);
 }

 module.exports = Player;



// exports.getPoint = function(){
// 	return points;
// }


// var points = 0;
// var val_1;
// var val_2;


// /* get point*/
// exports.getPoint = function(){
// 	return points;
// }

// /*increment point*/
// exports.increment = function(val_1){
// 	points += val_1;
// 	console.log("PLUS ",val_1);
// 	console.log("Points is: ",points );
// }

// decrement point
// exports.decrement = function(val_2){
// 	if((points-val_2) >= 0){
// 		points -= val_2;
		
// 		console.log("MINUS ",val_2);
// 		console.log("Points is: ",points );
	
// 	}
// 	else{
// 		points = 0;
// 		console.log(" ERROR - Points can't be negative\n Points is: ",points);
		
// 	}
// }