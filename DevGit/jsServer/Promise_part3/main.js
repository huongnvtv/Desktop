var promise = new Promise(
    function(resolve, reject){
        resolve()
    }
)
promise
  .then(function(){
      // return cái giá thì có thể nhận được value đó trong
      // then tiếp theo
      // kết quả trả về của function trc là tham số đầu vào
      // của function sau.
      return 1;
  })
  .then(function(data){
      console.log(data);
      return 2;
  })
  .then(function(data){
    console.log(data);
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve([1,2,3])
        },3000)
    })
  })
  .then(function(data){
      console.log(data)
  })
  .finally(function(){
      console.log('done')
  })
  // nếu không return gì ,hoặc return ko phải là promise
  // thì sẽ chạy ngay then tiếp theo
  // nếu là 1 promise thì phải chờ hoàn thành thì mới chạy
  // then tiếp theo
  
  // viết function sau cứ sau 1 giây sẽ chạy 1,2,3
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
        return sleep(1000);
    })
    .then(function(){
        console.log(3)
    })