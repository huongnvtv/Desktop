// thêm một thẻ vào Dom
/*
    1.Để thêm HTML vào một vị trí nào đó thì ta sử 
    dụng thuộc tính element.innerHTML = "nội dung html"
    2.Để thêm HTML vào trước thẻ con nào đó thì ta dùng
     hàm element.insertBefore()
    3.Để thêm HTML vao sau thẻ con nào đó thì ta dùng hàm 
     element.insertAfter()
    4.Để thêm HTML vào cuối (append) thì ta dùng hàm 
     element.appendChild()
*/
var addElement = document.getElementById('title');
var buttonElement = document.getElementById('button_add');
var divElement = document.getElementById('result');
buttonElement.addEventListener('click',function(){
    var title = addElement.value;
    if(title = ""){
        alert("Nhập vào giá trị");
    }else{
        var html = '<div style="background:red; margin: 5px; padding:5px; color:#FFF">'+addElement.value+'</div>';
        divElement.insertAdjacentHTML('afterbegin',html)
    }
    addElement.value = ''
})