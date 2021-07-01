// 1. Lấy text node có content là Text 1 và gán cho biến textNode1
// 2. Lấy text node có content là Text 2 và gán cho biến textNode2
// 3. Lấy h1 element node và gán cho biến h1Element
var divElement = document.querySelector('div');
var objDiv = {key :divElement};
console.log(objDiv)
console.log(objDiv.key.childNodes)
// cách 1:
// var chidNode = objDiv.key.childNodes;
// var textNode1 = chidNode[0];
// var textNode2 = chidNode[2];
// var h1Element = chidNode[1];
// console.log(textNode1)
// console.log(textNode2)
// console.log(h1Element)
// cách 2:
var h1Element = objDiv.key.children[0];
console.log(h1Element)
var textNode1 = objDiv.key.firstChild;
console.log(textNode1);
var textNode2 = objDiv.key.lastChild;
console.log(textNode2)