var selectElement = document.getElementById('colorSelect');

function removecolor(){
    var options = selectElement.options;
    // trả về một danh sách options hiện có
    // truy cập từng phần tử thông qua selectedIndex
    console.log(options[selectElement.selectedIndex].text)
    selectElement.remove(selectElement.selectedIndex)
}