// 1. Get element có class box và lưu vào biến boxElement
// 2. Từ biến boxElement get elements có class children 
// lưu vào biến childrenElements
var boxElement =document.querySelector('.box')
console.log(boxElement)
var childrenElements =boxElement.getElementsByClassName('children')
console.log(childrenElements)