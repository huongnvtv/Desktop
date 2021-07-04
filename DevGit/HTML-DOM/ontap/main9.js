/* Hãy viết ứng dụng ẩn và hiện một thẻ div bằng Javascript bằng cách tạo 
ra 2 button,khi click vào button1 thì ẩn thẻ div và khi click vào
 button2 thì hiển thị thẻ div. */
// gợi ý:
/*
Chúng ta sử dụng thuộc tính CSS display:block để hiển thị thẻ div và
 thuộc tính display:none để ẩn thẻ div. Nhưng vấn đề là ta phải sử dụng 
 Javascript để làm điều này nên ta phải sử dụng
 cú pháp dưới đây để thay đổi giá trị cho thuộc tính CSS display
*/
var input1 = document.getElementById('btn1');
var input2 = document.getElementById('btn2');
var divElement = document.getElementById('content');
input1.onclick = function(){
    divElement.style.display = 'none'; 
}
input2.onclick = function(){
    divElement.style.display = 'block'; 
}