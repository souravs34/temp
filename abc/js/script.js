const underlines = document.querySelectorAll('ul.navbar-right>li>a');
const cards = document.querySelectorAll('div.container>div.row>div.feature-box');
// console.log(underlines);
function handleHover () {
    this.classList.add('underline');
    // console.log(this);
}

function removeline (){
    this.classList.remove('underline');
    // console.log(this);
}

function scaleup(){
    this.classList.add('zoom');
}

function scaledown(){
    this.classList.remove('zoom');
}

function logscroll(){
    console.log(window.scrollY);
}

underlines.forEach(item=>item.addEventListener('mouseenter',handleHover));
underlines.forEach(item=>item.addEventListener('mouseleave',removeline));
cards.forEach(card=> card.addEventListener('mouseenter',scaleup));
cards.forEach(card=> card.addEventListener('mouseleave',scaledown));
window.addEventListener('scroll',logscroll);