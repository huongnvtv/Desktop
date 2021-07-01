// 1.Từ biến h1Element
// hãy lấy tên thẻ (tag) của element này và lưu vào biến h1TagName
// 2.Lấy element ngang cấp kế tiếp của h1Element
// và lưu vào biến h1NextElementSibling
// Làm bài tập tại đây
var h1Element =document.querySelector('h1');
console.log([h1Element])
var h1TagName= [h1Element][0].localName;
console.log(h1TagName)
console.log([h1Element][0].nextElementSibling)
console.log(h1Element.tagName)
console.log(h1Element.nextElementSibling)