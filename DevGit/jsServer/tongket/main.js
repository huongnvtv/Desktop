// xây dựng một ứng dụng quản lí sinh viên qua từng lớp
var classAPI = "http://localhost:3000/class";
function start(){
    getListClass();
}
function getListClass(){
    fetch(classAPI)
       .then(function(respone){
            return respone.json();
       })
       .then(function(data){
           console.log(data)
       })
}
start();