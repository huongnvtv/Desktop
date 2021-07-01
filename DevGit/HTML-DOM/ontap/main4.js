// Thêm 3 thẻ li có nội dung text tùy ý vào thẻ ul trong div 1 ,div 2
// Thay thế nội dung HTML của div 2 bằng thẻ h1 có nội dung text tùy ý
var getUlElement =document.getElementsByTagName('ul');
//Thêm 3 thẻ li có nội dung text tùy ý vào thẻ ul trong div 1 
var getUl1 =getUlElement[0];
console.log([getUl1])
getUl1.innerHTML = "<li>item1-1</li><li>item2-1</li><li>item3-1</li>"
var getUl2 =getUlElement[1];
getUl2.innerHTML ="<li>item1-2</li><li>item2-2</li><li>item3-2</li>"
getUl2.outerHTML ='<h1 style="color : red">thay thế</h1>'
var divElement2 =document.querySelector('body > div:nth-child(2)');
divElement2.outerHTML ="<h1>demo</h1>"
// trong html có thuộc tính contenteditable dùng để chỉnh sửa text
// của các thẻ như một thẻ input 
// khi khai báo contenteditable trong thẻ cha thì tất cả các thẻ con
// có thể được chỉnh sửa text