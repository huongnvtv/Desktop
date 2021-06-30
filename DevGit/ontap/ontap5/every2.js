var number =[1,2,3,4,5];
Array.prototype.every2 =function (callback) {
    var check = true;
    for(i in this){
      if(this.hasOwnProperty(i)){
           var result = callback(this[i],i,this);
           if(result ==true) check =true;
           else return false;
      }
    }
    return check;
}
var result=number.every2(function (item) {
  return item %2 ==0;
})
console.log(result);