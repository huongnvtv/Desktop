// xóa element
var inputElements = document.querySelectorAll('input[type = "button"]');
console.log(inputElements);
var n = inputElements.length;
for(var i = 0; i < inputElements.length; i++){
   inputElements[i].addEventListener('click',function(){
       var grandParentElement = this.parentElement.parentElement;
       grandParentElement.remove();// dùng để xóa 1 element
       // this trỏ đến đối tượng đang xét == e.target
   })
}

