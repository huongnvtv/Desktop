var headingElement =document.querySelector('h1');
// để lấy ra text trong textNode element có 2 cách
// cách 1: dùng innerText
// cách 2: dùng textContent
console.log(headingElement.textContent);
console.log(headingElement.innerText);
// để sửa nội dung text
headingElement.innerText ='demo';
// mở rộng thêm 
headingElement.textContent='<i>demo1<i>';
// mở rộng thêm part 2 nếu dùng template string khoảng trắng sẽ chuyển
// về thẻ <br/>
// còn đối với textContent thì khoảng trắng là khoảng trắng
headingElement.innerText =`

hello
`
var demo =document.querySelector('.heading');
console.log(demo);
console.log(demo.innerText)
console.log(demo.textContent)
// innerText là lấy ra đoạn text trong thẻ element bỏ qua các tên thẻ
// con bên trong trả lại đoạn text giống như nhìn thấy trên trình duyệt
// css cho mất text đi thì innerText trả ra cũng mất
// textContent là lấy ra nguyên bản đoạn text trong element kể cả khoảng
// trắng trong đấy 
// css mất text không ảnh hưởng,trả lại tất cả những gì bên trong thẻ tag
// đã là nội dung nằm giữa thẻ tag là textNode
