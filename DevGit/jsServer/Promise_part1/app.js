// 1.SYNC : đồng bộ 
// Thằng nào viết trước chạy trước thằng nào viết sau chạy sau
// vd:
console.log(1)
console.log(2)
// chạy lần lượt in ra 1 rồi in ra 2
setTimeout(function(){
    console.log(1)
},1000)
console.log(2)
// theo tư duy đồng bộ thì thằng 1 in ra trước thằng 2 in ra sau
// 2.ASYNC :bất đồng bộ
// một số hàm dùng tạo ra bất đồng bộ :
// setTimeout ,setInterval,fetch,XMLHttpRequest ,đọc file
// request animation frame
// callback
