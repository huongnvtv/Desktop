// StopPropagation : là tránh sự kiện nổi bọt
// nghĩa là vd sự kiện onclick của element bên trong khi thực thi
// thì sẽ thực thi luôn sự kiện onclick của element bên ngoài của
// element đấy
document.querySelector('div').onclick = function(){
    console.log('DIV')
}
document.querySelector('button').onclick = function(e){
    e.stopPropagation();
    console.log('click me!')
}