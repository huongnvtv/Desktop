// 1. Template Literals
// 2. Multi-line String : viết nhiều dòng
const courseName = "JavaScript";
const coin = "1000$";
// const description = "Name : " + courseName ;
// dùng toán tử cộng để nối chuỗi nhưng nếu dùng template String
// thì sẽ dc dùng theo kiểu nội suy 
const description = `Name :${courseName} ${coin}`
// dùng template String vẫn có những quy tắc khi sử dụng 
// giống dẫu nháy đơn và nháy khép
// vd: 
console.log(description)
console.log(`\\`)
console.log(`Nội suy với \${}`)
// 2. Multi-line String : viết nhiều dòng
const line = "Line 1 \nLine 2 \nLine 3 \nLine 4 \nLine 5 \n"
console.log(line)
// nhưng khi dùng với template string 
const line2 =`Line 1
Line 2
Line 3
Line 4`
console.log(line2)
// chỉ cần enter xuống dòng là ok 