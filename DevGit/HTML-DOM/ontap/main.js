// Làm bài tập tại đây
var checkboxNodes =document.querySelectorAll("input[type=checkbox]");
console.log(checkboxNodes)
var checkbox1Element=document.querySelector("input[type='checkbox'][value='1']");
console.log(checkbox1Element)
var checkboxCheckedAndNotDisabled =document.querySelector("input[type='checkbox'][checked]:not([disabled])")
console.log(checkboxCheckedAndNotDisabled)
var checkboxDisabledAndNotChecked =document.querySelector("input[type='checkbox'][disabled]:not([checked])")
console.log(checkboxDisabledAndNotChecked)
var checkboxCheckedAndDisabled =document.querySelector("input[type='checkbox'][checked][disabled]")
console.log(checkboxCheckedAndDisabled)