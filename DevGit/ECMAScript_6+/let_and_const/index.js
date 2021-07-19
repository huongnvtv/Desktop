// sự khác nhau:
// 1.Var / let,const : scope (phạm vi truy cập), hosting(đưa lên trên đầu)
// 2.Const / Var,let : Assignment(gán lại các biến)
// var, let, const :Đều sử dụng để khai báo biến 
// khác nhau : phạm vi truy cập 
// var có thể được truy cập bên ngoài code 
if(true){
    var i = 7;
}
console.log(i)
// nhưng nếu như dùng const,let thì sẽ báo lỗi
// if(true){
//    let a = 8;
//    const b = 9;
// }
// console.log(a)
// console.log(b)
{
    const demo = "JavaScripts";
    console.log(demo)
    {
        const demo = "học JavaScripts";
        console.log(demo)
    }
}
// khác nhau về Hosting : đưa lên trên đầu
var a = 1;
// từ khóa var được hỗ trợ hosting
// khi trình duyệt đọc : Nhấc định nghĩa biến lên trên đầu
var a ;
a = 1;
// var có thể viết như này :
a = 1;
var a;
// vì đoạn code sẽ tương đương với 
var a;
a = 1 
// nhấc định nghĩa biến lên đầu 
console.log(a)
// còn đối với let,const sẽ bị lỗi vì không hỗ trợ hosting
// b = 2; 
// let b;
// console.log(b)
// 2.Const / Var,let : Assignment(gán lại các biến)
// const chỉ được gán một lần vì là hằng
// không thể sử dụng được toán tử gán thứ hai cho chính biến const
// const x = 1;
// x = 2;
// console.log(x)
// Bạn rất có thể bị lừa
const  course = {
    name : 'Javascripts',
    like : true
}
course.name = "PHP";
console.log(course)
// vẫn đỗi được vì ở đây là gán lại thuộc tính name của 
// object cho course chứ không phải gán lại const
// nếu viết :
// course = {}
// console.log(course)
// sẽ bị lỗi