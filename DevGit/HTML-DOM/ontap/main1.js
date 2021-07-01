// 1.Get list elements li là con trực tiếp của ul
// thứ nhất và lưu vào biến listItems1
// 2.Get list elements li là con trực tiếp của ul 
// thứ hai và lưu vào biến listItems2
// 3.Get list elements li là con trực tiếp của ul 
// thứ nhất và ul thứ hai sau đó lưu vào biến listItems3

var listItems1 =document.querySelectorAll('.parent > li');
console.log(listItems1);
var listItems2 =document.querySelectorAll(".parent > ul >li")
console.log(listItems2)
var listItems3 =document.querySelectorAll(".parent >li ,.parent >ul>li")
console.log(listItems3)
var listItems4 =document.querySelectorAll(".parent >li ,.parent >ul>ul >li")
console.log(listItems4)