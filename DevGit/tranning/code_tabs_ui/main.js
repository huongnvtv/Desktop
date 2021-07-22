const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document) 
const tabs = $$('.tab-item');
const pains = $$('.tab-pane');
const tabActive = $('.tabs .active');
const line = $('.tabs .line ');
line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + 'px';
tabs.forEach((tab,index) =>{
    const pain = pains[index];
    tab.onclick = function(){
        console.log(pain)
        $('.tabs .active').classList.remove('active');
        $('.tab-content .active').classList.remove('active');
        this.classList.add('active');
        pain.classList.add('active');
        line.style.left = this.offsetLeft + "px";
        line.style.width = this.offsetWidth + 'px';
    }
})