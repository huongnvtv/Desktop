var divElements = document.getElementsByTagName('div');
console.log(divElements)
function change_backgroud(){
    for(var i = 0; i < divElements.length; i++){
        if((i+1) % 2 ==0) divElements[i].style.color = 'red';
        else divElements[i].style.color = 'blue'
    }
}