const open4 = document.querySelector('#salon');
const modal4 = document.querySelector('#modal4');
const close4 = document.querySelector('#close4');
let famillePhoto = "";

open4.addEventListener('click', function () {
    modal4.style.display = "block"
    famillePhoto = "salon"
})

close4.addEventListener('click', function () {
    modal4.style.display = "none"
})

const open5 = document.querySelector('#balcon');
const modal5 = document.querySelector('#modal5');
const close5 = document.querySelector('#close5');

open5.addEventListener('click', function () {
    modal5.style.display = "block"
    famillePhoto = "balcon"
})

close5.addEventListener('click', function () {
    modal5.style.display = "none"
})

const open6 = document.querySelector('#cuisine');
const modal6 = document.querySelector('#modal6');
const close6 = document.querySelector('#close6');

open6.addEventListener('click', function () {
    modal6.style.display = "block"
})

close6.addEventListener('click', function () {
    modal6.style.display = "none"
})

const open7 = document.querySelector('#chambre-1');
const modal7 = document.querySelector('#modal7');
const close7 = document.querySelector('#close7');

open7.addEventListener('click', function () {
    modal7.style.display = "block"
})

close7.addEventListener('click', function () {
    modal7.style.display = "none"
})

const open8 = document.querySelector('#salle-de-bain');
const modal8 = document.querySelector('#modal8');
const close8 = document.querySelector('#close8');

open8.addEventListener('click', function () {
    modal8.style.display = "block"
})

close8.addEventListener('click', function () {
    modal8.style.display = "none"
})

const open9 = document.querySelector('#chambre-2');
const modal9 = document.querySelector('#modal9');
const close9 = document.querySelector('#close9');

open9.addEventListener('click', function () {
    modal9.style.display = "block"
})

close9.addEventListener('click', function () {
    modal9.style.display = "none"
})

const open10 = document.querySelector('#chambre-3');
const modal10 = document.querySelector('#modal10');
const close10 = document.querySelector('#close10');

open10.addEventListener('click', function () {
    modal10.style.display = "block"
})

close10.addEventListener('click', function () {
    modal10.style.display = "none"
})

const open11 = document.querySelector('#couloir');
const modal11 = document.querySelector('#modal11');
const close11 = document.querySelector('#close11');

open11.addEventListener('click', function () {
    modal11.style.display = "block"
})

close11.addEventListener('click', function () {
    modal11.style.display = "none"
})

const open12 = document.querySelector('#chambre-4');
const modal12 = document.querySelector('#modal12');
const close12 = document.querySelector('#close12');


open12.addEventListener('click', function () {
    modal12.style.display = "block"
})

close12.addEventListener('click', function () {
    modal12.style.display = "none"
})

const previous = document.querySelector('#precedent')
const next = document.querySelector('#suivant')
const imgAll1 = document.querySelectorAll('.po1')
const imgAll2 = document.querySelectorAll('.po2')
const imgAct = document.querySelector('.active')
let nbrimg = 0;
imgAct.src = imgAll1[0].src;
// let imgAllFamille;
// console.log(imgAll1);
// if(famillePhoto === "salon"){
//     imgAllFamille = [].concat(imgAll1);
// }

// console.log(imgAllFamille)


// next.addEventListener('click', function () {
//     console.log(imgAllFamille)
//     if (nbrimg < imgAllFamille.length - 1) {
//         nbrimg++
//     }
//     else {
//         nbrimg = 0
//     }
//     imgAct.src = imgAllFamille[nbrimg].src
// })

next.addEventListener('click', function () {
    if (nbrimg < imgAll1.length - 1) {
        nbrimg++
    }
    else {
        nbrimg = 0
    }
    imgAct.src = imgAll1[nbrimg].src
})


previous.addEventListener('click', function () {
    if (nbrimg > 0) {
        nbrimg--
    }
    else {
        nbrimg = imgAll1.length - 1
    }
    imgAct.src = imgAll1[nbrimg].src

})
