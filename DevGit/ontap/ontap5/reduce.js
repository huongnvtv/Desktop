var depthArray =[1,2,3,[4,5,6],[7,8,9]];
var result = depthArray.reduce(function(total,current){
     return total.concat(current);
},[])
console.log(result);