// 3 trạng thái của promise:
// 1.pending
// 2.fullfiled
// 3.reject
/*
  Promise sinh ra để xử lí các vấn đề bất đồng bộ
   trước khi có promise thì chúng ta thường sử dụng callback hell
   rất khó nhìn code rối rắm 
*/
var promise = new Promise(
    // Executor
    function(resolve, reject){
    // Logic
    // Thành công : resolve()
    // Thất bại : reject()
    resolve([
        {
            id :1,
            name : 'javascripts'
        }
    ])
    }
)
promise
   .then(function(course){
       console.log(course)
   })
   .catch(function(){
       console.log('fail')
   })
   .finally(function(){
       console.log('done')
   })