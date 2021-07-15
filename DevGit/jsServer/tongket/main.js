// xây dựng một ứng dụng quản lí sinh viên qua từng lớp
var classAPI = "http://localhost:3000/class";
var studentAPI = "http://localhost:3000/student";
function start(){
    getListClass(renderClass);
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
                <button>xóa</button>
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
var btnCreate = document.querySelector('#btn-add');
console.log(btnCreate)
btnCreate.addEventListener('click',function(){
    var btnString1 = '<br><button id = "add-class">Thêm lớp</button>'
    var btnString2 = '<button id= "add-student">Thêm sinh viên</button>'
    btnCreate.insertAdjacentHTML('afterend',btnString1+btnString2)
    btnCreate.removeAttribute('onclick')
})
function addClass(){

}