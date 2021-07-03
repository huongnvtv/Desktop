// bài tập về Dom attribute
var headingElement = document.querySelector('h1');
console.log(headingElement)
headingElement.title ="thẻ heading";
headingElement.className = 'demo'
headingElement.setAttribute('id','heading')
console.log(headingElement.title)
console.log(headingElement.getAttribute('title'))