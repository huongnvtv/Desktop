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
function courseEdit(data, id, callback){
    fetch(courseAPI +"/" +id, {
        method : 'put',
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
function handleDeleteCourse(id) {
    fetch(courseAPI + "/" +id, {
        method : 'delete',
        headers: {
         'Content-Type': 'application/json'
       }
    })
     .then(function(respone){
         return respone.json();
     })
     .then(function(){
        var courseItem = document.querySelector('.course-item-'+id);
        if(courseItem){
            courseItem.remove();
        }
     })
}

function editCourse(id){
    var inputName = document.querySelector('input[name ="name"]');
    var inputds = document.querySelector('input[name ="Description"]');
    var createButton = document.querySelector('#create');
    var data1 = {}
    getCourses(function(data){
        var datavalue = data.find(function(item){
            return item.id == id;
        })
        inputName.value = datavalue.name;
        inputds.value = datavalue.description;
        createButton.innerText = "Lưu"
        data1.name = datavalue.name;
        data1.description = datavalue.description;
    })
    createButton.onclick = function(){
        courseEdit(data1, id, function(){
            getCourses(renderCourse)
        })
    }
}
function renderCourse(courses){
    var listCourseBlock = document.querySelector('#list-course');
    var html = courses.map(function(course){
          return `
             <li class = "course-item-${course.id}">
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                <button onclick = "handleDeleteCourse(${course.id})" >xóa</button>
                <button onclick = "editCourse(${course.id})" >sửa</button>
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
            name : name.value,
            description : description.value
        }
        createCoures(formData,function(){
            getCourses(renderCourse)
        })
        name.value = ""
        description.value = ""
    }
}