// trường hợp 1 :lấy ra giá trị value của thẻ input type =text
var inputValue;
var inputElement = document.querySelector('input[type="text"]');
inputElement.oninput = function(e){
    inputValue = e.target.value;
}
// oninput là lấy ra value của người dùng nhập ngay
console.log(inputValue)
// trường hơp 2 :kiểm tra thẻ input có type =checkbox có check hay ko
var inputCheckbox = document.querySelector('input[type="checkbox"]');
inputCheckbox.onchange = function(e){
    console.log(e.target.checked);
}
// onchange là lấy ra value khi thay đổi giá trị của value
var selectElement = document.querySelector('select');
selectElement.onchange = function(e){
    console.log(e.target.value);
}
// keyUp và keyDown :Nhấc phím lên và hạ phím xuống
// keydown là bấm xuống,keyup là nhấc lên
var input2Element = document.querySelectorAll('input[type="text"]')[1];
console.log(input2Element);
input2Element.onkeydown = function(e){
   // console.log(e.target.value)
    console.log(e.which) // lấy ra mã ASCII từ phím vừa nhập
    switch(e.which){
        case 27:
            console.log('exit');
            break;
    }
    // xử lí sự kiện khi người dùng nhập 1 phím nào đó sẽ có thao tác gì
}
// có thể dùng ngay cho cả đối tượng document 
document.onkeyup =function(e){
    switch(e.which){
        case 27:
            console.log('Exit');
            break;
        case 13:
            console.log('Send chat');
            break;    
    }
}