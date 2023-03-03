'use strict';

const btn1 = document.querySelector('.det1');
const btn2 = document.querySelector('.det2');
const btn3 = document.querySelector('.det3');
const btn4 = document.querySelector('.det4');
const btn5 = document.querySelector('.det5');

const icon1 = document.querySelector('.icon1');
const icon2 = document.querySelector('.icon2');
const icon3 = document.querySelector('.icon3');
const icon4 = document.querySelector('.icon4');
const icon5 = document.querySelector('.icon5');

btn1.addEventListener('click', function(){
    if (!icon1.classList.contains('rotate')){
        icon1.classList.add('rotate');
    }
    else {
        icon1.classList.remove('rotate');
    }
})

btn2.addEventListener('click', function(){
    if (!icon2.classList.contains('rotate')){
        icon2.classList.add('rotate');
    }
    else {
        icon2.classList.remove('rotate');
    }
})
btn3.addEventListener('click', function(){
    if (!icon3.classList.contains('rotate')){
        icon3.classList.add('rotate');
    }
    else {
        icon3.classList.remove('rotate');
    }
})
btn4.addEventListener('click', function(){
    if (!icon4.classList.contains('rotate')){
        icon4.classList.add('rotate');
    }
    else {
        icon4.classList.remove('rotate');
    }
})
btn5.addEventListener('click', function(){
    if (!icon5.classList.contains('rotate')){
        icon5.classList.add('rotate');
    }
    else {
        icon5.classList.remove('rotate');
    }
})