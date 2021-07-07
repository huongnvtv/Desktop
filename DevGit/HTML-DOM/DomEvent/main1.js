//1. sự kiện Blur :xảy ra khi đối tượng mất tiêu điểm ,hay được sử 
// dụng trong thẻ input khi người dùng 
// nhâp vào thẻ input và click chuột ra ngoài thẻ input
// 2.Sự kiện focus : xảy ra khi một phần tử được lấy làm tiêu điểm
var input1 = document.querySelector('input[type ="text"][name = "blur1"]')
input1.onblur = function(){
    input1.style.backgroundColor = '#AAA'
}
var input2 = document.querySelector('input[type ="text"][name = "focus1"]')
input2.onfocus = function(){
    input2.style.textTransform = "capitalize";
    input2.style.color = 'red'
}
// kết hợp giữa onblur và onfocus
var input3 = document.querySelector('input[type ="text"][name = "and"]')
input3.onblur = function(){
    input3.style.backgroundColor = 'skyblue'
}
input3.onfocus = function(){
    input3.style.textTransform = "capitalize";
    input3.style.backgroundColor = 'orange'
}