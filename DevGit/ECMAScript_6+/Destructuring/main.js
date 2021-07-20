// Dùng Destructuring cho mảng
var array = ["Javascipt", "PHP", "Ruby"];
// lấy các phần từ trong array mà không cần đến chỉ mục index
// lấy các phần tử theo thứ tự từ trái sang phải
var [a, , c] = array;
// nếu không muốn lấy phần tử ở đoạn nào chỉ cần đặt 2 dấu phẩy 
// để bỏ qua phần tử ở vị trí đấy
console.log(a, c)
// dùng toán tử rest để lấy ra các phần tử còn lại sau 3 dấu chấm
var [a, ...rest] = array;
console.log(rest);
// lưu ý rest chỉ là tên thích đặt tên như nào cũng dc
var [a, b, ...demo] = array;
console.log(demo)
// Dùng Destructuring cho một object
var coures = {
    name : "javascript",
    coin : 1000
}
var {name, coin} = coures;
// lưu ý trong object thì đặt biến giống như key trong object
console.log(name, coin)
// cũng có thể dùng toán tử rest cho object
var {name, ...rest} = coures;
console.log(rest)
// trong trường hợp một object có một object con
var coures = {
    name : "javascript",
    coin : 1000,
    children : {
        name :'ReactJs'
    }
}
// muốn lấy name của children
var {name, children : {name}} = coures;
console.log(name)
// trong trường hợp này thì name của thg con đã ghi đè name 
// của thằng cha
// để đổi tên dùng toán tử : (tên cần đổi)
var {name : ParentName, children : {name}} = coures;
console.log(ParentName, name)
// trường hợp ...tên :là toán tử rest còn lại là spread
function logger(a,...params){
    console.log(params) // trả về 1 array
    console.log(a)
    //rest lấy ra các phần tử còn lại
}
logger(1,2,3)