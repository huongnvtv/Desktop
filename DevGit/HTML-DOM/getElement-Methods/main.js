var headingNode =document.getElementById('heading');
// console.log(headingNode)
console.log({
	element : headingNode
})
var getClassName =document.getElementsByClassName("t1"); /* vì getByClassName lấy ra nhiều phần tử nên 
getElements ở dạng số nhiều, dùng vòng lặp for để lặp qua đối tượng này  */
console.log(getClassName)
var getTagName =document.getElementsByTagName("h1");
console.log(getTagName)
var queryNode =document.querySelector('#heading');
console.log(queryNode)
console.log(document.forms)
console.log(document.forms['form-1'])
console.log(document.forms.formDemo)