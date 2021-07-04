var aElements = document.links;
console.log(aElements);
for(var i = 0; i < aElements.length; i++){
    aElements[i].onclick = function(e){
        if(!e.target.href.startsWith('https://fullstack.edu.vn')){
            e.preventDefault();
            // nếu href không bắt đầu với https://fullstack.edu.vn
            // thì bỏ hành vi mặc định của thẻ đấy
        }
    }
}
// làm ví dụ 2
var ulElement = document.querySelector('ul');
ulElement.onmousedown = function (e){
    e.preventDefault();
}
// onmousedown :sự kiện nhấn chuột xuống