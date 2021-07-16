let menuMobile = document.querySelector('.menuMobile')
let botaoMenu = document.querySelector('.botaoMenu')


let aberto = false


function abrirOuFecharMenu() {
    if (aberto === true){
        aberto = false
        menuMobile.classList.remove('aberto')
        console.log(aberto)
        
    } else {
        aberto = true
        menuMobile.classList.add('aberto')
        console.log(aberto)
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
