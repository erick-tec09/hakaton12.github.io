
const overlay = document.getElementById('overlay');
const btn = document.getElementById('btn');


const icon = document.getElementById('icon');
const closee = document.getElementById('close');
const aceptar= document.getElementById('aceptar');



btn.addEventListener('click',()=>{

    overlay.classList.add('active');
  
})

icon.addEventListener('click',()=>{

    overlay.classList.remove('active');
})
closee.addEventListener('click',()=>{

    overlay.classList.remove('active');
})
aceptar.addEventListener('click',()=>{

    overlay.classList.remove('active');
})