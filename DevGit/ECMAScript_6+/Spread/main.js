var array1 = ["Javascript", "PHP", "Ruby"];
var array2 = ['Reactjs', 'Dart'];
// toán tử spread là ... dùng để bỏ [] (mở đóng mảng)
// ví dụ tạo array3 nối giữa array2 và array1
var array3 = [...array2, ...array1];
console.log(array3)
// giống như array thì object ... cũng bỏ đi {}
var object1 = {
    name : "javascipt"
}
var object2 = {
    coin : 1000
}
var object3 = {
    ...object1,
    ...object2
}
console.log(object3)
// ứng dụng trong thực thế dùng để thừa hưởng một object giống
// với object mà mình cần miêu tả
var coures = {
    name : "Javascript",
    coin : 1000
}
// object này mình cũng có các key ,value giống với coures
var couresChild = {
    ...coures,
    description : "description",
    name : "PHP"
}
// trong một object nếu 2 key trùng tên nhau thì sẽ lấy key định nghĩa sau
// thêm một description và override lại name khác
console.log(couresChild)
// sử dụng toán tử spread để truyền tham số cho hàm
var array = ["javascript", "PHP", "Ruby"]
function logger(a, b, c){
    console.log(a, b, c);
}
logger(...array)
// kết hợp giữa rest và spread
function logger(...rest){  
    for(var i = 0; i < rest.length; i++){
        console.log(i);
    }
}
// rest định nghĩa ra 1 tham số ,truyền đối số là spread
logger(...array)