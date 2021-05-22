const boton = document.querySelector('#boton');

const configUser = window.matchMedia('(prefers-color-scheme: dark)')

boton.addEventListener('click', () => {
    console.log(configUser.matches)
    if (configUser.matches){
        document.body.classList.toggle('modo-claro')
    } else{
        document.body.classList.toggle('modo-oscuro') 
    }
})