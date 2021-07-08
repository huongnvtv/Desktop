// viết chương trình javaScript thêm hàng vào bảng 
var tableElement = document.getElementById('sampleTable');
console.log([tableElement])
var k = tableElement.children.length;
function insert_Row(){
    var i = tableElement.children.length +1;
    var html = "<tr><td>Hàng " + (i+1) +" ô1</td><td> Hàng " +(i+1)+" ô2</td></tr>"
    tableElement.insertAdjacentHTML('beforeend',html)
    k = i
}
function delete_Row(){
    var trElement = tableElement.lastElementChild;
    trElement.remove();
}
