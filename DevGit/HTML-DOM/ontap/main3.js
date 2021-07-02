// var getElement =document.getElementById("search-advance");
// console.log(getElement)
// var getFirstElement =getElement.getElementsByTagName('td');
// console.log(getFirstElement[0])
// cách 1 :lấy ra element 
var trElement =document.getElementsByTagName("tr");
console.log(trElement)
var firstTrElement = trElement[0];
console.log([firstTrElement])
console.log(firstTrElement.cells)
console.log(firstTrElement.localName)
console.log(firstTrElement.children)