// xây dựng một ứng dụng quản lí sinh viên qua từng lớp
var classAPI = "http://localhost:3000/class";
var studentAPI = "http://localhost:3000/student";
var inputNameElement = document.querySelector('input[name= "name"]');
var inputDateElement = document.querySelector('input[name= "date"]');
var btnCreate = document.querySelector('#btn-add');
function start(){
    getListClass(renderClass);
    getListClass(renderShowInputClass);
    handCreateForm();
}
function getListClass(callback){
    fetch(classAPI)
       .then(function(respone){
            return respone.json();
       })
       .then(callback)
}
function renderClass(classes){
    var boxClassElement = document.querySelector('#class-box');
    var mappingClasses =  classes.map(function(itemClass){
        return `
           <div style ="margin-bottom :20px" class = "classes-${itemClass.id}">
            <ul style ="display : inline" >${itemClass.className} sỉ số lớp :${itemClass.siSo}</ul>
            <button id="btn-${itemClass.id}" onclick = "showStudent(${itemClass.id})" >Hiển thị danh sách sinh viên</button>
            <br>
           </div>
           `
    })
    var content = mappingClasses.join('');
    boxClassElement.innerHTML = content;
}
function getListStudent(callback){
    fetch(studentAPI)
       .then(function(respone){
           return respone.json();
       })
       .then(callback)
}
function renderStudentWithId(id,listStudent){
    var divElement = document.querySelector(".classes-"+id);
    var htmls = listStudent.map(function(student){
        return  `<li class ="student-${student.id}">
                <h4>${student.name}</h4>
                <p>${student.date}</p>
                <button>Sửa</button>
                <button onclick = "handDeleteStudent(${student.id})">xóa</button>
                </li>`
    })
    var divHTML = "<div class = 'class-sub-"+id +"'></div>";
    divElement.insertAdjacentHTML("beforeend",divHTML)
    var subDivElement = document.querySelector('.class-sub-'+id);
    subDivElement.insertAdjacentHTML("beforeend",htmls.join(''))
    if(subDivElement.style.display == "block"){
        subDivElement.style.display = "none";
    }else{
        subDivElement.style.display = "block"
    }
  
}
function showStudent(id){
    getListStudent(function(data){
       var studentInclass = data.filter(function(itemStudent){
           return itemStudent.idLop == id;
       })
        renderStudentWithId(id,studentInclass);
        var btnElement = document.getElementById('btn-'+id).removeAttribute('onclick')
    })
}
start();

function renderShowInputClass(classes){
    var showClassElement = document.getElementById('list-class');
    var htmls = classes.map(function(itemClass){
         return `<option >${itemClass.className}</option>`
    })
    showClassElement.innerHTML = htmls.join('')
}
function createStudent(data,callback){
    fetch(studentAPI, {
        method : 'post',
        body : JSON.stringify(data),
        headers: {
         'Content-Type': 'application/json'
       }
    })
     .then(function(respone){
          return respone.json();
     })
     .then(callback);
}
function handCreateForm(){
    btnCreate.onclick = function(){
        var nameitem = inputNameElement.value;
        var dateitem = inputDateElement.value;
        var showClassElement = document.getElementById('list-class');
        var optionList =showClassElement.options;
        var index = showClassElement.selectedIndex;
        var className = optionList[index].text;
        getListClass(function(data){
            var result = data.find(function(item){
                return item.className == className;
            })
            var formData = {
                name : nameitem,
                date : dateitem,
                idLop : result.id
            }
            createStudent(formData,function(){
                showStudent(result.id);
            })
        })
    
    }
}
function handDeleteStudent(id){
    
}