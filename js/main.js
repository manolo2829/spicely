// NAVBAR

const nav = document.querySelector('.header__nav__ul')
const bars = document.querySelector('.header__nav__icon')
const navContainer = document.querySelector('.header__icon__container')
let navState = false

// FUNCTION

navContainer.addEventListener('click', () => {
    mostrarLinks()
})

function mostrarLinks(){
    if (navState === false){
        nav.style.marginTop = '0px'
        nav.style.visibility = 'visible'

        navState = true
    }else if (navState === true){
        nav.style.marginTop = '-100%'
        nav.style.visibility = 'hidden'
        navState = false
    }
}

