/*

*/
var changeSearch = document.getElementById('show_search_advance');
var getSearch = document.getElementById('search_advance');
changeSearch.onclick = function(){
    if(changeSearch.textContent == 'Bỏ tìm kiếm nâng cao'){
        changeSearch.innerText = 'Tìm kiếm nâng cao';
        getSearch.style.display = 'none';
    }else{
        getSearch.style.display= 'table-row'
        changeSearch.innerText = 'Bỏ tìm kiếm nâng cao'
    }
}