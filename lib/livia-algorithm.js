/*
 * livia-algorithm
 * https://github.com/chrisenytc/livia-algorithm
 *
 * Copyright (c) 2013 Christopher EnyTC
 * Licensed under the MIT license.
 */

'use strict';

var algorithm = function(infinite) {
	try
	{
		//Constants
		var B = 204;
		var LIV = 1+4+10;
		
		//Algorithm EQS
		var eq1, eq2, eq3, eq4, eq5, eq6, result;
		
		//Start Point
		
		//Solve the first sequence
		eq1    = Math.round(B/198);
		//Found the value of 23¹⁰
		eq2    = Math.round(Math.pow(23,10));
		//Solve the second sequence
		eq3    = Math.round(eq2/27);
		//Solve the third sequence
		eq4    = Math.round(eq1*eq3);
		//Found the value of LIV¹⁴
		eq5    = Math.round(Math.pow(LIV,14));
		//Solve the fourth sequence.
		
		
		//Now that we have the result of the fourth sequence we multiply the result by the value of the fourth sequel fifth sequence and divide the result of the fourth sequence.
		eq6    = Math.round(eq4*eq5/eq4);
		//Solve the fifth sequence
		
	
		//If the variable is infinitely greater than or equal to the result of the fifth sequence, multiply the fifth sequence the infinite value of the variable and divide the result by the infinitely variable. If not, divide the result by the value of the fifth sequence of infinitely variable.

		result = (infinite >= eq6) ? Math.round((eq6*infinite)/infinite) : Math.round(eq6/infinite);
		
		return result;
	}
	catch(e)
	{
		console.log(e.message);
	}
};


// RandomProvider
var getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

//Exports Algorithm Logic

exports.algorithm = function(infinite) {
  return algorithm(infinite);
};

//Exports Random Algorithm Logic

exports.random = function() {
	return algorithm(getRandom(1,19102012));
};
