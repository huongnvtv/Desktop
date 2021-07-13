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
// var courseAPI = "http://localhost:3000/course";
// fetch(courseAPI)
//   .then(function(respone){
//       return respone.json();
//   })
//   .then(function(courses){
//      console.log(courses)
//   })

var courseAPI = 'http://localhost:3000/course';

function start(){
    getCourses(renderCourse)
    handleCreateForm()
}
start();

function getCourses(callback){
    fetch(courseAPI)
       .then(function(respone){
           return respone.json();
       })
       .then(callback)
}

function createCoures(data, callback){
   fetch(courseAPI, {
       method : 'post',
       body : JSON.stringify(data),
       headers: {
        'Content-Type': 'application/json'
      }
   })
    .then(function(respone){
        return respone.json();
    })
    .then(callback)
}
function renderCourse(courses){
    var listCourseBlock = document.querySelector('#list-course');
    var html = courses.map(function(course){
          return `
             <li>
                <h4>${course.name}</h4>
                <p>${course.description}</p>
             </li>
          `
    })
    var content = html.join('');
    listCourseBlock.innerHTML = content;
}

function handleCreateForm(){
    var createbtn = document.querySelector('#create');
    createbtn.onclick = function(){
        var name = document.querySelector('input[name = "name"]')
        var description = document.querySelector('input[name = "Description"]')
        var formData = {
            name : name,
            description : description
        }
        createCoures(formData)
    }
}