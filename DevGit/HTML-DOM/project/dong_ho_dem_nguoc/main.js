var h = null; // giờ
var m = null; // phút
var s = null; // giây
var timeout = null; // Timeout
function start(){
    // lấy giá trị ban đầu 
    if (h == null){
        var getValueH = document.getElementById('h_val').value;
        var getValueM = document.getElementById('m_val').value;
        var getValueS = document.getElementById('s_val').value;
        h = parseInt(getValueH);
        m = parseInt(getValueM);
        s = parseInt(getValueS);
    }
    // nếu số giây = -1 thì giảm số phút xuống 1 và setup lại s =59
    if (s == -1) {
        m-- ;
        s = 59;
    }
    // nếu số phút = -1 thì giảm số giờ xuống 1 và setup lại m =59
    if (m == -1){
        h--;
        m = 59;
    }
    // nếu số giờ = -1 hết giờ
    if (h == -1){
        clearTimeout(timeout);
        alert('hết giờ');
        return false;
    }
    // hiển thị lên đồng hồ
    document.getElementById('h').innerHTML = h.toString();
    document.getElementById('m').innerHTML = m.toString();
    document.getElementById('s').innerHTML = s.toString();
    // setTimeout sau 1s giảm 1s
    timeout = setTimeout(function(){
        s --;
        start();
    },1000)
}
function stop(){
    clearTimeout(timeout);
    // dừng quá trình đợi 
}