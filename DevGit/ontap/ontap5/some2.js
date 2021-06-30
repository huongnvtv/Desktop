var courses = [
  {name:'Javascript',coin :1000},
 {name :'PHP',coin :0},
 {name :"python",coin :500}
]
var number =[1,2,3,4,5];
Array.prototype.some2 =function (callback) {
    for(i in this){
      if(this.hasOwnProperty(i)){
           var result = callback(this[i],i,this);
           if(result ==true) return true;
      }
    }
}
var result=number.some2(function (item) {
  return item %2 ==0;
})
console.log(result);