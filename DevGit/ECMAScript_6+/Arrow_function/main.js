// Arrow function : Arrow là mũi tên
// --> hàm mũi tên 
function sum(a,b){
    return a + b;
}
console.log(sum(2,3))
// khi chuyển thành arrow function rất dễ 
// 1. bỏ từ function và tên hàm
// 2. thêm mũi tên ( => ) vào sau tham số truyền vào của function
const result = (x, y) => {
    return x + y;
}
console.log(result(2,4))
// có thể ngắn gọn hơn
const result2 = (x, y) => x + y;
console.log(result2(3,6))
// 1. Trong trường hợp muốn return luôn
const demo = (x, y) => x + y;
console.log(demo(3,6))
// khi viết gì sau dấu => thì được hiểu là return luôn
// trừ khi =>{} thì không hiểu là return 
// nhưng khi muốn return lại 1 object thì sao ?
// vd:
// const result3 = (x, y) => {
//     name : x,
//     age : y,
// }
// console.log(result3)
// như vậy khi muốn return luôn lại 1 object thì cần dấu ()
const result3 = (x, y) => ({name : x, age : y});
console.log(result3(2,3))
// trong trường hợp có 1 tham số truyền vào 
const demo2 = (log) => console.log(log);
console.log(demo2('Message...'))
// thì có thể bỏ dấu () trong tham số truyền vào đi được
const demo3 = log => console.log(log);
console.log(demo3("Message2..."))
// 2. Một số đặc tính của Arrow function 
// thông thường
const coures = {
    name : "Javascript",
    getName : function(){
        // return this.name;
        return this; // trả lại đối tượng hiện tại còn gọi là
        // context
    }
}
console.log(coures.getName())
// còn đối với Arrow function thì không có context 
const coures2 = {
    name : "Javascript",
    getName : () => {
        return this;
    }
}
console.log(coures2.getName())
// còn 1 điều nữa là Arrow function không có contructor function
// vd:
const Cat = function(color){
    this.color = color;
}
var tom = new Cat('orange');
console.log(tom)

const Dog = (color) => {
    this.color = color;
}
var jerry = new Dog('orange');
// như này sẽ bị lỗi