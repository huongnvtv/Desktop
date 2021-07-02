var divElement = document.querySelector(".box");
console.log(divElement.style)
divElement.style.width ="100px";
divElement.style.height ="100px";
divElement.style.backgroundColor ="orange";
// cách 2:Viết thống nhất lại
Object.assign(divElement.style,{
    width :'100px',
    height :'100px',
    backgroundColor :'red'
})
// get ra giá trị thuộc tính css
console.log(divElement.style.backgroundColor)