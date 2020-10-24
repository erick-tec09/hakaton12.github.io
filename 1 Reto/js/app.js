
const caja = document.getElementById('caja');
const lista = document.getElementById('lista');
const icon = document.getElementById('icon');


caja.addEventListener( 'click',()=>{

    console.log("click");
    lista.classList.toggle('show');
    icon.classList.toggle('rotate');
    

})
console.log(caja, lista)