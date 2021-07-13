// Fake API (Mock API)
// Rest API định nghĩa rõ ràng những hành động dựa trên những
// phương thức của giao thức HTTP
// 4 hành động để thao tác với dữ liệu gọi là CRUD
/*
    - Create : Tạo mới  -> POST
    - Read : lấy dữ liệu về -> GET
    - Update : sửa dữ liệu -> PUT / PATCH
    - Delete : xóa dữ liệu -> DELETE
*/
// Postman
var courseAPI = "http://localhost:3000/course";
fetch(courseAPI)
  .then(function(respone){
      return respone.json();
  })
  .then(function(courses){
     console.log(courses)
  })