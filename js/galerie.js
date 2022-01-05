// slider salon
const open4 = document.querySelector('#salon');
const modal4 = document.querySelector('#modal4');
const close4 = document.querySelector('#close4');


open4.addEventListener('click', function () {
    modal4.style.display = "block"
})

close4.addEventListener('click', function () {
    modal4.style.display = "none"
})

const previous1 = document.querySelector('#precedent1')
const next1 = document.querySelector('#suivant1')
const imgAll1 = document.querySelectorAll('.po1')
const imgAct1 = document.querySelectorAll('.active')[0]
let nbrimg1 = 0;
 imgAct1.src = imgAll1[0].src;

next1.addEventListener('click', function () {
    if (nbrimg1 < imgAll1.length - 1) {
        nbrimg1++
    }
    else {
        nbrimg1 = 0
    }
    imgAct1.src = imgAll1[nbrimg1].src
})


previous1.addEventListener('click', function () {
    if (nbrimg1 > 0) {
        nbrimg1--
    }
    else {
        nbrimg1 = imgAll1.length - 1
    }
    imgAct1.src = imgAll1[nbrimg1].src

})

//slider balcon
const open5 = document.querySelector('#balcon');
const modal5 = document.querySelector('#modal5');
const close5 = document.querySelector('#close5');

open5.addEventListener('click', function () {
    modal5.style.display = "block"
})

close5.addEventListener('click', function () {
    modal5.style.display = "none"
})


const next2 = document.querySelector('#suivant2')
const previous2 = document.querySelector('#precedent2')
const imgAll2 = document.querySelectorAll('.po2')
const imgAct2 = document.querySelectorAll('.active')[1]
let nbrimg2 = 0;
imgAct2.src = imgAll2[0].src;

next2.addEventListener('click', function () {
    if (nbrimg2 < imgAll2.length - 1) {
        nbrimg2++
    }
    else {
        nbrimg2 = 0
    }
    imgAct2.src = imgAll2[nbrimg2].src
})


previous2.addEventListener('click', function () {
    if (nbrimg2 > 0) {
        nbrimg2--
    }
    else {
        nbrimg2 = imgAll2.length - 1
    }
    imgAct2.src = imgAll2[nbrimg2].src

})

//slider cuisine
const open6 = document.querySelector('#cuisine');
const modal6 = document.querySelector('#modal6');
const close6 = document.querySelector('#close6');

open6.addEventListener('click', function () {
    modal6.style.display = "block"
})

close6.addEventListener('click', function () {
    modal6.style.display = "none"
})

const next3 = document.querySelector('#suivant3')
const previous3 = document.querySelector('#precedent3')
const imgAll3 = document.querySelectorAll('.po3')
const imgAct3 = document.querySelectorAll('.active')[2]
let nbrimg3 = 0;
imgAct3.src = imgAll3[0].src;

next3.addEventListener('click', function () {
    if (nbrimg3 < imgAll3.length - 1) {
        nbrimg3++
    }
    else {
        nbrimg3 = 0
    }
    imgAct3.src = imgAll3[nbrimg3].src
})


previous3.addEventListener('click', function () {
    if (nbrimg3 > 0) {
        nbrimg3--
    }
    else {
        nbrimg3 = imgAll3.length - 1
    }
    imgAct3.src = imgAll3[nbrimg3].src

})

//slider garcon
const open7 = document.querySelector('#chambre-1');
const modal7 = document.querySelector('#modal7');
const close7 = document.querySelector('#close7');

open7.addEventListener('click', function () {
    modal7.style.display = "block"
})

close7.addEventListener('click', function () {
    modal7.style.display = "none"
})

const next4 = document.querySelector('#suivant4')
const previous4 = document.querySelector('#precedent4')
const imgAll4 = document.querySelectorAll('.po4')
const imgAct4 = document.querySelectorAll('.active')[3]
let nbrimg4 = 0;
imgAct4.src = imgAll4[0].src;

next4.addEventListener('click', function () {
    if (nbrimg4 < imgAll4.length - 1) {
        nbrimg4++
    }
    else {
        nbrimg4 = 0
    }
    imgAct4.src = imgAll4[nbrimg4].src
})


previous4.addEventListener('click', function () {
    if (nbrimg4 > 0) {
        nbrimg4--
    }
    else {
        nbrimg4 = imgAll4.length - 1
    }
    imgAct4.src = imgAll4[nbrimg4].src

})

//slider salle de bain
const open8 = document.querySelector('#salle-de-bain');
const modal8 = document.querySelector('#modal8');
const close8 = document.querySelector('#close8');

open8.addEventListener('click', function () {
    modal8.style.display = "block"
})

close8.addEventListener('click', function () {
    modal8.style.display = "none"
})

const next5 = document.querySelector('#suivant5')
const previous5 = document.querySelector('#precedent5')
const imgAll5 = document.querySelectorAll('.po5')
const imgAct5 = document.querySelectorAll('.active')[4]
let nbrimg5 = 0;
imgAct5.src = imgAll5[0].src;

next5.addEventListener('click', function () {
    if (nbrimg5 < imgAll5.length - 1) {
        nbrimg5++
    }
    else {
        nbrimg5 = 0
    }
    imgAct5.src = imgAll5[nbrimg5].src
})


previous5.addEventListener('click', function () {
    if (nbrimg5 > 0) {
        nbrimg5--
    }
    else {
        nbrimg5 = imgAll5.length - 1
    }
    imgAct5.src = imgAll5[nbrimg5].src

})
//slider chambre rose
const open9 = document.querySelector('#chambre-2');
const modal9 = document.querySelector('#modal9');
const close9 = document.querySelector('#close9');

open9.addEventListener('click', function () {
    modal9.style.display = "block"
})

close9.addEventListener('click', function () {
    modal9.style.display = "none"
})

const next6 = document.querySelector('#suivant6')
const previous6 = document.querySelector('#precedent6')
const imgAll6 = document.querySelectorAll('.po6')
const imgAct6 = document.querySelectorAll('.active')[5]
let nbrimg6 = 0;
imgAct6.src = imgAll6[0].src;

next6.addEventListener('click', function () {
    if (nbrimg6 < imgAll6.length - 1) {
        nbrimg6++
    }
    else {
        nbrimg6 = 0
    }
    imgAct6.src = imgAll6[nbrimg6].src
})


previous6.addEventListener('click', function () {
    if (nbrimg6 > 0) {
        nbrimg6--
    }
    else {
        nbrimg6 = imgAll6.length - 1
    }
    imgAct6.src = imgAll6[nbrimg6].src

})

//slider chambre 2 filles
const open10 = document.querySelector('#chambre-3');
const modal10 = document.querySelector('#modal10');
const close10 = document.querySelector('#close10');

open10.addEventListener('click', function () {
    modal10.style.display = "block"
})

close10.addEventListener('click', function () {
    modal10.style.display = "none"
})

const next7 = document.querySelector('#suivant7')
const previous7 = document.querySelector('#precedent7')
const imgAll7 = document.querySelectorAll('.po7')
const imgAct7 = document.querySelectorAll('.active')[6]
let nbrimg7 = 0;
imgAct7.src = imgAll7[0].src;

next7.addEventListener('click', function () {
    if (nbrimg7 < imgAll7.length - 1) {
        nbrimg7++
    }
    else {
        nbrimg7 = 0
    }
    imgAct7.src = imgAll7[nbrimg7].src
})


previous7.addEventListener('click', function () {
    if (nbrimg7 > 0) {
        nbrimg7--
    }
    else {
        nbrimg7 = imgAll7.length - 1
    }
    imgAct7.src = imgAll7[nbrimg7].src

})

//slider couloir
const open11 = document.querySelector('#couloir');
const modal11 = document.querySelector('#modal11');
const close11 = document.querySelector('#close11');

open11.addEventListener('click', function () {
    modal11.style.display = "block"
})

close11.addEventListener('click', function () {
    modal11.style.display = "none"
})

const next8 = document.querySelector('#suivant8')
const previous8 = document.querySelector('#precedent8')
const imgAll8 = document.querySelectorAll('.po8')
const imgAct8 = document.querySelectorAll('.active')[7]
let nbrimg8 = 0;
imgAct8.src = imgAll8[0].src;

next8.addEventListener('click', function () {
    if (nbrimg8 < imgAll8.length - 1) {
        nbrimg8++
    }
    else {
        nbrimg8 = 0
    }
    imgAct8.src = imgAll8[nbrimg8].src
})


previous8.addEventListener('click', function () {
    if (nbrimg8 > 0) {
        nbrimg8--
    }
    else {
        nbrimg8 = imgAll8.length - 1
    }
    imgAct8.src = imgAll8[nbrimg8].src

})

//slider chambre parentale
const open12 = document.querySelector('#chambre-4');
const modal12 = document.querySelector('#modal12');
const close12 = document.querySelector('#close12');


open12.addEventListener('click', function () {
    modal12.style.display = "block"
})

close12.addEventListener('click', function () {
    modal12.style.display = "none"
})

const next9 = document.querySelector('#suivant9')
const previous9 = document.querySelector('#precedent9')
const imgAll9 = document.querySelectorAll('.po9')
const imgAct9 = document.querySelectorAll('.active')[8]
let nbrimg9 = 0;
imgAct9.src = imgAll9[0].src;

next9.addEventListener('click', function () {
    if (nbrimg9 < imgAll9.length - 1) {
        nbrimg9++
    }
    else {
        nbrimg9 = 0
    }
    imgAct9.src = imgAll9[nbrimg9].src
})


previous9.addEventListener('click', function () {
    if (nbrimg9 > 0) {
        nbrimg9--
    }
    else {
        nbrimg9 = imgAll9.length - 1
    }
    imgAct9.src = imgAll9[nbrimg9].src

})

 
