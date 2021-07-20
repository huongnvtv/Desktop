// classes
// function Course(name, coin){
//     this.name = name;
//     this.coin = coin;
//     this.getName = function(){
//         return this.name;
//     }
// }
class Course {
    constructor(name, coin){
        this.name = name,
        this.coin = coin
    }
    getname(){
        return this.name;
    }
}
myJs = new Course('Javascript', 1000);
var myJs;
console.log(myJs.getname())