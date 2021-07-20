// có thể định nghĩa một contructor function
// function Coures(name, coin){
//     this.name = name;
//     this.coin = coin;
//     this.getName = function(){
//         return this.name;
//     }
// }
// nhưng trong ES6 thì có thể dùng class thay cho contructor function
class Coures{
    constructor(name, coin){
        this.name = name;
        this.coin = coin;
    }
    // trong class có contructor để khởi tạo đối tượng 
    getName(){
        return this.name;
    }
    getPrice(){
        return this.coin;
    }
}
const jsCourse = new Coures('Javascript', 1000);
console.log(jsCourse)