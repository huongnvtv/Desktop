// 1. Định nghĩa key: value cho object
// 2. Định nghĩa methob cho object
// 3. Định nghĩa key cho object dưới dạng biến

// 1. Định nghĩa key: value cho object
var name = 'Javascript';
var price = 1000;
// var course = {
//     name : name,
//     price : price
// }
// enhanced_object có thể định nghĩa như này
var course = {
    name,
    price,
    // getName : function(){
    //     return name;
    // }
    // dùng enhanced_object 
    getName(){
        return name;
    }
}
console.log(course)
// 2. Định nghĩa methob cho object
console.log(course.getName())
// 3. Định nghĩa key cho object dưới dạng biến
var fieldName = 'name';
var fieldPrice = 'price';
const coures2 = {
    [fieldName] : "javascript",
    [fieldPrice] : 1000
}
console.log(coures2)