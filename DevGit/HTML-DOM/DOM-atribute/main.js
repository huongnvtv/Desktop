var headingElement =document.querySelector('h1');
console.log(headingElement)
//Thêm atrribute chỉ cần lấy element .tên attribute là ok
headingElement.style ="color:red"
headingElement.id ='heading'
//lưu ý khi thêm attribute class vào element thì phải dùng .className
// vì .class sẽ trùng với từ khóa trong js
headingElement.className='demo'
// cách này dùng seter
// cách thứ 2 :tạo ra 1 attribute tên ngẫu nhiên
// lưu ý với cách này thì khi thêm attribute là class thì không cần viết
// là className mà chỉ cần viết là class
// element.setAttribute('tên attribute','giá trị')
var pElement =document.querySelector('p');
pElement.setAttribute('class','demo')
// để lấy ra giá trị atttribute thì dùng getAttribute('tên attribute')
// nếu thuộc tính hợp lệ của Element thì chỉ cần .tên attribute
// thuộc tính hợp lệ là thuộc tính mà trong thẻ đấy có thể có thuộc tính 
// đấy vd :thẻ h1 thì không thể có href nhưng có id ,class,style
console.log(pElement.getAttribute('class'))

var pElement = document.querySelector('p');
