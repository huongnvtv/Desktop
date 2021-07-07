// viết chương trình javaScript thêm hàng vào bảng 
var tableElement = document.getElementById('sampleTable');
console.log([tableElement])
function insert_Row(){
    var trElementEnd = tableElement.children[0].lastElementChild;
    var i = tableElement.children.length +1;
    var html = "<tr><td>Hàng " + (i+1) +" ô1</td><td> Hàng " +(i+1)+" ô2</td></tr>"
    tableElement.insertAdjacentHTML('beforeend',html)
}
