let menuMobile = document.querySelector('.menuMobile')
let botaoMenu = document.querySelector('.botaoMenu')
let goTop = document.querySelector('.goTop')

let aberto = false


function abrirOuFecharMenu() {
    if (aberto === true){
        aberto = false
        menuMobile.classList.remove('aberto')
        
        
    } else {
        aberto = true
        menuMobile.classList.add('aberto')
        
    }
}

function fecharMenu() {
    menuMobile.classList.remove('aberto')
}


function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 75 * i)

  });
}
const titulo = document.querySelector('.titulo-principal');
typeWrite(titulo);





window.addEventListener('scroll', function(){
    if(this.window.pageYOffset > 350){
        goTop.classList.add('active');
    } else {
        goTop.classList.remove('active');
    }
})

goTop.onclick = function() {
    window.scrollTo({top: 0,left: 0 , behavior: 'smooth'});
}
