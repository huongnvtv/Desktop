// có 2 cách sử dụng Dom event:
// 1.Attribute events
// 2.Assign event using the element node
// Khi sử dụng Dom event thì thêm tiền tố on vào trc event
// vd: onclick,onblur,...
// 1.cách làm :thêm sử kiện vào ngày phần attribute của element
// 2.cách làm: viết mã js để lắng nghe sự kiện

// var firstElement = document.querySelector('h2');
// console.log(h1Element)
// firstElement.onclick =function(){
//     console.log(Math.random())
// }
// sử dụng mouseEvent để lấy ra element node đang click
var h1Elements = document.querySelectorAll('h2');
for(var i=0; i< h1Elements.length; i++){
    h1Elements[i].onclick =function(mouseEvent){
        console.log(mouseEvent.target)
    }
}
