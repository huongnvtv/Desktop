// giá trị mặc định cho tham số truyền vào của function
function logger(log = "giá trị mặc định"){
    console.log(log);
}
logger()
// nếu không truyền tham số đầu vào thì mặc định sẽ là undefined
// nhưng trong ES6 chỉ cần gán cho một giá trị mặc định thì sẽ thay
// thế bằng giá trị mặc định
logger('message...')
// nếu truyền tham số vào thì sẽ là giá trị đấy
// trong thực tế sẽ thường dùng khi định nghĩa các hàm có những
// tham số không bắt buộc nhập
// vd:
function logger2(log, isAlert = false){
    if(isAlert == true) alert(log);
    console.log(log);
}
logger2('message...', true);
//vd2:
function logger3(log, type = 'log'){
    console[type](log);
}
logger3('message3','warn')