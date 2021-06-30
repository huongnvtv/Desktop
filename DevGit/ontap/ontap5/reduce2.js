Array.prototype.reduce2 = function(callback,result) {
	// body...
	var i =0;
	if(arguments.length < 2){
		result = this[0];
		i=1;
	}
	for (; i < this.length; i++) {
		result = callback(result,this[i],i,this);
	}
	return result;
};
var arr =[1,2,3,4,5];
var result = arr.reduce2(function(total,current){
	return total + current;
})
console.log(result);