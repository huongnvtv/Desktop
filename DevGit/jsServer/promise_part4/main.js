// nếu đang then giữa chừng thì bị lỗi thì bắt bằng catch
function sleep(ms){
    return new Promise(function(resolve, reject){
         setTimeout(resolve, ms);
    })
}
sleep(1000)
  .then(function(){
      console.log(1);
      return sleep(1000);
  })
  .then(function(){
      console.log(2);
      return new Promise(function(resolve,reject){
          reject('có lỗi 1')
          resolve()
      })
  })
  .then(function(){
      console.log(3)
      return new Promise(function(resolve,reject){
        reject('có lỗi 2')
    })
  })
  .then(function(){
      console.log(4)
  })
  .catch(function(error){
      console.log(error)
  })

  // 1.Promise.resolve
  // 2.Promise.reject
  // 1.Promise.all
  var promise1 = Promise.resolve('sucess')
  promise1
    .then(function(result){
        console.log(result)
    })
    var promise2 = Promise.reject('fail')
    promise2
      .then(function(result){
          console.log(result)
      })
      .catch(function(err){
          console.log(err)
      })
// Promise.all dùng để chạy song song các promise
// khi thấy các promise không phụ thuộc vào nhau
var pro1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve([1])
    },2000);
})
var pro2 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve([2,3])
    },5000);
})
// vào then khi cả 2 là resolve nếu bị catch thì sẽ trả ra 
// thằng bị catch
// đợi xong hết mới console.log ra
Promise.all([pro1, pro2])
   .then(function(result){
       console.log(result)
       var result1 = result[0];
       var result2 = result[1];
       console.log(result1.concat(result2))
   })
   .catch(function(err){
       console.log(err)
   })

