// 1.Get checkbox input NodeList lưu vào biến checkboxNodes
// 2.Get checkbox input element có type="checkbox" value="1" 
// lưu vào biến checkbox1Element
// 3.Get checkbox element có attribute checked nhưng không có 
// attribute disabled lưu vào biến checkboxCheckedAndNotDisabled
// 4.Get checkbox element có attribute disabled nhưng không có 
// attribute checked lưu vào biến checkboxDisabledAndNotChecked
// Get checkbox element có attribute checked và disabled lưu vào
//  biến checkboxCheckedAndDisabled

// Làm bài tập tại đây
var checkboxNodes =document.querySelectorAll("input[type=checkbox]");
// console.log(checkboxNodes)
var checkbox1Element=document.querySelector("input[type='checkbox'][value='1']");
// console.log(checkbox1Element)
var checkboxCheckedAndNotDisabled =document.querySelector("input[type='checkbox'][checked]:not([disabled])")
// console.log(checkboxCheckedAndNotDisabled)
var checkboxDisabledAndNotChecked =document.querySelector("input[type='checkbox'][disabled]:not([checked])")
// console.log(checkboxDisabledAndNotChecked)
var checkboxCheckedAndDisabled =document.querySelector("input[type='checkbox'][checked][disabled]")
// console.log(checkboxCheckedAndDisabled)
