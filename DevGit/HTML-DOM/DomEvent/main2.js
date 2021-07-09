// 1.onchange : xảy ra khi giá trị một phần tử đã được thay đổi
// Đối với các nút radio và checkboxes, sự kiện thay đổi xảy ra khi 
// trạng thái đã chọn đã được thay đổi.
function myFunction(){
    var selectElement = document.getElementById('mySelect');
    console.log(selectElement.value)
}
// 2.onended : thực thi khi âm thanh kết thúc
// Sự kiện này hữu ích cho các thông báo như
// "cảm ơn đã lắng nghe", "cảm ơn đã xem", v.v.
function myFunction1(){
    alert('cảm ơn bạn đã lắng nghe!')
}