const fundo = document.querySelector('.fundo');
const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
btn.addEventListener('mouseover',() =>{
    fundo.classList.add('hover');
    container.classList.add('hover');
});


btn.addEventListener('mouseout',() =>{
    fundo.classList.remove('hover');
    container.classList.remove('hover');
});

var btn2 = document.getElementById("btn2");
var reif = document.getElementById("reif");

btn2.addEventListener("mouseover", function() {
    reif.classList.add("subir");
});

btn2.addEventListener("mouseout", function() {
    reif.classList.remove("subir");
});

let ul = document.querySelector('nav .ul');

function openMenu(){
    ul.classList.add('open');
}
function closeMenu(){
    ul.classList.remove('open');
}





