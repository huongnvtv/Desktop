var courses = [
  {name:'Javascript',coin :1000},
 {name :'PHP',coin :0},
 {name :"python",coin :500}
]
Array.prototype.filter2 =function (callback) {
  var result =[]
  for(var index in this){
      if(this.hasOwnProperty(index)){
         var item =callback(this[index],index);
         if(item == true){
            result.push(this[index]);
         }
        
      }
  }
  return result;
}
var result =courses.filter2(function(item){
     return item.coin > 0;
})
console.log(result);