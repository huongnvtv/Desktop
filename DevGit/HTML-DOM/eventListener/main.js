var buttonElement = document.getElementById('btn');
btn.addEventListener('click',function(){
    console.log(Math.random())
});
function viec1 (){
    console.log('hello')
}
btn.addEventListener('click',viec1)
setTimeout(function(){
    // xóa bỏ 1 sự kiện dùng removeEventListener
    btn.removeEventListener('click',viec1)
},3000)