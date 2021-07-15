/*============== SHOW MENU ==============*/

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close'),
    navActive = document.getElementById('active')


/*============== ATIVAR MENU ==============*/

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })

}


if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


const wrapperMenu = document.getElementById('nav-bloco'),
    bloco = document.getElementById('bloco')

bloco.addEventListener('click', () => {
    event.preventDefault();
    wrapperMenu.classList.add('show-menu')


})

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link'),
    border = document.querySelectorAll('.nav__item')

function linkAction() {

    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')

    console.log(wrapperMenu.addEventListener('click', () => { wrapperMenu.classList.remove('show-menu') }))

}


/*==================== SCROLL ====================*/
window.onscroll = function() {
    showArrow()
}

navLink.forEach(n => n.addEventListener('click', linkAction))



const menuItens = document.querySelectorAll('.nav__bloco a[href^="#"]')


menuItens.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event) {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;



    window.scroll({
        top: to + 100

    });
}

function showArrow() {
    const arrowTop = document.getElementById('top');

    if (document.documentElement.scrollTop > 90) {
        arrowTop.style.display = "block";
    } else {
        arrowTop.style.display = "none";
    }
}

function subirTopo() {
    document.documentElement.scrollTop = 0;
}


document.getElementById('vid').play();