//innnerHTML và outerHTML
// đây là 2 thuộc tính của element node
// innerHTML(thêm vào bên trong) có thể thêm được một element node vào một element
// cho trước cũng như thêm được cả text node vào element cho trước
var divElement =document.querySelector('.menu');
console.log(divElement);
divElement.innerHTML ='<p>New Heading<p>';
divElement.innerHTML ="test";
divElement.innerHTML ='<h1 style ="color :red;">heading</h1>'
// getter để lấy element ra
console.log(divElement.innerHTML)
// outerHTML là ghi đè chính nó ,nghĩa là tất cả thẻ bên trong của nó
// đã được ghi đè 
divElement.outerHTML ="<span>demo</span>"