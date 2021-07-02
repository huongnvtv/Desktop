//Đây là thuộc tính của ElementNode
// ClassList -Property
// add : thêm class vào Element
// contains : kiểm tra xem class có nằm trong element này hay không
// remove : xóa class khỏi element
// toggle : nếu có class trong element thì xóa bỏ,nếu mà không có 
// thì thêm class vào elementNode
var divElement = document.querySelector(".box");
console.log(divElement.classList)
console.log(divElement.classList[0])
divElement.classList.add('red','blue') // thêm 2 class vào element
// kiểm tra class có tồn tại trong element hay không
console.log(divElement.classList.contains('red'))
// xóa class trong element
divElement.classList.remove('red')
setInterval(() =>{
    divElement.classList.toggle('red')
},1000)