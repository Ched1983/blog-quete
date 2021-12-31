const open4 = document.querySelector('#salon');
const modal4 = document.querySelector('#modal4');
const close4 = document.querySelector('#close4');

open4.addEventListener('click', function() {
    modal4.style.display = "block"
})

close4.addEventListener('click', function() {
    modal4.style.display = "none"
})

const open5 = document.querySelector('#balcon');
const modal5 = document.querySelector('#modal5');
const close5 = document.querySelector('#close5');

open5.addEventListener('click', function() {
    modal5.style.display = "block"
})

close5.addEventListener('click', function() {
    modal5.style.display = "none"
})

const open6 = document.querySelector('#cuisine');
const modal6 = document.querySelector('#modal6');
const close6 = document.querySelector('#close6');

open6.addEventListener('click', function() {
    modal6.style.display = "block"
})

close6.addEventListener('click', function() {
    modal6.style.display = "none"
})

const open7 = document.querySelector('#chambre-1');
const modal7 = document.querySelector('#modal7');
const close7 = document.querySelector('#close7');

open7.addEventListener('click', function() {
    modal7.style.display = "block"
})

close7.addEventListener('click', function() {
    modal7.style.display = "none"
})

const open8 = document.querySelector('#salle-de-bain');
const modal8 = document.querySelector('#modal8');
const close8 = document.querySelector('#close8');

open8.addEventListener('click', function() {
    modal8.style.display = "block"
})

close8.addEventListener('click', function() {
    modal8.style.display = "none"
})

const open9 = document.querySelector('#chambre-2');
const modal9 = document.querySelector('#modal9');
const close9 = document.querySelector('#close9');

open9.addEventListener('click', function() {
    modal9.style.display = "block"
})

close9.addEventListener('click', function() {
    modal9.style.display = "none"
})

const open10 = document.querySelector('#chambre-3');
const modal10 = document.querySelector('#modal10');
const close10 = document.querySelector('#close10');

open10.addEventListener('click', function() {
    modal10.style.display = "block"
})

close10.addEventListener('click', function() {
    modal10.style.display = "none"
})

const open11 = document.querySelector('#couloir');
const modal11 = document.querySelector('#modal11');
const close11 = document.querySelector('#close11');

open11.addEventListener('click', function() {
    modal11.style.display = "block"
})

close11.addEventListener('click', function() {
    modal11.style.display = "none"
})

const open12 = document.querySelector('#chambre-4');
const modal12 = document.querySelector('#modal12');
const close12 = document.querySelector('#close12');

open12.addEventListener('click', function() {
    modal12.style.display = "block"
})

close12.addEventListener('click', function() {
    modal12.style.display = "none"
})

let img_slider=document.getElementsByClassName('po');

let etape = 0;

let nbr_img = img_slider.lenght;

let precedent = document.querySelector('.precedent');
let suivant = document.querySelector('.suivant');

function enleverActiveImages() {
    for (let i = 0 ; i < nbr_img ; i++) {
        img_slider[i].classList.remove('active');
    }
}

suivant.addEventListener('click', function() {
    etape++;
    if(etape >=nbr_img) {
        etape = 0;
    }
    enleverActiveImages();
    img_slider[etape].classList.add('active')
})

precedent.addEventListener('click', function() {
    etape--;
    if(etape < 0) {
        etape = nbr_img -1;
    }
    enleverActiveImages();
    img_slider[etape].classList.add('active');
})