function createTable(){
    rn = window.prompt("Nhập vào số hàng", 1);
    cn = window.prompt("Nhập vào số cột",1);
    var tableElement = document.getElementById('myTable');
    for(var r = 0; r < parseInt(rn,10); r++){
        var x = tableElement.insertRow(r);
        for(var c = 0; c < parseInt(cn,10); c++){
            var y = x.insertCell(c);
            y.innerHTML = "Row-" +r +" Column-" +c;
        }
    }
}