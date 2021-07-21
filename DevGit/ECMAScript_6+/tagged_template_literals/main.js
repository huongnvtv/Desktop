function highlight([first, ...strings], ...values){
    return  values.reduce(function(total, currentValue){
        return [...total,`<span>${currentValue}</span>`,strings.shift()]
    },[first]).join('')
    
}
var brand = 'F8';
var course = "Javascript";
var htmls = highlight`Học lập trình ${course} tại ${brand}!`;
console.log(htmls)