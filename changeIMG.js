const body = document.querySelector('body');

const box = document.querySelector('.box');
const node = document.querySelectorAll('img');
/*
const node = document.querySelectorAll('img');

for (let i = 0; i < node.length; i++) {
    node[i].addEventListener('click',  function() {
        body.style.backgroundImage = "url("+this.src+")";
    });
}
*/

box.addEventListener('click', function(e) {
    
    if(e.target.nodeName==='IMG') {
        body.style.backgroundImage = "url("+e.target.src+")";
    }
});
